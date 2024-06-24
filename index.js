"use strict";

let slideIndex = 1;
let quantity = 0;

const openNav = () => {
  document.getElementById("mobileNav").style.width = "100%";
};

const closeNav = () => {
  document.getElementById("mobileNav").style.width = "0";
};

const openCart = () => {
  console.log("click");
};

const closeCart = () => {
  console.log("click");
};

const decrementQuantity = () => {
  console.log("click");
};

const incrementQuantity = () => {
  console.log("click");
};

const addToCart = () => {
  console.log("added");
};

const displayQuantityOnIcon = () => {
  document.getElementById("cartQuantityDisplay").innerHTML = quantity;
  document.getElementById("cartQuantityDisplay").style.backgroundColor =
    "hsl(26, 100%, 55%)";
  document.getElementById("cartQuantityDisplay").style.position = "absolute";
};

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  let slides = document.getElementsByClassName("my-slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);
displayQuantityOnIcon();
