var preloader= document.getElementById('loading')
function myFunction(){
    preloader.style.display="none"
}
let menuSections = document.querySelectorAll("div.nav ul li")
console.log(menuSections)
menuSections.forEach((menusection)=>{
  console.log(menusection)
  menusection.addEventListener("click", function(){
    menuSections.forEach((menu)=>{
      menu.classList.remove("active")
    });
    this.classList.add("active")
  })
})
let hamb = document.querySelector(".hamb");
let mobilemenu = document.querySelector(".slidebar");
let close = document.querySelector(".close");
hamb.addEventListener("click", (event) =>{
  mobilemenu.classList.toggle("active");
  close.classList.toggle("active")
})
close.addEventListener("click",(e) =>{
   mobilemenu.classList.toggle("active");
   close.classList.toggle("active");
   close.style.transitionDelay="2s";
})
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.variable-width').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  arrows: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

