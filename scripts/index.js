// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;


function addWordToDOM(){

  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;

};

addWordToDOM();


function updateScore(){

  score ++;
  scoreEl.textContent = score;

}

function updateTimeDisplay(){

  timeEl.textContent =time;

}



text.addEventListener("input", function(e){

 const typedText = e.target.value;

  if(typedText === randomWord){
    updateScore();
    addWordToDOM();
    e.target.value = "";
    time += 5;
    updateTimeDisplay();

  }

});


const timeInverval = setInterval (updateTime, 1000);



function updateTime(){
  time--;
  updateTimeDisplay();
  
  if(time <= 0){
    clearInterval(timeInverval);
    gameOver();
  }
}

updateTime();



function gameOver(){
  endgameEl.innerHTML = `
  <h1>Game Over</h1>
  <p>Your final score is ${score}</p>
  <button onclick ="location.reload()">Reload</button>`;
  endgameEl.style.display = "flex";
}





 




//  const input = document.querySelector("input");
//   input.addEventListener("keypress", function(e){
//     
//       console.log(score ++);
//     }else{
//       console.log("wrong try again")
//     }
//   })

