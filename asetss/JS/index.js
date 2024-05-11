// header section
menuOpened = false;
// check the scrollTop
if ($(window).scrollTop() > 0) {
  $("nav").removeClass("bg-transparent py-4");
  $(".navbar-brand, .navbar-nav").removeClass("py-2");
} else if ($(window).width() < 975) {
  $("nav").removeClass("py-4");
  $(".navbar-brand, .navbar-nav").removeClass("py-2");
}
// give priority to images once window is less than 975px
if ($(window).width() < 975) {
  $(".awarness .give-priority").css("order", -1);
} else {
  $(".awarness .give-priority").css("order", 0);
}
/* 
    remove padding and transparent from the nav once scrolling down start, 
    return them back once we are on the top of the page
*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("nav").removeClass("bg-transparent py-4");
    $(".navbar-brand, .navbar-nav").removeClass("py-2");
  } else if (menuOpened === false && $(this).scrollTop() == 0) {
    $("nav").addClass("bg-transparent py-4");
    $(".navbar-brand, .navbar-nav").addClass("py-2");
    if ($(window).width() < 975) {
      $("nav").removeClass("py-4");
      $(".navbar-brand, .navbar-nav").removeClass("py-2");
    }
  }
});
// remove transparent and padding if the menu button pressed, add the background-color
$(".navbar-toggler").on("click", () => {
  if (!menuOpened) {
    menuOpened = true;
    $("nav").removeClass("bg-transparent py-4");
    $(".navbar-brand, .navbar-nav").removeClass("py-2");
  } else {
    menuOpened = false;
    if ($(window).scrollTop() === 0) {
      $("nav").addClass("bg-transparent py-4");
      $(".navbar-brand, .navbar-nav").addClass("py-2");
      if ($(window).width() < 975) {
        $("nav").removeClass("py-4");
        $(".navbar-brand, .navbar-nav").removeClass("py-2");
      }
    }
  }
});
// window smaller than 975 wont have navbar padding
$(window).on("resize", () => {
  if ($(window).width() < 975) {
    $("nav").removeClass("py-4");
    $(".navbar-brand, .navbar-nav").removeClass("py-2");
    $(".awarness .give-priority").css("order", -1);
  } else {
    $(".awarness .give-priority").css("order", 0);
    if ($(window).scrollTop() === 0) {
      $("nav").addClass("py-4");
      $(".navbar-brand, .navbar-nav").addClass("py-2");
    }
  }
});

// show paragraph texts when its in user view
$(window).scroll(function () {
  let elements = $(".awarness p");
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("fs-2")) {
      let hT = $(`.awarness .num-${i}`).offset().top,
        hH = $(`.awarness .num-${i}`).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > hT + hH - wH) {
        // apply fade in animation
        $(`.awarness .num-${i}`).css("opacity", 1);
      }
    }
  }
});
// animate counters sequentially
let endCounting = [false, false, false, false]; // make sure that each counters counted only once
function animateCounters(index) {
  const counter = $(`.ourProgress .counter-${index}`);
  const target = parseInt($(counter).attr("data-target")),
    duration = 1000,
    step = Math.ceil((target / duration) * 10);
  let current = 0;
  const updateCounter = () => {
    current += step;
    if (current <= target) {
      $(counter).text(`${current}`);
      requestAnimationFrame(updateCounter);
    } else {
      $(counter).text(`${target}`);
    }
  };
  // set delay 1 second for counters
  setTimeout(() => {
    updateCounter();
  }, 100);
}
// start counting when counter section is on user view
$(window).scroll(function () {
  let elements = $(".ourProgress .counter");
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("fs-2")) {
      let hT = $(`.ourProgress .counter-${i}`).offset().top,
        hH = $(`.ourProgress .counter-${i}`).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > hT + hH - wH && endCounting[i] === false) {
        // start counting
        endCounting[i] = true;
        animateCounters(i);
      }
    }
  }
});
