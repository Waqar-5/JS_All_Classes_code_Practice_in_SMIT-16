/* Galaxy Mission Control — script.js
   ✦ Demonstrates: objects, nested objects, methods, add/delete properties,
     for...in loops, 'in' operator, converting keys to array, counting props,
     manual copy, dot & bracket notation examples, localStorage persistence,
     export JSON.
*/

// -------- Demo initial data (Assignment 1 & 5: objects & nested object) --------
const DEMO_KEY = "galaxy_hangar_v1";

let hangar = {
  ship1: {
    name: "Star Voyager",
    model: "XJ-9",
    year: 2050,
    fuel: "Hydrogen",
    color: "Starlight White",
    systems: { shields: "Mark-3", engines: "WarpDrive V" }, // nested object
    pilot: { name: "Commander Zara", rank: "Captain" }, // nested
    // Assignment 4: method inside object
    showDetails: function() {
      // 'this' refers to this ship object
      return `${this.name} (${this.model}) — Piloted by ${this.pilot.name} • Fuel: ${this.fuel}`;
    }
  },

  // another ship
  ship2: {
    name: "Nebula Corsair",
    model: "NC-7",
    year: 2063,
    fuel: "Antimatter",
    color: "Nebula Blue",
    systems: { shields: "Aegis", engines: "Ion Thrusters" },
    pilot: { name: "Lt. Iqbal", rank: "Lieutenant" },
    showDetails: function() {
      return `${this.name} — ${this.model} • Pilot: ${this.pilot.name}`;
    }
  }
};

// load from localStorage if exists
function loadHangar() {
  const raw = localStorage.getItem(DEMO_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      // restore functions (methods) manually for demo ships if missing - keeps UI/logic stable
      for (const k in parsed) {
        if (!parsed[k].showDetails) {
          parsed[k].showDetails = function() {
            return `${this.name} (${this.model}) • Pilot: ${this.pilot?.name || "TBD"}`;
          };
        }
      }
      hangar = parsed;
    } catch (e) {
      console.warn("Failed to parse saved hangar:", e);
    }
  }
}
loadHangar();

// save to localStorage helper
function saveHangar() {
  // remove function properties (can't JSON.stringify functions) by creating a shallow copy without functions
  const copySafe = {};
  for (const k in hangar) {
    copySafe[k] = {};
    for (const p in hangar[k]) {
      if (typeof hangar[k][p] !== "function") copySafe[k][p] = hangar[k][p];
    }
  }
  localStorage.setItem(DEMO_KEY, JSON.stringify(copySafe));
}

// UI nodes
const hangarEl = document.getElementById("hangar");
const outputEl = document.getElementById("output");
const shipForm = document.getElementById("shipForm");
const shipIdEl = document.getElementById("shipId");
const shipKeyEl = document.getElementById("shipKey");
const brandEl = document.getElementById("brand");
const modelEl = document.getElementById("model");
const yearEl = document.getElementById("year");
const fuelEl = document.getElementById("fuel");
const colorEl = document.getElementById("color");
const pilotNameEl = document.getElementById("pilotName");
const pilotRankEl = document.getElementById("pilotRank");

// buttons
document.getElementById("btnNewShip").onclick = () => openNewForm();
document.getElementById("btnExport").onclick = exportJSON;
document.getElementById("btnReset").onclick = resetDemo;

document.getElementById("btnAddProp").onclick = addPropertyDialog;
document.getElementById("btnDeleteProp").onclick = deletePropertyDialog;
document.getElementById("btnShowDotBracket").onclick = showDotBracketDemo;
document.getElementById("btnCountProps").onclick = countPropsDialog;
document.getElementById("btnKeysArray").onclick = keysArrayDialog;
document.getElementById("btnManualCopy").onclick = manualCopyDialog;
document.getElementById("btnCheckIn").onclick = checkInDialog;
document.getElementById("btnLoop").onclick = loopDialog;

document.getElementById("btnCancel").onclick = (e) => { e.preventDefault(); clearForm(); };

