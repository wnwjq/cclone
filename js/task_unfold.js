$(document).ready(function(){
   $('.tasks').click(function(){
     if($('.tasks').hasClass('tasks')){
         $('.tasks').css('visibility', 'hidden');
        $('.tasks').addClass('close').removeClass('tasks');
        $('.tasks-board').css('display', 'block');

        $('.close').css('visibility', 'visible');

        $('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');




     }else if($('.close').hasClass('close')){
        $('.close').addClass('tasks').removeClass('close');  
        $('.tasks-board').css('display', 'none');

        $('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');



        
     }
   });
 });