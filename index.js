// photo section //

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
// animation section //

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  
  // collapsible nav-bar //

let menu = document.querySelector('#menu-bars');
let navList = document.querySelector('.nav-list1');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navList.classList.toggle('active');

} 

// sign in form  //

const weaper = document.querySelector('.form-control');
const btn = document.querySelector('#but');
const bd = document.querySelector('.bd');
weaper.addEventListener('click',()=>{
     weaper.classList.remove('active');
});

btn.addEventListener('click',()=>{
    weaper.classList.add('active-popup');
});

bd.addEventListener('click',()=>{
    weaper.classList.remove('active-popup');
});