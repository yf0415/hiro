$(function(){ 
//start    


     $('.CS').load('cursor.html .cursor',cursorLoad);
     
     function cursorLoad(){
         var mouseCursor = $('.cursor');
        
         $(window).bind('scroll mousemove',function(e){
            mouseCursor.css({
                left: e.screenX,
                top: e.screenY - 70
            });
            $('nav a, aside a, button').each(function(){
                $(this).on('mouseover',function(){
                   mouseCursor.addClass('link');
                   mouseCursor.css('z-index',"-1");
                   $(this).addClass('hovered');
                });
                $(this).on('mouseleave',function(){
                   mouseCursor.removeClass('link');
                   mouseCursor.css('z-index',"1000");
                   $(this).removeClass('hovered');
                });
            });
            $('.mainstory .mainimg img, .popup button').each(function(){
                $(this).on('mouseover',function(){
                   mouseCursor.addClass('imghover');
                   mouseCursor.css('z-index',"55");
                });
                $(this).on('mouseleave',function(){
                   mouseCursor.removeClass('imghover');
                });
            });
         });
     }
//end  
});
    