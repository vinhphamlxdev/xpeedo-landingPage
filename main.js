const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const header = $('.header')
const backTop = $('.back-top')
const accordions = $$('.accordion-content-single')
const playVideo = $('.play-btn')
const modalVideo = $('.modal-video')
const closeVideo = $('.close-Video')
const video = $('.video')
const menuIcon = $('.menu-icon')
const headerNavbar = $('.header-navbar')
const navLinks = $$('.navbar-link')
let mobile = window.matchMedia("(max-width:739px)")
let tabletAndMobile = window.matchMedia("(max-width: 1023px)")
let lastScrollTop = 0
const pageLoad = $('.load-modal')



  
//handle scroll
window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 5) {
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')
    }
    if (document.documentElement.scrollTop > 2000) {
        backTop.style.display = 'block'
    }else{
        backTop.style.display = 'none'
    }
    if (tabletAndMobile.matches) {
        headerScroll()
    }
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const x = +counter.innerText;
    const increment = target / 100;
    if (x < target) {
      counter.innerText = `${Math.ceil(x + increment)}`;
      setTimeout(updateCounter, 1000);
    } else {
      counter.innerText = `${target}`;
    }
  };
  updateCounter();
});
}
// set value heade when scroll up, down
function headerScroll(){
    var scrollTop  = document.documentElement.scrollTop || window.pageYOffset
    if (scrollTop > lastScrollTop) {
        header.style.top = '-88px'
    }else{
        header.style.top = '0'
    }
    lastScrollTop = scrollTop
}

backTop.onclick = ()=>{
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}
// show accordion
accordions.forEach(item => {
    item.onclick = ()=>{
        item.classList.toggle('active')
    }
});
// open close video
playVideo.onclick = function(){
    modalVideo.style.display = "block"
    video.src = 'https://www.youtube.com/embed/r44RKWyfcFw'
  }
  modalVideo.onclick = function(e){
    if (!e.target.closest('.video')) {
      modalVideo.style.display = 'none'
      video.src = ''
    }
  }
//   show menu
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('active')
    headerNavbar.classList.toggle('active')
}
//
navLinks.forEach(item=>{
  item.onclick = ()=>{
    $('.navbar-link.active').classList.remove('active')
    item.classList.add('active')
  }
})

