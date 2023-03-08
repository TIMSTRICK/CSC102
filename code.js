function play() {
    // generate a random number between 1 and 6 for the first die
    var die1 =Math.ceil(Math.random()*6);
    
    // generate a random number between 1 and 6 for the second die
    var die2 =Math.ceil(Math.random()*6);
    
    //calculate the sum of the two die values
    var sum = die1+die2
    
    //write the value of each die and the sum to the document
    document.write("Die 1 = " + die1) 
    document.write("<br/>") 
    document.write("Die 2 = " + die2) 
    document.write("<br/>") 
    document.write("Sum = " + sum)
    document.write("<br/>") 

    // check if the sum is equal to 7 or 11
    if (sum == 7 || sum == 11){ 
    
        // if the sum is 7 or 11, write "CRAPS - you lose" to the document
        document.write("CRAPS - you lose") 
        document.write("<br/>") 
    }
    // check if the value of the two dice are equal and even
    else if (die1== die2 && die1%2 == 0){
        // if the value of the two dice are equal and even, write "DOUBLES - you win" to the document
        document.write("DOUBLES - you win") 
        document.write("<br/>") 
    }
    
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




function startButtonClicked() {
    document.getElementById("start_button").disabled = true;
    document.getElementById("stop_button").disabled = false;
}

function stopButtonClicked() {
    document.getElementById("stop_button").disabled = true;
    document.getElementById("start_button").disabled = false;
}

function playDice() {
    var audio = new Audio('');
    audio.play();
  }

