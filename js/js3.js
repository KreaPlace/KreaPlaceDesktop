            var images = ["../photos/heart.png", "../photos/heart_red.png"];

            var imgState = 0;
            var imgState6 = 0;
            var imgState7 = 0;
            var imgTag = document.getElementById("heart");

            var imgTag5 = document.getElementById("heart5");

            imgTag5.addEventListener("click", function (event) {
                imgState = (++imgState % images.length);
                event.target.src = images[imgState];
            });

            var imgTag6 = document.getElementById("heart6");

            imgTag6.addEventListener("click", function (event) {
                imgState6 = (++imgState6 % images.length);
                event.target.src = images[imgState6];
            });

            var imgTag7 = document.getElementById("heart7");

            imgTag7.addEventListener("click", function (event) {
                imgState7 = (++imgState7 % images.length);
                event.target.src = images[imgState7];
            });

            var follow = true;

            function background() {
                let el = document.getElementById('follow');
                el.style.backgroundColor = follow ? "#67a3d9" : "";
                follow = !follow;
            }

function comment() {
  var sth = document.getElementById("comment");
  if (sth.style.display === "flex") {
    sth.style.display = "none";
  } else {
    sth.style.display = "flex";
  }
}

function more() {
  var more = document.getElementById("more");
  if (more.style.display === "flex") {
    more.style.display = "none";
  } else {
    more.style.display = "flex";
  }
}