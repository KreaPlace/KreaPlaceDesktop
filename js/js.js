        var currentTime = new Date();
var h = currentTime.getHours();
hourarray = ["Good night!", "Good night!", "Good night!", "Good night!", "Good night!", "Good morning!", "Good morning!", "Good morning!", "Good morning!", "Good morning!", "Good morning!", "Good morning!", "Good afternoon!", "Good afternoon!", "Good afternoon!", "Good afternoon!", "Good afternoon!", "Good afternoon!", "Good evening!","Good evening!","Good evening!", "Good evening!", "Good evening!", "Good evening!",]
var greeting = document.getElementById("greeting").innerHTML = hourarray[h];

var images = ["./photos/heart.png", "./photos/heart_red.png"];

var imgState = 0;

var imgTag = document.getElementById("heart");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});

var imgState2 = 0;

var imgTag2 = document.getElementById("heart2");

imgTag2.addEventListener("click", function (event) {
  imgState2 = (++imgState2 % images.length);
  event.target.src = images[imgState2];
});
