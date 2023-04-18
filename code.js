
/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

function startBlastoff() {   
    // Initialize the currTime variable to 50
    let currTime = 50;
    // Set an interval to call the countdownTimer function every 5 seconds
    let timer = setInterval(countdownTimer, 1000);

    function countdownTimer() {
        // If the currTime variable is greater than 0, update the output
        if (currTime > 0) {
            // Get the current time and format it as a string
            let currentTime = new Date();
            let time = currentTime.toLocaleTimeString();
            // Update the output with the current time and remaining seconds until launch
            document.getElementById("output").innerHTML = "Current time: " + time + "<br>" + currTime + " seconds until launch";
        } else {
            // If the currTime has reached 0, clear the interval and update the output with "Blastoff!"
            clearInterval(timer);
            document.getElementById("output").innerHTML = "<span class='red-text'>Blastoff!</span>";
            document.getElementById("announcements").innerHTML = " ";
        }
        //Check if the currTime variable is less than or equal to 25
        if (currTime <= 25 && currTime > 0){
            document.getElementById("announcements").innerHTML = "<br><h3>Warning Less than ½ way to launch, time left = " + currTime + "</h3><br>";
        } 
        //Subtrat 5 from the currTime
        currTime -= 1;
    }
}




function start(){
    console.log("start() method started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("start_button").disabled = true;
    document.getElementById("stop_button").disabled = false;
}

function stop(){
    console.log("stop() method started");
    clearInterval(timer);
    document.getElementById("stop_button").disabled = true;
    document.getElementById("start_button").disabled = false;
}

// This func is to play a sound. 

function play() { // One day I might make this have multiple different sounds that one can pass in an arg to get the proper sound. 
    var audio = new Audio('dice-rolling-on-table.wav');
    audio.play();
  }

  function playGame() {
      console.log("Running the Game!");
      // generate a random number between 1 and 6 for the first die
      var die1 =Math.ceil(Math.random()*6);
      
      // generate a random number between 1 and 6 for the second die
      var die2 =Math.ceil(Math.random()*6);
      
      //calculate the sum of the two die values
      var sum = die1+die2
      
      document.getElementById('game').innerHTML = " ";

      //write the value of each die and the sum to the document
      document.getElementById('game').innerHTML += "Die 1 = " + die1 + "";
      document.getElementById('game').innerHTML += "<br/>";
      document.getElementById('game').innerHTML += "Die 2 = " + die2 + ""; 
      document.getElementById('game').innerHTML += "<br/>"; 
      document.getElementById('game').innerHTML += "Sum = " + sum + "";
      document.getElementById('game').innerHTML += "<br/>"; 


      // check if the sum is equal to 7 or 11
      if (sum == 7 || sum == 11){ 
      
          // if the sum is 7 or 11, write "CRAPS - you lose" to the document
          document.getElementById('game').innerHTML += "CRAPS - you lose";
          document.getElementById('game').innerHTML += "<br/>";
      }
      // check if the value of the two dice are equal and even
      else if (die1 == die2 && die1%2 == 0){
          // if the value of the two dice are equal and even, write "DOUBLES - you win" to the document
          document.getElementById('game').innerHTML += "DOUBLES - you win";
          document.getElementById('game').innerHTML += "<br/>";
      }
  }

    // This function is used to call 2 funcs for craps.html
  function rollDice() {
      play();
      playGame();  
  }