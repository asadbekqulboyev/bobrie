const open__menu = document.getElementById("open__menu");
const close__menu = document.getElementById("close__menu");
const mobile__menu = document.getElementById("mobile__menu");

open__menu.addEventListener("click", function () {
  mobile__menu.classList.add("active");
});
close__menu.addEventListener("click", function () {
  mobile__menu.classList.remove("active");
});
$(document).ready(function(){
  $('.sliders').slick({
    infinite: true,
        slidesToShow: 2.7,
        slidesToScroll: 1,

  });
  

  $('.slides_target').slick({
    vertical: true,         
    verticalSwiping:true,
    slidesToShow:1,          
    slidesToScroll: 1,    
    // centerMode: true,       
    focusOnSelect: true,    
    autoplay: true,          
    autoplaySpeed: 1000,    
    arrows: false,            
    dots: false,              
    speed:300,
    infinite: true, 
  });  

}
)
