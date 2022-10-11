$(document).ready(function(){
   $('.mail').click(function(){
     if($('.mail').hasClass('mail')){
         $('.mail').css('visibility', 'hidden');
        $('.mail').addClass('close2').removeClass('mail');
        $('.mail-board').css('display', 'block');

        $('.close2').css('visibility', 'visible');

        $('.fa-envelope-open-text').removeClass('fa-envelope-open-text').addClass('fa-inbox');




     }else if($('.close2').hasClass('close2')){
        $('.close2').addClass('mail').removeClass('close2');  
        $('.mail-board').css('display', 'none');

        $('.fa-inbox').removeClass('fa-inbox').addClass('fa-envelope-open-text');

        
     }
   });
 });