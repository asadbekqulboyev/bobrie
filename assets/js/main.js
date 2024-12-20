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
        responsive: [
          {
            breakpoint: 1560, // Max-width: 1560px dan pastda
            settings: {
              slidesToShow: 2, // 2ta slide
              slidesToScroll: 1,

            },
          },
          {
            breakpoint: 556, // Max-width: 556px dan pastda
            settings: {
              slidesToShow: 1, // 1ta slide
              slidesToScroll: 1,
            },
          },
        ],
  });
  

  $('.slides_target').slick({
    vertical: true,         
    verticalSwiping:true,
    slidesToShow:1,          
    slidesToScroll: 1,    
    focusOnSelect: true,    
    autoplay: true,          
    autoplaySpeed: 1000,    
    arrows: false,            
    dots: false,              
    speed:600,
    infinite: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false, 
          vertical: false,  
          slidesToShow:1.4, 
          verticalSwiping:false,
          infinite: false, 
        },
      }
    
    ]
  });  
  // parallax 
  var rellax = new Rellax('.rellax');
  // mobile none rellax
  let targetRellax = new Rellax('.target-rellax'); // Faqat o'chiriladigan parallax

  // Maqsadli parallaxni o'chirish yoki qayta yoqish
  function checkTargetRellax() {
      if (window.innerWidth <= 1200) {
          if (targetRellax) {
              targetRellax.destroy(); // Maqsadli parallaxni o'chirish
              targetRellax = null;
          }
      } else {
          if (!targetRellax) {
              targetRellax = new Rellax('.target-rellax'); // Qayta yoqish
          }
      }
  }
  
  // Boshlang'ich tekshirish
  checkTargetRellax();
  
  // Resize uchun kuzatuv
  window.addEventListener('resize', checkTargetRellax);
}


)
