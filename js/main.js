$(document).ready(function(){
    $(".cc").owlCarousel({
        items:1,
        loop:true,
        nav: true,
    });
  });

  $(document).ready(function(){
    $(".tripss").owlCarousel({
        items:3,
        loop:true,
        nav: true,
        margin:15,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
  });


  $(window).scroll(function(){
      if($(this).scrollTop()>100)
      {
          $("header").addClass("sticky");
          $(".logo").addClass("small");
      }
      else
      {
        $("header").removeClass("sticky");
        $(".logo").removeClass("small")
      }
  })