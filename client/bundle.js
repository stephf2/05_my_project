(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const url = "https://capitals-quiz.onrender.com/countries/random";

let currentCapital, currentCountry;
let score = 0;
const scoreText = document.querySelector("#score");

function displayScore() {
  scoreText.textContent = `Score: ${score}`
}

function fetchCountry(data) {

  const country = data;

  const textElement = document.querySelector("#question");
  textElement.textContent = country['name'];

  currentCapital = country['capital'];
  currentCountry = country['name'];
  // console.log(currentCapital);
}

function displayCountry() {
  fetch(url)
  .then(resp => resp.json())
  .then(fetchCountry);
}

function displayAnswerMessage(isCorrect) {
  answerMessage.style.visibility = 'visible';
  if (isCorrect) {
    answerMessage.textContent = `Correct answer!`;
    answerMessage.style.color = 'green';
  } else {
    answerMessage.textContent = `Incorrect, ${currentCapital} is the capital of ${currentCountry}`;
    answerMessage.style.color = 'firebrick';
  }
}

function checkAnswer(e) {
  e.preventDefault();
  const input = e.target.answer.value;
  if (input.toLowerCase() === currentCapital.toLowerCase()) {
    score++;
    displayAnswerMessage(true);
  } else {
    displayAnswerMessage(false);
  }
  e.target.answer.value = '';
  displayScore();
  displayCountry();
}

function displayTimer(timer, timerElement) {
  let minutes = Math.floor(timer / 60);
  let seconds = Math.floor(timer % 60);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timerElement.textContent= `${minutes}:${seconds}`;
}

function startTimer() {
  const timerElement = document.querySelector('#timer');
  let timer = 30; // set duration

  displayTimer(timer, timerElement); // initialise display
  
  // countdown
  var changeTimer = setInterval(function () {
    displayTimer(timer, timerElement);

    if (--timer < 0) {
      timer = 0;

      endGame();
      clearInterval(changeTimer);
    }
  }, 1000)
}

async function postScore(e) {
  const name = e.target.name.value;
  const finalScore = score;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      score: finalScore
    })
  }

  const response = await fetch(`https://capitals-quiz.onrender.com/capitals_scores`, options)
  console.log(response)
  if (response.status === 201) {
    console.log(`201 true`)
  }
}

function startGame() {
  replayButton.style.visibility = "hidden";
  answerMessage.style.visibility = "hidden";
  submitButton.removeAttribute("disabled");
  score = 0;
  displayScore();
  displayCountry();
  startTimer();
}

function endGame() {
  // Get name and score
  dialog.showModal();

  submitButton.setAttribute("disabled", true);

  replayButton.style.visibility = "visible";
}

const answerMessage = document.querySelector('#response');

const form = document.querySelector('#country-guess');
form.addEventListener('submit', checkAnswer);

const dialog = document.getElementById("dialog");
const dialogEntry = document.getElementById("name");
dialogEntry.addEventListener("submit", postScore);

// Form cancel button closes the dialog box
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => dialog.close("nameNotGiven"));

const replayButton = document.getElementById("replay");
replayButton.addEventListener("click", startGame)

const submitButton = document.querySelector('.submit-btn');

