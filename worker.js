// worker.js (the worker script)

// Listen for messages from the main thread
self.onmessage = function (event) {
    const messageFromMain = event.data;
    console.log('Received message from main thread:', messageFromMain);
  
    // Simulate some time-consuming work
    const result = doSomeHeavyTask(messageFromMain);
  
    // Send the result back to the main thread
    self.postMessage('Worker finished: ' + result);
  };
  
  function doSomeHeavyTask(input) {
    // Simulate a time-consuming task (e.g., a computation)
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }
  