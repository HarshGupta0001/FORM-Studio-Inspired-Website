gsap.registerPlugin();

const follower = document.querySelector(".cursor-follower");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const coords = { x: pos.x, y: pos.y };

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

let circle = document.querySelector(".circle-spread");
circle.addEventListener("mouseenter", (e) => {
  follower.classList.add("color-switch");
});

gsap.ticker.add(() => {
  pos.x += (coords.x - pos.x) * 0.2;
  pos.y += (coords.y - pos.y) * 0.2;
  gsap.set(follower, { x: pos.x, y: pos.y });
});

const hoverEls = document.querySelectorAll(".hover-target");

hoverEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(follower, { scale: 1.5, duration: 0.1, borderRadius: 0 });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(follower, { scale: 1, duration: 0.1, borderRadius: "50%" });
  });
});

gsap.set(".form-text p", {
  opacity: 0,
  yPercent: 100,
});

gsap.fromTo(
  ".form-text p",
  {
    opacity: 0,
    yPercent: 100,
  },
  {
    opacity: 1,
    yPercent: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".form-text",
      start: "top 85%",
      end: "bottom 20%",
      scrub: false,
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.set(".form-text-2 p", {
  opacity: 0,
  y: 100,
});

gsap.to(".form-text-2 p", {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: "power3.out",
  stagger: 0.15,

  scrollTrigger: {
    trigger: ".page9",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

let para_h1 = document.querySelectorAll(".para-content h1");

para_h1.forEach((elem) => {
  let tc = elem.textContent;
  let tc_arr = tc.split("");
  let ih = "";
  tc_arr.forEach((e) => {
    ih += `<span style="color: #4e4b4b; display:inline-block">${e}</span>`;
  });
  elem.innerHTML = ih;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  });
  tl.to(elem.querySelectorAll("span"), {
    color: "white",
    stagger: 0.05,
  });
});

gsap.from(".page3 .video video", {
  scale: 0.3,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    scrub: 0.5,
  },
});

gsap.from(".video-text1", {
  x: -800,

  scrollTrigger: {
    trigger: ".video-text1",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".video-text2", {
  x: 800,

  scrollTrigger: {
    trigger: ".video-text2",
    scroller: "body",
    scrub: 2,
  },
});

let horizontalSection = document.querySelector(".images");
let scrollLength = horizontalSection.scrollWidth - window.innerWidth;

gsap.to(".images", {
  x: () => `-${scrollLength}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top",
    end: () => `+=${scrollLength}`,
    scrub: 4,
  },
});

gsap.set(".form-text p", {
  opacity: 0,
  yPercent: 100,
});

gsap.fromTo(
  ".blog-text p",
  {
    opacity: 0,
    yPercent: 100,
  },
  {
    opacity: 1,
    yPercent: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".blog-text",
      start: "top 85%",
      end: "bottom 20%",
      scrub: false,

      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.to(".page5-wrapper .image-uplift .img1", {
  y: "-80vh",
  duration: 3,

  delay: 2,
  stagger: 2,
  scrollTrigger: {
    trigger: ".image-uplift .img1",
    scroller: "body",
    scrub: 2,
  },
});

gsap.to(".page5-wrapper .image-uplift .img1", {
  scale: 0.6,
  duration: 3,
  delay: 2,
  scrollTrigger: {
    trigger: ".image-uplift",
    scroller: "body",
    scrub: 2,
  },
});
gsap.to(".page5 .image-uplift .img2", {
  y: "-100vh",
  duration: 3,
  delay: 2,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    scrub: 2,
  },
});
gsap.to(".image-uplift .img2", {
  scale: 0.6,
  duration: 3,
  delay: 2,
  scrollTrigger: {
    trigger: ".image-uplift .img2",
    scroller: "body",
    scrub: 2,
  },
});

gsap.to(".page5 .image-uplift .img3", {
  y: "-140vh",
  duration: 3,
  delay: 2,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    scrub: 2,
  },
});
gsap.to(".image-uplift .img3", {
  scale: 0.6,
  duration: 3,
  delay: 2,
  scrollTrigger: {
    trigger: ".image-uplift .img3",
    scroller: "body",
    scrub: 2,
  },
});

gsap.to(".page6 .circle-spread", {
  width: "180vw",
  height: "180vw",
  duration: 4,
  delay: 2,
  scrollTrigger: {
    trigger: ".page6 .circle-spread",
    scroller: "body",
    scrub: 2,
    onEnter: () => {
      gsap.to(".line", { backgroundColor: "black", duration: 2, opacity: 0.5 });
      gsap.to(".cursor-follower", { backgroundColor: "black", duration: 2 });
      gsap.to("nav ul li", { color: "#161616", duration: 2 });
    },

    onLeaveBack: () => {
      gsap.to(".line", { backgroundColor: "white", duration: 2 });
      gsap.to(".cursor-follower", { backgroundColor: "white", duration: 2 });
      gsap.to("nav ul li", { color: "white", duration: 2 });
    },
  },
});

gsap.from(".page7 .Sliding-text-1", {
  x: -800,

  scrollTrigger: {
    trigger: ".Sliding-text-1",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".page7 .Sliding-text-2", {
  x: 800,

  scrollTrigger: {
    trigger: ".Sliding-text-2",
    scroller: "body",
    scrub: 2,
  },
});

document.querySelectorAll(".hover-footer").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, { y: -6, duration: 0.3, ease: "power2.out" });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
  });
});
