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
    vertical: true,           // Vertikal slayderni yoqish
    verticalSwiping: false,    // Vertikal siljish uchun
    slidesToShow:3,          // Faqat bitta slaydni ko'rsatish
    slidesToScroll: 1,        // Har bir siljish uchun 1 ta slayd
    // centerMode: true,         // Markazga joylashgan slaydni ko'rsatish
    focusOnSelect: true,      // Slaydga bosish bilan faol qilish
    autoplay: true,           // Avtomatik o‘tish
    autoplaySpeed: 3000,      // 2 soniya kutish
    infinite: true,           // Ustma-ust qaytish imkoniyati
    arrows: false,             // O'ng va chap tugmalar
    dots: false               // Nuqtalarni o'chirish
  });
}
)
