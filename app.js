const bars = document.querySelector(".bars");
const links = document.querySelector(".links");
const bar = document.querySelectorAll(".bar");

bars.addEventListener("click", () => {
  links.classList.toggle("links-show");
  console.log("hug");
});

window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const position = about.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    about.classList.add("box-visible");
  } else {
    about.classList.remove("box-visible");
  }
});

// code for animating services
const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const animate = () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (isInView(item)) {
      item.classList.add("animate");
    }
  });
};
window.addEventListener("scroll", animate);
//code for dark mode
const switchBtn = document.querySelector(".slider");
const mainBg = document.querySelector(".back");
const container = document.querySelector(".container");
const introParts = document.querySelectorAll(".parts");
switchBtn.addEventListener("click", () => {
  mainBg.classList.toggle("back-dark");
  container.classList.toggle("container-dark");
  console.log("mmh");

  introParts.forEach((part) => {
    part.classList.toggle("parts-dark");
  });
});
