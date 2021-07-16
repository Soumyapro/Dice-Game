var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var random_num1 = Math.floor((Math.random()*6)+1);
var random_num2 = Math.floor((Math.random()*6)+1);

var random_pic1 = "dice" + random_num1 + ".png";

image1.setAttribute("src",random_pic1); //for the player1

var random_pic2 = "dice" + random_num2 + ".png";

image2.setAttribute("src",random_pic2);

if(random_num1==random_num2){

    document.querySelector("h1").innerHTML = "Draw!";
}

else if(random_num1>random_num2){

    document.querySelector("h1").innerHTML = "Player 1 Won";
}

else if(random_num1<random_num2){

    document.querySelector("h1").innerHTML = "Player 2 Won";
}

else{

    console.log("ERROR! found");
}