//Back to Top Button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Offer Hover Image Change

// Get Hover Box
let offerBox1 = document.querySelector(".offer-box-1");
let offerBox2 = document.querySelector(".offer-box-2");
let offerBox3 = document.querySelector(".offer-box-3");
let offerBox4 = document.querySelector(".offer-box-4");

// Get All Image
let offerImg1 = document.querySelector(".offer-img-1");
let offerImg2 = document.querySelector(".offer-img-2");
let offerImg3 = document.querySelector(".offer-img-3");
let offerImg4 = document.querySelector(".offer-img-4");

// Image 1
offerBox1.addEventListener("mouseenter", () => {
  offerImg1.src = "img/offer-icon-1-white.svg";
});

offerBox1.addEventListener("mouseleave", () => {
  offerImg1.src = "img/offer-icon-1.svg";
});

// Image 2
offerBox2.addEventListener("mouseenter", () => {
  offerImg2.src = "img/offer-icon-2-white.svg";
});

offerBox2.addEventListener("mouseleave", () => {
  offerImg2.src = "img/offer-icon-2.svg";
});

// Image 3
offerBox3.addEventListener("mouseenter", () => {
  offerImg3.src = "img/offer-icon-3-white.svg";
});

offerBox3.addEventListener("mouseleave", () => {
  offerImg3.src = "img/offer-icon-3.svg";
});

// Image 4
offerBox4.addEventListener("mouseenter", () => {
  offerImg4.src = "img/offer-icon-4-white.svg";
  offerImg4.style.transform = "scaleX(-1)";
});

offerBox4.addEventListener("mouseleave", () => {
  offerImg4.src = "img/offer-icon-4.svg";
  offerImg4.style.transform = "scaleX(1)";
});
