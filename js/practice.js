let img = document.querySelectorAll("img");
console.log(img);
document.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 1500) {
    // console.log('HI')
    for (let i = 0; i < img.length; i++) img[i].classList.add("an");
    addClassName()
  }
});
img.fadeIn()
addClassName()