// render hangar
function renderHangar() {
  hangarEl.innerHTML = "";
  for (const key in hangar) {
    const s = hangar[key];
    const card = document.createElement("div");
    card.className = "card-ship";
    card.innerHTML = `
      <div class="ship-title">
        <div class="badge">${key}</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <strong style="font-size:16px">${s.name} <span class="muted">(${s.model || "unknown"})</span></strong>
            <div class="muted">${s.year || "N/A"}</div>
          </div>
          <div class="muted">${s.color || "—"} • ${s.fuel || "—"}</div>
        </div>
      </div>
      <p class="muted">Pilot: ${s.pilot?.name || "TBD"} (${s.pilot?.rank || "—"})</p>
      <p class="muted">Systems: ${objectNestedSummary(s.systems)}</p>
      <div class="card-actions">
        <button onclick="viewDetails('${key}')">Details</button>
        <button onclick="editShip('${key}')">Edit</button>
        <button onclick="duplicateShip('${key}')">Duplicate</button>
        <button onclick="removeShip('${key}')">Delete</button>
      </div>
    `;
    hangarEl.appendChild(card);
  }
  saveHangar();
}
function objectNestedSummary(obj) {
  if (!obj) return "—";
  const parts = [];
  for (const k in obj) parts.push(`${k}:${obj[k]}`);
  return parts.join(", ");
}

