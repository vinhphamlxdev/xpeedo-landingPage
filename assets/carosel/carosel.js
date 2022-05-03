
    $('.app-screenshorts-container').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
        slideBy: 1,
        smartSpeed: 500,
        navText:false,
  responsive:{
    0:{
        items:1,
        navText:false,
       
  
    },
    600:{
        items:3,
    },
    1200: {
    items: 3,
    
    
  },
  2000: {
    items: 3,
   
  },
  }
  })