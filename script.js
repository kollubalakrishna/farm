let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");


let drop = document.querySelector("#var");
let dropCon = document.querySelector(".drop-content");



window.onscroll = ()=> {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    drop.classList.remove("fa-times");
    dropCon.classList.remove("active");
}


menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});


drop.addEventListener('click', ()=>{
    dropCon.classList.toggle("active");
});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}


        

 
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 2
            }
        }]
    });
  });
  




