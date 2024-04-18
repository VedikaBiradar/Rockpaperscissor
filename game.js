let userscore=0;
let compscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userscoreis=document.getElementById("user_score");
 const compscoreis=document.getElementById("comp_score");
 
 function genCompChoice(){
const options=["rock","paper","scissors"];
//genrate random value
let num=Math.floor(Math.random()*3);
let compChoice=options[num];
return options[num];
};


function drawGame(){
  console.log("Game Was Drwan");
  msg.innerText="Game Was Drwan, Play again!";
  msg.style.backgroundColor="blue";
}

 function showWinner(userWin,userChoice,compChoice){
  if(userWin){
    console.log("You Win!");
    msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userscore++;
    userscoreis.innerText=userscore; 

  }
  else{
    console.log("You Lose");
    msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compscore++;
    compscoreis.innerText=compscore;
  }
 };



function playGame(userChoice){
  console.log("user choice=", userChoice);
  //computer genartation
  const compChoice=genCompChoice();
   console.log("computer choice=", compChoice);

if(userChoice===compChoice){
 drawGame();
}
else{
  let userWin=true;
  if(userChoice==="rock"){
    //scissors, paper
    userWin=compChoice==="scissors"?true:false;
  }
  else if(userChoice=="scissors"){
    //rock, paper
    userWin=compChoice==="rock"?false:true;
  }
  else{
    //userchoice= paper: rock,scissors
    userWin=compChoice==="rock"?true:false;
  }
  showWinner(userWin,userChoice,compChoice);
}

};


choices.forEach(function(choice){
choice.addEventListener("click",()=>{
 const userChoice=choice.getAttribute("id");
  playGame(userChoice);
});
 });
