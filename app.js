const tLine = gsap.timeline({defaults: {ease: "power1.out"}});

tLine.to(".text", {y: "0%", duration: 1, stagger: 0.2});
tLine.to(".slide", {y: "-100%", duration: 1.5, delay: 0.5});
tLine.to(".intro", {y: "-100%", duration: 1}, "-=1");

//menu dan tulisan tengah
tLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
tLine.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, '-=1');