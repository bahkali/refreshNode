const waitTime = 3000; // 3s
const waitInterval = 500;
let currentTime = 0;
console.log(`setting a ${waitTime / 1000} second delay`);

// Function once timer is finish
const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
};

// incrimental function
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);

// the first params take the function to execute once timer is done
// the second params the wait time
setTimeout(timerFinished, waitTime);
