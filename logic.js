let userScore = 0;
let compScore = 0;

// First of all access the choices
const choices = document.querySelectorAll(".choice");
// access the message to change the text 
const msg = document.querySelector("#msg")
// To update the score board firs acess the scoreboard
const userscorePara = document.querySelector("#userscore")
const compscorePara = document.querySelector("#compscore")

// Generate computer choice
const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
// draw game function
const draw = () => {
//   console.log("Game was draw!");
  msg.innerText = "Game was draw! Play again";
  msg.style.backgroundColor = "blue"
};
// showWinner function
const showWinner = (userWin, userchoice, compchoice) => {
  if (userWin) {
    // console.log("You Win!");
    userScore++ ;
    userscorePara.innerText = userScore
    msg.innerText = `You Win!  Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green"
  } else {
    // console.log("You Lose!");
    compScore++ ;
    compscorePara.innerText = compScore
     msg.innerText =  `You lose! ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red"
  }
};

// main logic of how to play game
const playgame = (userchoice) => {
  console.log("userchoice =", userchoice);
  const compchoice = gencompchoice();
  console.log("compchoice =", compchoice);

  if (userchoice == compchoice) {
    //draw game
    draw();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      // paper scissor
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock scissor
      userWin = compchoice === "scissor" ? false : true;
    } else {
      //rock paper
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice)
 }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // Now when clicked it shows which choice was clicked
    playgame(userchoice);
    // Now call the playgame function so that it knows the userchoice
  });
});
