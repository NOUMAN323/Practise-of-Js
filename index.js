let userScore = 0;
let compScore = 0;
let win=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");
const draw = () => {
  console.log("Game was draw");
    win.innerText="Game is DRAW";
    win.style.backgroundColor="orange";
};
const showWinner = (userWin, userChoice,compChoice) => {
  if (userWin) {
    
    console.log("User win");
    win.innerText=`User ${userChoice} beats computer ${compChoice}`;
    win.style.backgroundColor="Green";
    userScore++;
    uscore.innerText=`${userScore}`;

  } else {
    console.log("user loose");
    win.innerText=`User ${compScore} loose with computer ${compChoice}`;
    win.style.backgroundColor="red";
    compScore++;
    cscore.innerText=`${compScore}`;
  }
};
const playGame = (userChoice, compChoice) => {
  console.log("User choice is ", userChoice);
  console.log("Computer choice is ", compChoice);
  if (compChoice === userChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    console.log(userWin);
    showWinner(userWin, userChoice,compChoice);
  }
};

const compGen = () => {
  let option = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

let choices = document.querySelectorAll(".choice");
choices.forEach((val) => {
  val.addEventListener("click", () => {
    const userChoice = val.getAttribute("id");

    const compChoice = compGen();
    // console.log("Computer choice is ",compChoice);
    playGame(userChoice, compChoice);
  });
});
