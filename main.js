var swiper = new Swiper(".mySwiper", {   // creates a new Swiper instance, targeting the element with the class mySwiper//
    loop: true,                          // infinite loop //
    spaceBetween: 30,                    // Sets the space between slides to 30 pixels //
    centeredSlides: true,                // Centers the active slide in the middle of the viewport //
    
    pagination: {
      el: ".swiper-pagination",     // Specifies the where the pagination will be rendered (using the class swiper-pagination)//
      clickable: true,                   // clickable pagination //
      dynamicBullets:true,               // changes pagination size //
    },
    breakpoints: {
        380: {
          slidesPerView: 1,             // visible slides at various viewport widths to ensure responsiveness //
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
    }
  });

  