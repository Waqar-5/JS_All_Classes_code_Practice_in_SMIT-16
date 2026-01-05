// utils.js

// Sleep / delay for visualization
function sleep(ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Render a stack/queue into an HTML element
function renderList(el, list) {
  el.innerHTML = list.map(item => `<li>${item}</li>`).join('');
}

// Render all
function renderWithDelay(callStackEl, microtaskEl, taskEl, callStack, microtaskQueue, taskQueue, delay = 0) {
  renderList(callStackEl, callStack);
  renderList(microtaskEl, microtaskQueue);
  renderList(taskEl, taskQueue);
  return sleep(delay);
}

// Push to Call Stack
async function pushCallStack(el, stack, item, delay = 0) {
  stack.push(item);
  renderList(el, stack);
  await sleep(delay);
}

// Pop from Call Stack
async function popCallStack(el, stack, delay = 0) {
  stack.pop();
  renderList(el, stack);
  await sleep(delay);
}

// Log to simulated console
function logConsole(el, message) {
  el.innerHTML += message + "<br>";
  el.scrollTop = el.scrollHeight; // auto scroll
}

// Clear ul list
function clearList(el) {
  el.innerHTML = '';
}
