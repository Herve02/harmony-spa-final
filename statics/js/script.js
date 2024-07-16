document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close");
  const navigation = document.querySelector("ul");
  const backToTop = document.querySelector(".back-to-top");

  menu.addEventListener("click", function (e) {
    navigation.classList.toggle("mobile-nav");
    document.body.classList.toggle("no-scroll");
  });

  close.addEventListener("click", function (e) {
    navigation.classList.toggle("mobile-nav");
    document.body.classList.toggle("no-scroll");
  });

  navigation.addEventListener("click", function (e) {
    const clicked = e.target.closest("a");
    if (!clicked) return;
    navigation.classList.toggle("mobile-nav");
    document.body.classList.toggle("no-scroll");
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY < 200) {
      backToTop.style.display = "none";
    } else {
      backToTop.style.display = "block";
    }
  });

  backToTop.addEventListener("click", function (e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
