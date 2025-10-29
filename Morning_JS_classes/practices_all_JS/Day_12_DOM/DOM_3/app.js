// DOM Mastery — app.js
// Author: Waqar Ali
// Purpose: single-file JS to demonstrate and practice DOM concepts interactively.

// -----------------------------
// Helpers & initial setup
// -----------------------------
const logBox = document.getElementById('log');
const selectedBox = document.getElementById('selectedBox');

function log(...args) {
  const txt = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ');
  const time = new Date().toLocaleTimeString();
  logBox.innerHTML += `[${time}] ${txt}<br>`;
  logBox.scrollTop = logBox.scrollHeight;
  console.log(...args);
}

function clearLog() { logBox.innerHTML = ''; }

// quick selector
const byId = id => document.getElementById(id);

// store references
const playgroundRoot = byId('root');
const parentBox = byId('parentBox');
const inputText = byId('inputText');
const selectTag = byId('selectTag');

// state (selected element)
let selected = null;

// utility to visually highlight an element for n ms
function highlight(el, ms = 800) {
  if (!el) return;
  el.classList.add('highlight');
  setTimeout(() => el.classList.remove('highlight'), ms);
}

// safe stringify for nodes
function nodeLabel(node) {
  if (!node) return 'null';
  if (node.nodeType === Node.ELEMENT_NODE) {
    const id = node.id ? `#${node.id}` : '';
    const cls = node.className ? `.${node.className.split(' ').join('.')}` : '';
    return `<${node.nodeName.toLowerCase()}${id}${cls}>`;
  }
  if (node.nodeType === Node.TEXT_NODE) return `#text("${node.nodeValue.trim().slice(0,20)}")`;
  return `${node.nodeName} (type ${node.nodeType})`;
}

// -----------------------------
// Selection & inspector logic
// -----------------------------
function selectElement(el) {
  selected = el;
  selectedBox.innerHTML = el ? `${nodeLabel(el)} — nodeType:${el.nodeType}` : 'none';
  if (el && el.nodeType === Node.ELEMENT_NODE) {
    highlight(el, 900);
  }
  log('Selected ->', nodeLabel(el));
}

// click-to-select in playground (event delegation)
playgroundRoot.addEventListener('click', (ev) => {
  // avoid clicking controls via event bubbling
  const el = ev.target;
  if (el === playgroundRoot || el.id === 'root-title') {
    selectElement(playgroundRoot);
    return;
  }
  selectElement(el);
});

// -----------------------------
// Buttons: basic DOM operations
// -----------------------------
byId('selectById').addEventListener('click', () => {
  const id = prompt('Enter ID to select (e.g., c2, parentBox, list):', 'c1');
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) { log(`Element with id="${id}" not found.`); return; }
  selectElement(el);
});

byId('selectByQuery').addEventListener('click', () => {
  const q = prompt('Enter selector (e.g., .child, #parentBox, ul li):', '.child');
  if (!q) return;
  const el = document.querySelector(q);
  if (!el) { log(`No match for selector "${q}"`); return; }
  selectElement(el);
});

// show parent
byId('showParents').addEventListener('click', () => {
  if (!selected) { log('Select an element first (click it in the playground).'); return; }
  const parent = selected.parentNode;
  log('Parent of', nodeLabel(selected), 'is', nodeLabel(parent));
  highlight(parent);
});

// show children (element children only)
byId('showChildren').addEventListener('click', () => {
  if (!selected) { log('Select an element first.'); return; }
  const children = selected.children;
  log(`${nodeLabel(selected)} has ${children.length} element children:`, Array.from(children).map(c => nodeLabel(c)));
  Array.from(children).forEach(c => highlight(c, 700));
});

// count all elements on page
byId('countElements').addEventListener('click', () => {
  const all = document.getElementsByTagName('*');
  log('Total element nodes on current page:', all.length);
});

// show node types of selected element's childNodes
byId('showNodeTypes').addEventListener('click', () => {
  const el = selected || parentBox;
  const details = Array.from(el.childNodes).map((n, i) => `${i}: ${nodeLabel(n)} (type ${n.nodeType})`);
  log(`childNodes of ${nodeLabel(el)} ->`, details.join(' | '));
});

// show attributes of selected element
byId('showAttrs').addEventListener('click', () => {
  const el = selected || parentBox;
  if (!el.attributes) { log('No attributes for selected node'); return; }
  const attrs = Array.from(el.attributes).map(a => `${a.name}="${a.value}"`);
  log(`Attributes of ${nodeLabel(el)} ->`, attrs.length ? attrs.join(', ') : '(none)');
});

// direct set attribute quick
byId('setAttr').addEventListener('click', () => {
  const el = selected || parentBox;
  const name = prompt('Attribute name (e.g., data-role or title):', 'data-demo');
  if (!name) return;
  const value = prompt('Attribute value:', 'hello');
  el.setAttribute(name, value);
  log(`Set attribute on ${nodeLabel(el)}: ${name}="${value}"`);
  highlight(el);
});

// append node (to selected or parentBox)
byId('addNode').addEventListener('click', () => {
  const target = selected && selected.nodeType === Node.ELEMENT_NODE ? selected : parentBox;
  const tag = selectTag.value || 'p';
  const txt = inputText.value.trim() || `New ${tag} — ${Date.now() % 1000}`;
  const node = document.createElement(tag);
  node.textContent = txt;
  node.className = 'node small';
  target.appendChild(node);
  log(`Appended ${nodeLabel(node)} to ${nodeLabel(target)} with text: "${txt}"`);
  highlight(node);
});

