$(document).ready(function(){
    $(window).bind('mousewheel click',run);

    function run(event){        

        $('.mainfont2, aside').fadeOut(450);
        $('.logo img').css({
                position:"absolute",
                left:"48%",
                top:"100%",
                transform:"translate(-52%,-28%) scale(0.5)"
        });
            
        setTimeout(go,400);

        function go(){
            localStorage.pageNum = $(this).index()+2;
            location.href = 'aboutme.html';  
        }       
    }
});