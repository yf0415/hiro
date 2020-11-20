$(function(){ 
//start    
     $('header').load('header.html .menu',menuLoad);
     
     function menuLoad(){
        $('.mainlogo').on('mouseover',function(){
            $('#png').css({
                opacity:"0"
            });
            $('#gif').css({
                opacity:"1"
            });
        });
        $('.mainlogo').on('mouseleave',function(){
            $('#png').css({
                opacity:"1"
            });
            $('#gif').css({
                opacity:"0"
            });
        });
        $('.mainlogo').click(function(){
            location.href = 'index.html';            
        });
        
        
        $('nav a').eq(localStorage.pageNum).addClass('on');
        
        $('nav a').on('click',function(e){
            e.preventDefault();
            var $this = $(this);
            
            $('header,main').css({
                transformOrigin:"50% 100%",
                animation: "openweb .5s forwards ease-in-out"
            });
            $('.projectmain').fadeOut(50);

            function ink(){
                localStorage.pageNum = $this.index();            
                location.href = $this.attr('href');
            }
            setTimeout(ink,500);

        });
    

        function printNow(){
            var now = new Date();   
            nowDtae = now.getFullYear()+' - '+now.getMonth()+' - 0'+(now.getDay()+1);
            var nowHours = addZeros(now.getHours(),2);
            var nowMinutes = addZeros(now.getMinutes(),2);
            var nowSeconds = addZeros(now.getSeconds(),2);
            var nowTime = nowHours + ':' + nowMinutes + ":" + nowSeconds;
                        
            $('.nowTime').html(nowDtae + '&nbsp&nbsp' +  nowTime); 
            setTimeout(printNow, 1000);
        }
        function addZeros(num, digit) {
            var zero = '';
            num = num.toString();
            if (num.length < digit) {
              for (i = 0; i < digit - num.length; i++) {
                zero += '0';
              }
            }
            return zero + num;
      }
        
        $(window).ready(function(){
            printNow();
        });

    }
//end  
});
    