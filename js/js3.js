            var images = ["../photos/heart.png", "../photos/heart_red.png"];

            var imgState = 0;

            var imgTag = document.getElementById("heart");

            var imgTag5 = document.getElementById("heart5");

            imgTag5.addEventListener("click", function (event) {
                imgState = (++imgState % images.length);
                event.target.src = images[imgState];
            });

        var imgTag6 = document.getElementById("heart6");

imgTag6.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});

        var imgTag7 = document.getElementById("heart7");

imgTag7.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});