// ========== Form logic (create / update ship) ==========
function openNewForm() {
  clearForm();
  shipIdEl.focus();
}
function clearForm() {
  shipKeyEl.value = "";
  shipIdEl.value = "";
  brandEl.value = "";
  modelEl.value = "";
  yearEl.value = "";
  fuelEl.value = "";
  colorEl.value = "";
  pilotNameEl.value = "";
  pilotRankEl.value = "";
  output("Form cleared. Create a new ship or click a card's Edit.");
}
function editShip(key) {
  const s = hangar[key];
  if (!s) { output(`Ship ${key} not found.`); return; }
  shipKeyEl.value = key;
  shipIdEl.value = key;
  brandEl.value = s.name || "";
  modelEl.value = s.model || "";
  yearEl.value = s.year || "";
  fuelEl.value = s.fuel || "";
  colorEl.value = s.color || "";
  pilotNameEl.value = s.pilot?.name || "";
  pilotRankEl.value = s.pilot?.rank || "";
  output(`Editing ${key} — change fields and Save.`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

shipForm.onsubmit = function(evt) {
  evt.preventDefault();
  const key = shipIdEl.value.trim();
  if (!key) { output("ID required (like ship3)."); return; }
  const shipObj = {
    name: brandEl.value || "Unknown",
    model: modelEl.value || "—",
    year: yearEl.value ? Number(yearEl.value) : undefined,
    fuel: fuelEl.value || undefined,
    color: colorEl.value || undefined,
    systems: { shields: "Mk-1" },
    pilot: { name: pilotNameEl.value || "TBD", rank: pilotRankEl.value || "—" }
  };
  // Add method (Assignment 4)
  shipObj.showDetails = function() {
    return `${this.name} (${this.model}) • Pilot: ${this.pilot.name}`;
  };

  // Save (create or update)
  hangar[key] = shipObj;
  renderHangar();
  clearForm();
  output(`Saved ${key} to hangar.`);
};

// ========== Card actions ==========
function viewDetails(key) {
  const s = hangar[key];
  if (!s) return output("Ship not found.");
  // Demonstrate method call inside object
  const details = s.showDetails ? s.showDetails() : `${s.name} (${s.model})`;
  let msg = `▶ ${key} — ${details}\n\nFull object:\n${JSON.stringify(s, replacer, 2)}`;
  output(msg);
}
function replacer(k, v) { if (typeof v === "function") return "[Function]"; return v; }

function removeShip(key) {
  if (!confirm(`Delete ${key}? This will remove the object property.`)) return;
  delete hangar[key]; // Assignment 2: delete property from object
  renderHangar();
  output(`Deleted ${key} from hangar.`);
}

// Assignment 10: Manual copy (shallow)
function duplicateShip(key) {
  const original = hangar[key];
  if (!original) return output("Ship not found.");
  // manual shallow copy using for...in
  const newKeyBase = key + "_copy";
  let idx = 1; let newKey = newKeyBase;
  while (newKey in hangar) { newKey = newKeyBase + idx; idx++; }
  const copy = {};
  for (const p in original) {
    // copy property values manually
    copy[p] = original[p];
  }
  // ensure method exists
  if (!copy.showDetails) copy.showDetails = function() { return `${this.name} (${this.model}) • Pilot: ${this.pilot?.name || "TBD"}`; };
  hangar[newKey] = copy;
  renderHangar();
  output(`Created manual shallow copy: ${newKey}`);
}

// ========== Quick action dialogs & demos (map to assignments) ==========
function addPropertyDialog() {
  const key = prompt("Which ship id to add property to? (e.g. ship1)");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  const prop = prompt("Property name to add (e.g. hyperdrive):");
  if (!prop) return output("No property name given.");
  const val = prompt("Property value (string):");
  // demonstrate bracket notation dynamic property
  hangar[key][prop] = val;
  renderHangar();
  output(`Added property [${prop}] to ${key} using bracket notation.`);
}

function deletePropertyDialog() {
  const key = prompt("Ship id to delete property from?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  const prop = prompt("Property name to delete (e.g. year):");
  if (!prop) return output("No property name.");
  if (prop in hangar[key]) {
    delete hangar[key][prop];
    renderHangar();
    output(`Deleted property '${prop}' from ${key}.`);
  } else {
    output(`Property '${prop}' does not exist on ${key}.`);
  }
}

function showDotBracketDemo() {
  // Demonstrates dot vs bracket — real live example
  const key = Object.keys(hangar)[0];
  if (!key) return output("No ships available.");
  const ship = hangar[key];
  // dot access
  const dot = ship.name;
  // bracket access (using variable)
  const propName = "model";
  const bracket = ship[propName];
  output(`Dot notation: ship.name -> ${dot}\nBracket notation: ship['${propName}'] -> ${bracket}\n(Use bracket when property name is dynamic)`);
}

function countPropsDialog() {
  const key = prompt("Ship id to count properties for?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  const count = countProperties(hangar[key]);
  output(`Total properties in ${key}: ${count}`);
}
function countProperties(obj) {
  let c = 0;
  for (const k in obj) c++;
  return c;
}

function keysArrayDialog() {
  const key = prompt("Ship id to convert keys to array?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  const arr = keysToArray(hangar[key]);
  output(`Keys array for ${key}: [ ${arr.join(", ")} ]`);
}
function keysToArray(obj) {
  const a = [];
  for (const k in obj) a.push(k);
  return a;
}

function manualCopyDialog() {
  const key = prompt("Ship id to manually copy?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  duplicateShip(key);
}

function checkInDialog() {
  const key = prompt("Ship id to check property existence?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  const prop = prompt("Property name to check with 'in' (e.g. fuel)");
  if (!prop) return output("No property given.");
  const exists = prop in hangar[key];
  output(`'${prop}' in ${key} -> ${exists}`);
}

function loopDialog() {
  const key = prompt("Ship id to run for...in loop on?");
  if (!key || !(key in hangar)) return output("Invalid ship id.");
  let res = `for...in output for ${key}:\n`;
  for (const k in hangar[key]) {
    const v = hangar[key][k];
    res += `${k} -> ${typeof v === "object" ? JSON.stringify(v) : v}\n`;
  }
  output(res);
}

// ========== Export / Reset ==========
function exportJSON() {
  const data = JSON.stringify(hangar, replacer, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hangar_export.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  output("Exported hangar JSON.");
}

function resetDemo() {
  if (!confirm("Reset demo data to original sample? This clears saved hangar.")) return;
  localStorage.removeItem(DEMO_KEY);
  // reload initial sample
  hangar = {
    ship1: {
      name: "Star Voyager",
      model: "XJ-9",
      year: 2050,
      fuel: "Hydrogen",
      color: "Starlight White",
      systems: { shields: "Mark-3", engines: "WarpDrive V" },
      pilot: { name: "Commander Zara", rank: "Captain" },
      showDetails: function() { return `${this.name} (${this.model}) • Pilot: ${this.pilot.name}`; }
    },
    ship2: {
      name: "Nebula Corsair",
      model: "NC-7",
      year: 2063,
      fuel: "Antimatter",
      color: "Nebula Blue",
      systems: { shields: "Aegis", engines: "Ion Thrusters" },
      pilot: { name: "Lt. Iqbal", rank: "Lieutenant" },
      showDetails: function() { return `${this.name} — ${this.model} • Pilot: ${this.pilot.name}`; }
    }
  };
  renderHangar();
  output("Demo reset to sample ships.");
}

// ========== Utilities ==========
function output(msg) {
  outputEl.textContent = msg;
}

// initial render
renderHangar();

// helpful first-run note
output("Demo loaded. Click '+ New Spaceship' to start. Use Quick Actions to practice each assignment.");
