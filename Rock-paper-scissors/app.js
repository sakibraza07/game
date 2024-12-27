let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
   const options = [ "Rock","Paper","Scissor"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
}
const drawGame=()=>{
    msg.innerText = "Game was Draw Play Again";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userwin,userChoice ,compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lost ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor ="red";
    }

};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //random num generate
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin= true;
        if (userChoice === "Rock") {
           userwin = compChoice === "Paper"? false :true;
        } else if (userChoice === "Paper") {
            userwin = compChoice === "Scissors"?false:true;
        } else {
            userwin = compChoice === "Rock" ? false: true;
        }
        showWinner(userwin, userChoice ,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});