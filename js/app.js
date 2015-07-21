// initiate materialize sidenav  

$(".button-collapse").sideNav();

// Controls bar stick to top on scroll

 $(window).scroll(function () {
     var scroll = $(window).scrollTop();

     if (scroll >= 150) {
         $(".controls").addClass("controls-fixed");
         $(".content").addClass("content-align")
         $(".quick-filters").addClass("content-align-fix")
     } else {
         $(".controls").removeClass("controls-fixed");
         $(".content").removeClass("content-align")
         $(".quick-filters").removeClass("content-align-fix")
     }
 });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

