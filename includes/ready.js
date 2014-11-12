$(document).ready(function () {



  $('.description').hide();

  $('.work li a').on('click',function(e){
    if( $(this).siblings().is( ":hidden" )  ) {
      $('.description').hide();
      $(this).siblings().show();
    }
    else {
      $('.description').hide();
      $(this).siblings().hide();
    }
  });
});