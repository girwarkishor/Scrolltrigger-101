# Links

[ScrollTrigger 101](https://ihatetomatoes.net/store/)

# Installation

Simply clone this repo and follow the videos

I will be using [Live Server VSCode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to live reload any changes. Feel free to install it too.

# Get ScrollTrigger and GSAP

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollTrigger.min.js"></script>
```

## Register this inside main.js

```
gsap.registerPlugin(ScrollTrigger);
```

Fade when scroll

```
gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.to("#intro img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      scrub: true,
      markers: true, // Useful for debugging
    },
  });
}

window.addEventListener("load", function () {
  init();
});
```

```
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
```
