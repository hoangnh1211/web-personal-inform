$(document).ready(function (){
    // console.log("a");
    
      // var nav_offset_top = $('.header').offset().top;
      // console.log(nav_offset_top)
      function stickyHeader() {
      if ($('.header').length) {
        var strickyScrollPos = 1;
        if($(window).scrollTop() > strickyScrollPos) {
          $('.header').removeClass('fadeIn animated');
          $('.header').addClass('stricky-fixed fadeInDown animated')
        }
        else if($(window).scrollTop() <= strickyScrollPos) {
          $('.header').removeClass('stricky-fixed fadeInDown animated');
          $('.header').addClass('slideIn animated')
        }
      }
    }
      
      // instance of fuction while Window Scroll event
      var d=0;
    $(window).on('scroll', function () {	
      stickyHeader();
      // console.log($(window).scrollTop(),":",$('#language').offset().top-81)
      if ($(window).scrollTop()>$('#language').offset().top-81 ){
        my_skill(d);
        d=d+1;
      }

    }) 
  //   function animate() {
  //     setTimeout(function () {
  //         progress += increment;
  //         if(progress < maxprogress) {
  //             $progressBar.attr('value', progress);
  //             animate();
  //         } 
  //     }, timeout);
  // };
    function my_skill(d){
      // console.log("a",d)
      $(".progress-bar").removeClass('none');
      $(".my_skill .row").each(function() {
        $(this).waypoint(function() {
           
          var d1=0;
          const interval = setInterval(function () {
                  var progressBar = $(".progress-bar");
            
                  progressBar.each(function(indx){
                    var now=Number($(this).attr("aria-valuenow"));
                    var max=Number($(this).attr("aria-valuemax"));
                    // console.log(now,max);
                // console.log(progressBar.attr("aria-valuemax"))
                  if (now<max){
                    now=now+1;
                    $(this).css("width", now + "%")
                    $(this).attr("aria-valuenow",now)
                  }
                  d1=d1+1; 
                  if (d1==20000) {
                    clearInterval(interval)
                  }
                },10);
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
          // progressBar.addClass('')
    if (d<1){
      $('.counter').counterUp({
        delay: 20,
        time: 1500
      });
    }
 
          
    }
  //   $(".my_skill").each(function() {
  //     $(this).waypoint(function() {
  //         var progressBar = $(".progress-bar");
  //         progressBar.each(function(indx){
  //             $(this).css("width", $(this).attr("aria-valuenow") + "%")
  //         })
  //     }, {
  //         triggerOnce: true,
  //         offset: 'bottom-in-view'

  //     });
  // });
  $('.header .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 80
    }, 1500);
    event.preventDefault();
});
     
})