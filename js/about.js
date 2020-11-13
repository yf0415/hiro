$(document).ready(function() {
    function aniGo(){
        var textL = $(".leftme h1");
        var input1 = textL.find($("label") );
        
        for(var i =0 ; i< input1.length; i ++)
        { 
             var index = i +1;
             var time = ((input1.length)-i ) * -60;
            $(".leftme h1 label:nth-child("+index+")").css( "-animation", "labelAni "+time+"ms 2.5s forwards ease-in-out" );
        }    
    
        var text2 = $(".rightme h1");
        var input2 = text2.find($("label") );
        
        for(var i =0 ; i< input2.length; i ++)
        { 
             var index2 = i +1;
             var time2 = ((input2.length)-i ) * 200;
            $(".rightme h1 label:nth-child("+index2+")").css( "-animation", "labelAni2 "+time2+"ms .8s forwards ease-out" );
        }
    }
    setTimeout(aniGo,300);
});


$(function(){
    var leftImg = $('.leftleft img');
    var canvas = $('.pentagon canvas');    
    
    leftImg.on('mousemove',function(e){
        pointX = e.clientX/50;
        pointY = (e.clientY/50) * -1;

        leftImg.css({
            transform:"rotateX(" + pointX + "deg) rotateY(" + pointY + "deg)"
        });
    });
    leftImg.on('mouseleave',function(e){
        x = 0; y = 0;
        leftImg.css({
            transform:"rotateX(" + x + "deg) rotateY(" + y + "deg)"
        });
    });

    canvas.on('mousemove',function(e){
        pointX = e.clientX/120;
        pointY = (e.clientY/90) * -1;

        canvas.css({
            transform:"rotateX(" + pointX + "deg) rotateY(" + pointY + "deg)"
        });
    });
    canvas.on('mouseleave',function(e){
        x = 0; y = 0;
        canvas.css({
            transform:"rotateX(" + x + "deg) rotateY(" + y + "deg)"
        });
    });
});