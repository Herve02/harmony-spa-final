document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close");
  const navigation = document.querySelector("ul");
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY < 200) {
      backToTop.style.display = "none";
    } else {
      backToTop.style.display = "block";
    }
  });

  backToTop.addEventListener("click", function (e) {
    console.log("clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
