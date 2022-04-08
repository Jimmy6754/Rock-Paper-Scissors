// elements
const selectPaper = document.querySelector(".paper-start ");
const selectScissors = document.querySelector(".Scissors-start ");
const selectRock = document.querySelector(".rock-start ");
const ruleBtn = document.getElementById("rules");
const exitBtn = document.getElementById("exitBtn");
const playAgainBTN = document.querySelector(".playAgainBTN");
const playStat = document.querySelector(".stats");
const resultScreenEl = document.querySelector(".result-screen");
// variables
let player;
let bot;

const rulesPageSwitchHAndler = () => {
  document.querySelector(".darkBG").classList.toggle("disabled");
  document.querySelector(".rules-page").classList.toggle("disabled");
};

const botChoiceHandler = (playerchoice) => {
  document.querySelector(".choose").classList.toggle("disabled");
  resultScreenEl.classList.toggle("disabled");
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    bot = "paper";
  } else if (randomNumber > 0.33 && randomNumber < 0.67) {
    bot = "scissors";
  } else {
    bot = "rock";
  }
  chooseWinnerHandler(playerchoice, bot);
};

const displayBotResultHandler = () => {
  document.querySelector(".botcircle").classList.toggle(`${bot}`);
  document.querySelector(".botSymb").src = `Assits/images/icon-${bot}.svg`;
  resultScreenEl.classList.toggle("result-screen-animation");
  //
};
const displayResultHandler = () => {
  if (playStat.textContent === "You Win") {
    document.getElementById("score").textContent =
      parseInt(document.getElementById("score").textContent) + 1;
  }
  playAgainBTN.classList.toggle("disabled");
  playStat.classList.toggle("disabled");
};

const chooseWinnerHandler = (playerchoice, botChoice) => {
  player = playerchoice;
  bot = botChoice;
  console.log(`player choice = ${playerchoice} // bot choice = ${botChoice}`);
  if (playerchoice === botChoice) {
    console.log("draw");
    playStat.textContent = "Draw";
  } else if (
    (playerchoice === "paper" && botChoice === "rock") ||
    (playerchoice === "scissors" && botChoice === "paper") ||
    (playerchoice === "rock" && botChoice === "scissors")
  ) {
    console.log("win");
    playStat.textContent = "You Win";
  } else {
    console.log("lose");
    playStat.textContent = "You Lose";
  }
  document.querySelector(".playercircle").classList.toggle(`${player}`);
  document.querySelector(
    ".playerSymb"
  ).src = `Assits/images/icon-${player}.svg`;
  setTimeout(displayBotResultHandler, 200);
  setTimeout(displayResultHandler, 700);
};
//clear
const nxtRoundHandler = () => {
  document.querySelector(".botcircle").classList.toggle(`${bot}`);
  document.querySelector(".playercircle").classList.toggle(`${player}`);
  document.querySelector(".botSymb").src = "";

  playAgainBTN.classList.toggle("disabled");
  playStat.classList.toggle("disabled");

  document.querySelector(".choose").classList.toggle("disabled");
  resultScreenEl.classList.toggle("disabled");
  resultScreenEl.classList.toggle("result-screen-animation");
};

// bcebvebvev Assits/images/icon-rock.svg
// evbebveb
// events listener section
ruleBtn.addEventListener("click", rulesPageSwitchHAndler);
exitBtn.addEventListener("click", rulesPageSwitchHAndler);

selectPaper.addEventListener("click", botChoiceHandler.bind(this, "paper"));
selectScissors.addEventListener(
  "click",
  botChoiceHandler.bind(this, "scissors")
);
selectRock.addEventListener("click", botChoiceHandler.bind(this, "rock"));

playAgainBTN.addEventListener("click", nxtRoundHandler);
