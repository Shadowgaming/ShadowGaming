// Made by Tegan Hakim 
// February 2021
const type_title = document.getElementById("title-type");
const logo = document.querySelector(".logo");
const welcome = document.querySelector("#welcome");
const title = document.querySelector("#title-type");
const button = document.querySelector(".get-started");
window.onload = function() {
    logo.classList.remove("display-off");
    welcome.classList.remove("display-off");
    title.classList.remove("display-off");
    type_title.style.animation = "blink 0.8s";
    type_title.style.animationIterationCount = "2";
    setTimeout(function() {
        type_title.style.animation = "type 3s steps(13), blinkInfinite 0.7s linear infinite";
        setTimeout(function() {
            type_title.style.animation = "blinkInfinite 0.7s linear infinite";
            type_title.style.width = "inline";
        }, 3100);
    }, 1300);
};

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".mobile-nav");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      logo.classList.toggle("display-off");
      welcome.classList.toggle("display-off");
      title.classList.toggle("display-off");
      button.classList.toggle("display-off");
      //Burger Animation
      burger.classList.toggle("toggle");
    });
};
  
navSlide();
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const javascript = document.querySelector('.javascript');
const python = document.querySelector('.python');
window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;

    if (scrollHeight >= 750 && scrollHeight < 1000) {
        html.style.animation = "html 3s";
        css.style.animation = "css 3s";
        javascript.style.animation = "javascript 3s";
        python.style.animation = "python 3s";
    }
});

const info_card = document.querySelector(".info-card");
info_card.addEventListener('click', () => {
    info_card.classList.toggle('isFlipped');    
    setTimeout(() => {info_card.querySelector('.front-face').classList.toggle('hidden'); info_card.querySelector('.back-face').classList.toggle('hidden')}, 370);      
});

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const imgs = document.querySelectorAll('label');
imgs.forEach((img) => {
    img.addEventListener('mouseover', (e) => { 
        img.children[1].style.height = "100%";
        img.children[1].children[0].style.opacity = "1";
        img.children[1].children[1].style.opacity = "1";
        img.children[1].children[2].style.opacity = "1";
        // if (offset(img).top == "2086.4375" || (offset(img).left >= "400" && offset(img).left < "600")) {
        // }   
    });
    img.addEventListener('mouseleave', () => {
        img.children[1].style.height = "0%";
        img.children[1].children[0].style.opacity = "0";
        img.children[1].children[1].style.opacity = "0";
        img.children[1].children[2].style.opacity = "0";
    });
});

function setCopyrightYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy" + year + " | Designed by ";
}
setCopyrightYear();

