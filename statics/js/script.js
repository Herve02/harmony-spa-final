const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navigation = document.querySelector("ul");

menu.addEventListener("click", function (e) {
  navigation.classList.toggle("mobile-nav");
});

close.addEventListener("click", function (e) {
  navigation.classList.toggle("mobile-nav");
});

navigation.addEventListener("click", function (e) {
  const clicked = e.target.closest("a");
  if (!clicked) return;
  navigation.classList.toggle("mobile-nav");
});
