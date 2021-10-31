$(document).ready(function () {
  console.log("before function");
  // ON SCROLL animation
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    let element1 = $(".img-side");
    let element2 = $(".about-side"); 
    let element3 = $(".collection")
    let element4 = $(".collection1")
    let element5 = $(".collection2")
    if (y > 700) {
      console.log("set");
      element1.addClass("imgloder-left");
      element2.addClass("imgloder-right");
      element1 + element2.fadeIn();
    }
    if(y > 1000){
        element4.addClass("imgloder-left");
        element5.addClass("imgloder-right");
        element3 + element4 + element5 .fadeIn();

    }
  });
});
