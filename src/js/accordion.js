const faqs = document.querySelectorAll(".faq");
const background = document.querySelector(".background");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });
    faq.classList.toggle("active");

    adjustBackgroundHeight();
  });
});

function adjustBackgroundHeight() {
  let totalHeight = 432; 

  faqs.forEach((faq) => {
    const answer = faq.querySelector(".answer");
    if (faq.classList.contains("active")) {
      totalHeight += answer.scrollHeight;
    }
  });
  background.style.height = `${totalHeight}px`;
}
