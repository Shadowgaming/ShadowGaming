// Made by Tegan Hakim 
// February 2021
const logo = document.querySelector(".logo");
const button = document.querySelector("button");
window.onload = function() {
    logo.classList.remove("display-off");
    button.classList.remove("display-off");
};


const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".mobile-nav");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      logo.classList.toggle("display-off");
      button.classList.toggle("display-off");
      //Burger Animation
      burger.classList.toggle("toggle");
    });
};
  
navSlide();

function setCopyrightYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy" + year + " | Designed by ";
}
setCopyrightYear();