// insert before first child of selected or parentBox
byId('insertNode').addEventListener('click', () => {
  const target = selected && selected.nodeType === Node.ELEMENT_NODE ? selected : parentBox;
  const tag = selectTag.value || 'p';
  const txt = inputText.value.trim() || `Inserted ${tag}`;
  const node = document.createElement(tag);
  node.textContent = txt;
  node.className = 'node small';
  const ref = target.firstElementChild;
  target.insertBefore(node, ref);
  log(`Inserted ${nodeLabel(node)} before ${nodeLabel(ref)} in ${nodeLabel(target)}`);
  highlight(node);
});

// remove last element child of selected or parentBox
byId('removeNode').addEventListener('click', () => {
  const target = selected && selected.nodeType === Node.ELEMENT_NODE ? selected : parentBox;
  const last = target.lastElementChild;
  if (!last) { log(`No element children to remove in ${nodeLabel(target)}`); return; }
  target.removeChild(last);
  log(`Removed ${nodeLabel(last)} from ${nodeLabel(target)}`);
});

// Clean whitespace text nodes robustly (handles NBSP)
byId('clearWhitespace').addEventListener('click', () => {
  const target = selected && selected.nodeType === Node.ELEMENT_NODE ? selected : parentBox;
  let removed = 0;
  for (let i = target.childNodes.length - 1; i >= 0; i--) {
    const n = target.childNodes[i];
    if (n.nodeType === Node.TEXT_NODE) {
      const v = n.nodeValue || '';
      if (/^[\s\u00A0]*$/.test(v)) {
        target.removeChild(n);
        removed++;
      }
    }
  }
  log(`Cleaned whitespace text nodes in ${nodeLabel(target)} — removed ${removed}`);
});

// -----------------------------
// Attribute editor controls (in inspector)
byId('setAttributeBtn').addEventListener('click', () => {
  if (!selected || selected.nodeType !== Node.ELEMENT_NODE) { log('Select an element first'); return; }
  const name = byId('attrName').value.trim();
  const value = byId('attrValue').value;
  if (!name) { log('Provide attribute name'); return; }
  selected.setAttribute(name, value);
  log(`Attribute set on ${nodeLabel(selected)}: ${name}="${value}"`);
});

byId('removeAttributeBtn').addEventListener('click', () => {
  if (!selected || selected.nodeType !== Node.ELEMENT_NODE) { log('Select an element first'); return; }
  const name = byId('attrName').value.trim();
  if (!name) return log('Provide attribute name to remove');
  selected.removeAttribute(name);
  log(`Removed attribute "${name}" from ${nodeLabel(selected)}`);
});

byId('listAttributesBtn').addEventListener('click', () => {
  if (!selected || selected.nodeType !== Node.ELEMENT_NODE) { log('Select an element first'); return; }
  const attrs = Array.from(selected.attributes).map(a => `${a.name}="${a.value}"`);
  log(`Attributes of ${nodeLabel(selected)} :`, attrs.length ? attrs.join(', ') : '(none)');
});

// -----------------------------
// localStorage save/load: we save innerHTML of playground root
byId('saveState').addEventListener('click', () => {
  const state = playgroundRoot.innerHTML;
  localStorage.setItem('domExplorer_state', state);
  log('Saved playground state to localStorage.');
});

byId('loadState').addEventListener('click', () => {
  const state = localStorage.getItem('domExplorer_state');
  if (!state) { log('No saved state in localStorage.'); return; }
  playgroundRoot.innerHTML = state;
  // rebind click-to-select since we replaced DOM nodes
  log('Loaded playground state from localStorage. Rebinding interactive handlers.');
});

// reset DOM to original initial markup (hard reset)
const initialMarkup = playgroundRoot.innerHTML;
byId('resetDom').addEventListener('click', () => {
  playgroundRoot.innerHTML = initialMarkup;
  selected = null;
  selectedBox.innerHTML = 'none';
  log('Playground reset to initial state.');
});

// explain current node: prints a step-by-step "teaching" on selected node
byId('explain').addEventListener('click', () => {
  const el = selected || playgroundRoot;
  log(`EXPLAIN: ${nodeLabel(el)}`);
  if (el.nodeType === Node.ELEMENT_NODE) {
    log(` - tagName: ${el.tagName}`);
    log(` - id: ${el.id || '(none)'}`);
    log(` - classes: ${el.className || '(none)'}`);
    log(` - attributes:`, Array.from(el.attributes).map(a => `${a.name}="${a.value}"`).join(', ') || '(none)');
    log(` - children (elements): ${el.children.length}`);
    log(` - childNodes (incl. text nodes): ${el.childNodes.length}`);
  } else if (el.nodeType === Node.TEXT_NODE) {
    log(` - text length: ${el.nodeValue.length}`);
    log(` - text preview: "${el.nodeValue.trim().slice(0,80)}"`);
  }
});

// commit button: quick alias for append and log (friendly UX)
byId('commit').addEventListener('click', () => {
  byId('addNode').click();
});

// small initialization log
log('DOM Mastery loaded — click elements in the playground to select them or use the buttons to experiment.');
