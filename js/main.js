gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.to("#intro img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      end: "bottom center", // bottom of intro is set center
      scrub: true,
      markers: true, // Useful for debugging
    },
  });
}

window.addEventListener("load", function () {
  init();
});
