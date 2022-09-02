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

const target = document.querySelector(".confetti-element");

const options = {
  root: document.querySelector("null"),
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  party.confetti(target, {
    count: party.variation.range(50, 70),
  });
}, options);
observer.observe(target);
