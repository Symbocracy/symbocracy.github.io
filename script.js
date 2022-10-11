

const myInterval = setInterval(changeTitle, 1000, "mainTitle");

let myIntervalCounter = 0;
function changeTitle(mainTitle) {
  let title = getid(mainTitle);
  let differentTitles = ["$1M80KR4C1", "Symbocracy", "Simbokreisi", "Simbokrasi", "$YM80KR4CY", "$¥M80CR4CY", "Simbocreisi"];

  if (myIntervalCounter != differentTitles.length - 1) myIntervalCounter++;
  else myIntervalCounter = 0;
  title.textContent = differentTitles[myIntervalCounter];
}

function myStopFunction() {
  clearInterval(myInterval);
}

let darkModeBtn = getid("darkModeBtn");

darkModeBtn.addEventListener('click', changeDarkMode)
function changeDarkMode(event) {
  let me = event.currentTarget;
  let element = document.body;
  
  if (me.textContent == "☀") me.textContent = "☾"
  else me.textContent = "☀";
  element.classList.toggle("dark-mode");
}
changeMainDescription();
function changeMainDescription() {
  let mainDescription = getid("mainDescription")

  let differentDescriptions = [
    "_Abstract_Symbolism_",
    "The power and authority of symbols over reality",
    "{see what you feel}",
    "Simboloko Adventures"
  ]
  let randomNumber = randomint(0, differentDescriptions.length-1);
  mainDescription.textContent = differentDescriptions[randomNumber];

  }
