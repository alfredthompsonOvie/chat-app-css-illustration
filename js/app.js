"use strict";
function init() {
  
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
    },
    onComplete: () => {
      gsap.from(".m", {
        x: 10,
        repeat: -1,
        repeatDelay: 1,
        autoAlpha: 0,
        stagger: 0.4,
        yoyo: true,
      ease: "back"
      })
      gsap.from(".js__chat > *", {
        y: 10,
        scale: .8,
        autoAlpha: 0,
        stagger: .3,
        ease: "power4",
        repeat: -1,
        repeatDelay: 1.2,
        yoyo: true,
        duration: 2
      })
    }
  });
  
  tl
    .from(".chat__app__illustration", {
      x: 100,
      autoAlpha: 0,
      duration: 1.5,
      ease: "back"
    })
    .from(".js__chat__body", {
      autoAlpha: 0,
    })
    .from(".js__chat > *", {
      y: 10,
      autoAlpha: 0,
      stagger: .3,
      // duration: 2,
      ease: "back"
    })
    .from(".js__form", {
      autoAlpha: 0,
      // duration: 2,
      ease: "power4"
    })
    .from(".js__description > *", {
      y: 10,
      autoAlpha: 0,
      stagger: .3,
      // duration: 2,
      ease: "back"
    }, "-=1.5")
    .from(".attribution", {
      x: -10,
      autoAlpha: 0,
      // stagger: .3,
      duration: 1.5,
      ease: "back"
    }, "-=.5")
}
document.addEventListener("DOMContentLoaded", init);