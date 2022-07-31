let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = Math.floor(seconds / 60);
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// function displayEndTime(timestamp) {
//   const end = new Date(timestamp);
//   const hour = end.getHours();
//   const adjustedHour = hour > 12 ? hour - 12 : hour;
//   const minutes = end.getMinutes();
//   displayEndTime.textContent = `Be Back at ${adjustedHour}: ${
//     minutes < 10 ? "0" : ""
//   }`;
// }
