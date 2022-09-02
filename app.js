const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 200, y: -20 },
    { x: 50, y: 10 },
    { x: 200, y: -50 },
    // { x: 100, y: 0 },
    { x: window.innerWidth, y: -150 },
  ],
};

const tween = new TimelineLite();
tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(tween)
  .setPin(".animation")
  //   .addIndicators()
  .addTo(controller);

// Intersection

performCallbackOnIntersection({
  target: document.querySelector(".confetti-element"),
  callback: () => {
    party.confetti(document.querySelector(".confetti-element"), {
      count: party.variation.range(50, 70),
    });
  },
});

performCallbackOnIntersection({
  target: document.querySelector(".show-confetti-element"),
  callback: () => {
    party.confetti(document.querySelector(".show-confetti-element"), {
      count: party.variation.range(50, 70),
    });
  },
});

// toggleClassesOnIntersection({
//   target: document.querySelector("img.rounded"),
//   classNames: ["magictime", "swap"],
// });
//set timer to 5 seconds, after that, load the magic animation
// function myFunction() {
//   const selector = document.querySelector(".grp");
//   selector.classList.add("magictime", "swap");
// }
// myFunction();
