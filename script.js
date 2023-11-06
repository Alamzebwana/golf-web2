

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2
  }
})
gsap.to("#main", {
  backgroundColor: "#000",
  duration: 0.5,
  // height: "100px",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2
  }
})
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function(details) {
  cursor.style.left = details.clientX + "px";
  cursor.style.top = details.clientY  + "px";
});
var cursorBlure = document.querySelector("#cursorBlure")
document.addEventListener("mousemove", function(details) {
  cursorBlure.style.left = details.clientX -200 + "px";
  cursorBlure.style.top = details.clientY - 200 + "px";
});



var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem) {
  elem.addEventListener("mouseover", function() {
    cursor.style.transform = "scale(3)"; 
    cursor.style.border = "1px solid #95c11e";
    cursor.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function() {
    cursor.style.transform = "scale(1)"; 
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});


gsap.from("#about-us img, #about-us-in", {
  y: 99,
  opacity: 0,
  duration: 2,
  delay: 3,
  stagger: 1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers: true,
    stagger:"top 70%",
    end:"top 65%",
    scrub: 6
  }
})
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers: true,
    stagger:"top 70%",
    end:"top 65%",
    scrub: 2
  }
})
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers: true,
    stagger:"top 50%",
    end:"top 44%",
    scrub: 4
  }
})
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    // markers: true,
    stagger:"top 50%",
    end:"top 44%",
    scrub: 4
  }
});
gsap.from("#page4 h1", {
  y: 60,
  duration: 1,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers: true,
    stagger:"top 75%",
    end:"top 70%",
    scrub: 3
  }
});

const cards1 = document.querySelectorAll('.card');

cards1.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotate3d(-1, -1, 0, 20deg)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'none';
    });
});


