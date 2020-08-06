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

## toggleClass

When the points come than this will add active class after the end it will remove active class

```
gsap.registerPlugin(ScrollTrigger);

function init() {
  // toggle css class
  gsap.set("#project02", {
    scrollTrigger: {
      trigger: "#project02",
      start: "top bottom",
      end: "bottom center",
      toggleClass: "active",
      markers: true,
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
  // toggle css class
  gsap.set("#project02", {
    scrollTrigger: {
      trigger: "#project02",
      start: "top bottom-=150",
      end: "bottom center-=150",
      toggleClass: "active",
      markers: true,
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
  // toggle css class
  gsap.set("#project02", {
    scrollTrigger: {
      trigger: "#project02",
      start: "top bottom-=10%",
      end: "bottom center-=10%",
      toggleClass: "active",
      markers: true,
    },
  });
}

window.addEventListener("load", function () {
  init();
});

```

## Simple parallax effect

Simple parallax created with simple scroll trigger

```
gsap.registerPlugin(ScrollTrigger);

function init() {

  const parallaxTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: "top bottom",
      scrub: true,
    },
  });

  parallaxTl
    .from(".content-wrapper", { duration: 0.4, autoAlpha: 0 }, 0.4)
    .from(".bcg", { duration: 2, y: "-30%" }, 0);
}

window.addEventListener("load", function () {
  init();
});
```

## Simple pin effect

gsap.registerPlugin(ScrollTrigger);

function init() {

// Pin example
gsap.to(["#intro h1", "intro p"], {
autoAlpha: 0,
ease: "none",
scrollTrigger: {
trigger: "#intro .content",
pin: true,
start: "top top+=2%",
scrub: true,
markers: true,
},
});
}

window.addEventListener("load", function () {
init();
});
