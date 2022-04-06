console.log("OK");

const stage = document.querySelector("#stage");

stage.addEventListener("mouseenter", () => {
  
  gsap.to(".letter", {
    x: 40,
    yoyo: true,
    duration: 2,
    ease: 'elastic'
  });
  
  gsap.from(".letter", {
    x: 0,
    yoyo: true, 
    duration: 2,
    ease: 'elastic'
  });
  
});