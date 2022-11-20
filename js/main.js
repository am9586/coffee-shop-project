let navbar = document.querySelector(".navbar");
let menueBtn = document.getElementById("menue-btn");
menueBtn.onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");
let cartBtn = document.getElementById("cart-btn");
cartBtn.onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");
let searchBtn = document.getElementById("search-btn");
searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};

let letter = document.getElementById("letter");
const myarry = "fresh coffeein the morning";
let i = 1;
const auto = () => {
  letter.innerText = myarry.slice(0, i);
  i++;
  if (i > myarry.length) {
    i = 1;
  }
};
const stop = setInterval(auto, 400);
