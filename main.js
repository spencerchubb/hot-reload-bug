import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import * as solver from "@spencerchubb/solver";

solver.solve({
    alg: "L2 D2 F2 L' F2 R' F2 L2 B2 R B2 R2 B D F2 R' F' U B R2 B'",
    moves: "U U' D D' L L' R R' F F' B B'",
    disregard: [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19],
    maxSolutions: 3,
}).then(result => console.log(result));

// Create a new Worker
const worker = new Worker('worker.js');

// Listen for messages from the worker
worker.onmessage = function (event) {
  console.log('Received message from worker:', event.data);
};

// Send a message to the worker
worker.postMessage('Hello from the main thread!');

// Close the worker when done (optional)
worker.onmessage = function () {
  worker.terminate();
};