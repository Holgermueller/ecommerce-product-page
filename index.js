"use strict";

let slideIndex = 1;
let quantity = 0;
let itemName = "Fall Limited Edition Sneakers";
let shoppingCart = 0;
let salePrice = "$125.00";

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
  if (quantity > 0) {
    quantity--;
    document.getElementById("quantity").innerHTML = quantity;
  }
  console.log(quantity);
};

const incrementQuantity = () => {
  quantity++;

  document.getElementById("quantity").innerHTML = quantity;

  return quantity;
};

const displayQuantityOnIcon = () => {
  if (quantity < 1) {
    document.getElementById("cartQuantityDisplay").style.display = "none";
    document.getElementById("quantity").innerHTML = 0;
  } else {
    document.getElementById("cartQuantityDisplay").innerHTML = quantity;
    document.getElementById("cartQuantityDisplay").style.backgroundColor =
      "hsl(26, 100%, 55%)";
    document.getElementById("cartQuantityDisplay").style.borderRadius = "50%";
    document.getElementById("cartQuantityDisplay").style.padding = "1px 8px";
    document.getElementById("cartQuantityDisplay").style.zIndex = "2";
    document.getElementById("cartQuantityDisplay").style.translate =
      "-60px -10px";
    document.getElementById("cartQuantityDisplay").style.fontSize = ".75rem";
    document.getElementById("cartQuantityDisplay").style.right = "0";
    document.getElementById("cartQuantityDisplay").style.position = "absolute";
  }
};

const addToCart = () => {
  displayQuantityOnIcon();
  console.log(quantity + " added to cart");
};

const checkout = () => {
  console.log("checkout");
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

const loadData = () => {
  document.getElementById("itemNameDisplay").innerHTML = itemName;
  document.getElementById("salePrice").innerHTML = salePrice;
  document.getElementById("quantity").innerHTML = quantity;
};

showSlides(slideIndex);
loadData();
