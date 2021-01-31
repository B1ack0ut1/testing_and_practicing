let images = [
  // "https://pic.pimg.tw/mutsumi326/1500200570-2234098428_n.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71FP2qAa4dL._AC_SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51bRz8LvYpL._AC_SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51D9eTd9%2BuL._AC_SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81LnoY0%2Bu4L._AC_SY445_.jpg",
];

let idx = 0;

function loadImage(e) {
  if (e.target.id === "previous") idx--;
  else idx++;
  idx = Math.min(Math.max(idx, 0), images.length - 1);

  if ($("#display").attr("src") !== images[idx]) {
    $("#display").attr("src", "");
    $("#display").attr("src", images[idx]);
    $("#source").attr("href", images[idx]);
    $("#source").text(images[idx]);
  }

  $("#previous-button").attr("disabled", idx === 0);
  $("#next-button").attr("disabled", idx === images.length - 1);
}

$(document).ready(function () {
  $(window).keyup(function (e) {
    if (e.key === "ArrowRight") {
      e.target.id = "next";
      loadImage(e);
    } else if (e.key === "ArrowLeft") {
      e.target.id = "previous";
      loadImage(e);
    }
  });
  $("#display").attr("src", images[0]);
  $("#source").attr("href", images[0]);
  $("#source").text(images[0]);
  $(".image-viewer__button").click(loadImage);
});
