function sumOf2Dice() {
    var dice1 = document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;//rolls the first dice
    var dice2 = document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;//rolls the second dice
    
    document.getElementById("sum").value = dice1 +  dice2 //calculates the sum
    document.getElementById("message").value = "" //declares message variable
    if (document.getElementById("sum").value >= 7){ //checks to see if the sum of the 2 dice are equal to or greater than 7
        document.getElementById("message").value = "Congratulations you Won!"; //Displays if the sum is greater than or equal to 7
    }else{
        document.getElementById("message").value = "Sorry you lost, try again!"; //Displays if the sum is less than 7
    }
}