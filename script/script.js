$(document).ready(function () {
  console.log("before function");
  // ON SCROLL animation
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    let element1 = $(".img-side");
    let element2 = $(".about-side"); 
    if (y > 700) {
      console.log("set");
      element1.addClass("imgloder-left");
      element2.addClass("imgloder-right")
      element1 + element2.fadeIn();
    }
  });
});