startGame();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB1cmwgPSBcImh0dHBzOi8vY2FwaXRhbHMtcXVpei5vbnJlbmRlci5jb20vY291bnRyaWVzL3JhbmRvbVwiO1xuXG5sZXQgY3VycmVudENhcGl0YWwsIGN1cnJlbnRDb3VudHJ5O1xubGV0IHNjb3JlID0gMDtcbmNvbnN0IHNjb3JlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmVcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTY29yZSgpIHtcbiAgc2NvcmVUZXh0LnRleHRDb250ZW50ID0gYFNjb3JlOiAke3Njb3JlfWBcbn1cblxuZnVuY3Rpb24gZmV0Y2hDb3VudHJ5KGRhdGEpIHtcblxuICBjb25zdCBjb3VudHJ5ID0gZGF0YTtcblxuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3Rpb25cIik7XG4gIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gY291bnRyeVsnbmFtZSddO1xuXG4gIGN1cnJlbnRDYXBpdGFsID0gY291bnRyeVsnY2FwaXRhbCddO1xuICBjdXJyZW50Q291bnRyeSA9IGNvdW50cnlbJ25hbWUnXTtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudENhcGl0YWwpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q291bnRyeSgpIHtcbiAgZmV0Y2godXJsKVxuICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAudGhlbihmZXRjaENvdW50cnkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QW5zd2VyTWVzc2FnZShpc0NvcnJlY3QpIHtcbiAgYW5zd2VyTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgYW5zd2VyTWVzc2FnZS50ZXh0Q29udGVudCA9IGBDb3JyZWN0IGFuc3dlciFgO1xuICAgIGFuc3dlck1lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xuICB9IGVsc2Uge1xuICAgIGFuc3dlck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgSW5jb3JyZWN0LCAke2N1cnJlbnRDYXBpdGFsfSBpcyB0aGUgY2FwaXRhbCBvZiAke2N1cnJlbnRDb3VudHJ5fWA7XG4gICAgYW5zd2VyTWVzc2FnZS5zdHlsZS5jb2xvciA9ICdmaXJlYnJpY2snO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQW5zd2VyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LmFuc3dlci52YWx1ZTtcbiAgaWYgKGlucHV0LnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRDYXBpdGFsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBzY29yZSsrO1xuICAgIGRpc3BsYXlBbnN3ZXJNZXNzYWdlKHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlBbnN3ZXJNZXNzYWdlKGZhbHNlKTtcbiAgfVxuICBlLnRhcmdldC5hbnN3ZXIudmFsdWUgPSAnJztcbiAgZGlzcGxheVNjb3JlKCk7XG4gIGRpc3BsYXlDb3VudHJ5KCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaW1lcih0aW1lciwgdGltZXJFbGVtZW50KSB7XG4gIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcbiAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVyICUgNjApO1xuXG4gIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcbiAgfVxuXG4gIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICBzZWNvbmRzID0gYDAke3NlY29uZHN9YDtcbiAgfVxuXG4gIHRpbWVyRWxlbWVudC50ZXh0Q29udGVudD0gYCR7bWludXRlc306JHtzZWNvbmRzfWA7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gIGNvbnN0IHRpbWVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lcicpO1xuICBsZXQgdGltZXIgPSAzMDsgLy8gc2V0IGR1cmF0aW9uXG5cbiAgZGlzcGxheVRpbWVyKHRpbWVyLCB0aW1lckVsZW1lbnQpOyAvLyBpbml0aWFsaXNlIGRpc3BsYXlcbiAgXG4gIC8vIGNvdW50ZG93blxuICB2YXIgY2hhbmdlVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGxheVRpbWVyKHRpbWVyLCB0aW1lckVsZW1lbnQpO1xuXG4gICAgaWYgKC0tdGltZXIgPCAwKSB7XG4gICAgICB0aW1lciA9IDA7XG5cbiAgICAgIGVuZEdhbWUoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2hhbmdlVGltZXIpO1xuICAgIH1cbiAgfSwgMTAwMClcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdFNjb3JlKGUpIHtcbiAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWUudmFsdWU7XG4gIGNvbnN0IGZpbmFsU2NvcmUgPSBzY29yZTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzY29yZTogZmluYWxTY29yZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NhcGl0YWxzLXF1aXoub25yZW5kZXIuY29tL2NhcGl0YWxzX3Njb3Jlc2AsIG9wdGlvbnMpXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICBjb25zb2xlLmxvZyhgMjAxIHRydWVgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgcmVwbGF5QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBhbnN3ZXJNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIHNjb3JlID0gMDtcbiAgZGlzcGxheVNjb3JlKCk7XG4gIGRpc3BsYXlDb3VudHJ5KCk7XG4gIHN0YXJ0VGltZXIoKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgLy8gR2V0IG5hbWUgYW5kIHNjb3JlXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcblxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG5cbiAgcmVwbGF5QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuY29uc3QgYW5zd2VyTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZScpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnktZ3Vlc3MnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2hlY2tBbnN3ZXIpO1xuXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcbmNvbnN0IGRpYWxvZ0VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuZGlhbG9nRW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBwb3N0U2NvcmUpO1xuXG4vLyBGb3JtIGNhbmNlbCBidXR0b24gY2xvc2VzIHRoZSBkaWFsb2cgYm94XG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKTtcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nLmNsb3NlKFwibmFtZU5vdEdpdmVuXCIpKTtcblxuY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBsYXlcIik7XG5yZXBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSlcblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcblxuc3RhcnRHYW1lKCk7Il19
