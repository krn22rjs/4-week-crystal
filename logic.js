 // GLOBAL VARIABLES
//________________________________________________________________________-


var crystal = {
  blue:
  {
    name:"Blue",
    value: 0
  },
  green:
  {
    name:"Green",
    value: 0
  },
  red:
  {
    name:"Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
}

// scores (current and target)

var currentScore = 0;
var target = 0;

// wins and losses
var winCount = 0;
var lossCount = 0;

// FUNCTIONS
//________________________________________________________________________


// helper function for getting random numbers
var getRandom = function(min, max){
  return Math.floor.(Math.random() * (max - min + 1))+ min;
}

// starts the game
var startGame = function(){

  //reset the current score
  var currentScore = 0;

  // set a new targe score (between 19-120)

  targetScore = getRandom(19,120);

  // set different values for each crystal (1-12)
  crystal.blue.value = getRandom(1,12);
  crystal.green.value = getRandom(1,12);
  crystal.red.value = getRandom(1,12);
  crystal.yellow.value = getRandom(1,12);

  // change the html to reflect all changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// testing
console.log("-------------------------");
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " |green: " + crystal.green.value + " |red: " + crystal.red.value + " | yellow: " + crystal.yellow.value);
}


// respond to the clicks  on the crystals
var addValues = function(crystal){

//change the current score
  currentScore = currentScore + crystal.value;


//change the html to reflect changes to currentScore
$("#yourScore").html(currentScore);

  // testing console
  console.log("your score" + currentScore);
}

// MAIN PROCESS
//_________________________________________________________________________________
// strat the game 
startGame();
$("#blue").click(function(){

  addValues(crystal.blue);

});

$("#green").click(function(){
  
  addValues(crystal.green);

});

$("#red").click(function(){
  addValues(crystal.red);

});

$("#yellow").click(function(){
  addValues(crystal.yellow);
});

//alert("testing");