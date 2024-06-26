"use strict";

let slideIndex = 1;
let quantity = 0;
let itemName = "Fall Limited Edition Sneakers";
let salePrice = "$125.00";

const openNav = () => {
  document.getElementById("mobileNav").style.width = "100%";
};

const closeNav = () => {
  document.getElementById("mobileNav").style.width = "0";
};

const openCart = () => {
  let cart = document.getElementById("shoppingCart");
  cart.classList.add("open-animation");
};

const closeCart = () => {
  let cart = document.getElementById("shoppingCart");
  cart.classList.remove("open-animation");
};

const decrementQuantity = () => {
  if (quantity > 0) {
    quantity--;
    document.getElementById("quantity").innerHTML = quantity;
  }
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
  if (quantity > 0) {
    displayQuantityOnIcon();
    displayQuantitiesInCart();
  }
};

const emptyItemsFromCart = () => {
  console.log("click");
  quantity = 0;
  displayQuantityOnIcon();
  displayQuantitiesInCart();
};

const displayQuantitiesInCart = () => {
  if (quantity > 0) {
    console.log(salePrice, quantity);
    document.getElementById("itemsInCart").style.display = "block";
    document.getElementById("emptyCartMessage").style.display = "none";
    document.getElementById("totalsCalculating").innerHTML =
      salePrice + " X " + quantity + "  ";

    let child = document.createElement("span");
    child.innerHTML = " $" + 125 * parseInt(quantity) + ".00";

    document.getElementById("totalsCalculating").append(child);
  } else {
    document.getElementById("itemsInCart").style.display = "none";
    document.getElementById("emptyCartMessage").style.display = "block";
  }
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
displayQuantitiesInCart();
