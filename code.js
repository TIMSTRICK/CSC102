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

// function that is called when the start button is clicked
function startbuttonclick(){
    // currently empty and doesn't do anything
}

// function that is called when the stop button is clicked
function stopbuttonclick(){
    // currently empty and doesn't do anything
}

