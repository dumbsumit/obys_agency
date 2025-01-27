var tl = gsap.timeline();

tl.from(".line1 h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1",{
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;

    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
      console.log(grow);
    }, 35);
  },
});

tl.to(".line1 h2",{
    animationName:"anime",
    opacity:1,

})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});

tl.from("#page1",{
    delay:0.2,
    opacity:0,
    y: 1600, 
    opacity: 0,
    duration:0.5,
    ease:Power4,
})

tl.to("#loader", {
    display:"none",
});



