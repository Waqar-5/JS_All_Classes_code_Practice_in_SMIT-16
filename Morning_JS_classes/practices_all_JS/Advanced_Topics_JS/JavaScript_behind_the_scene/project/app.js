// app.js

const codeInput = document.getElementById('codeInput');
const runBtn = document.getElementById('runCode');
const callStackEl = document.getElementById('callStack');
const microtaskQueueEl = document.getElementById('microtaskQueue');
const taskQueueEl = document.getElementById('taskQueue');
const consoleOutput = document.getElementById('consoleOutput');

let callStack = [];
window.microtaskQueue = [];
window.taskQueue = [];

// Step delay for visualization
const STEP_DELAY = 500;

// Override console.log to show call stack
const originalLog = console.log;
console.log = async function(...args) {
  await pushCallStack(callStackEl, callStack, 'console.log', STEP_DELAY);
  originalLog(...args);
  logConsole(consoleOutput, args.join(' '));
  await popCallStack(callStackEl, callStack, STEP_DELAY);
};

// Execute user code
async function executeCode(userCode) {
  // Reset everything
  callStack = [];
  window.microtaskQueue = [];
  window.taskQueue = [];
  consoleOutput.innerHTML = '';
  clearList(callStackEl);
  clearList(microtaskQueueEl);
  clearList(taskQueueEl);

  await pushCallStack(callStackEl, callStack, 'Global Execution', STEP_DELAY);

  try {

    // Task wrapper (setTimeout)
    const setTimeoutWrapper = (fn, t = 0) => {
      window.taskQueue.push('setTimeout');
      renderWithDelay(callStackEl, microtaskQueueEl, taskQueueEl, callStack, window.microtaskQueue, window.taskQueue, STEP_DELAY);

      setTimeout(async () => {
        await pushCallStack(callStackEl, callStack, 'setTimeout', STEP_DELAY);

        window.taskQueue.shift();
        renderWithDelay(callStackEl, microtaskQueueEl, taskQueueEl, callStack, window.microtaskQueue, window.taskQueue, STEP_DELAY);

        await fn();
        await popCallStack(callStackEl, callStack, STEP_DELAY);
      }, t);
    };

    // Microtask wrapper (Promise)
    const PromiseWrapper = (promise) => {
      window.microtaskQueue.push('Promise');
      renderWithDelay(callStackEl, microtaskQueueEl, taskQueueEl, callStack, window.microtaskQueue, window.taskQueue, STEP_DELAY);

      promise.then(async () => {
        await sleep(STEP_DELAY); // ensure UI shows the queue

        await pushCallStack(callStackEl, callStack, 'Promise', STEP_DELAY);

        window.microtaskQueue.shift();
        renderWithDelay(callStackEl, microtaskQueueEl, taskQueueEl, callStack, window.microtaskQueue, window.taskQueue, STEP_DELAY);

        await sleep(STEP_DELAY); // allow user to see

        await popCallStack(callStackEl, callStack, STEP_DELAY);
      });
    };

    // Wrap user code in async function
    const userFunc = new Function('setTimeoutWrapper', 'PromiseWrapper', 'console', userCode);
    userFunc(setTimeoutWrapper, PromiseWrapper, console);

  } catch (err) {
    logConsole(consoleOutput, `Error: ${err}`);
  }

  await popCallStack(callStackEl, callStack, STEP_DELAY);
}

// Run button
runBtn.addEventListener('click', () => executeCode(codeInput.value));
