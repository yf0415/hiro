
$(function(){
  $('.leftme, .rightme').on('mousemove',function(e){
    $(this).addClass('on');    
  });
  $('.leftme, .rightme').on('mouseleave',function(){
    $(this).removeClass('on');
  });
});

$(function(){
    //s
    

    var skills = [
      {   "captions" : [
          "HTML5",
          "CSS3",
          "Javascript",
          "Photoshop",
          "jQuery"
        ],
        "values" : [
          0.90,
          0.90,
          0.75,
          0.80,
          0.70
        ]
      }  
    ];
    
    var canvas = $('canvas');

    var penIndex = 0;
    var valIndex = 0;
    var width = 0;
    var height = 0;
    var penRotate = Math.PI;
    var sides = 5;
    var mode = 2 * Math.PI/sides;
  
    function getXY(i, radius){
        return{
            "x": Math.sin(penRotate + mode * i) * radius * width + width/2,
            "y": Math.cos(penRotate + mode * i) * radius * height + height/2
        };        
    }

    canvas.each(function(index){
      width = $(this).width();
      height = $(this).height();
      var ctx = $(this)[0].getContext('2d');
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.textAlign="center";
      ctx.font="1em Archivo";      
      color = "#737373";

      for(var i=0;i<sides;i++){
        ctx.beginPath();
        xy = getXY(i,0.3);
        ctx.strokeStyle = "#4f4f4f";
        ctx.moveTo(width*0.5,height*0.5);
        ctx.lineTo(xy.x,xy.y);
        ctx.setLineDash([2,5]);
        xy = getXY(i+1, 0.3);
        ctx.lineTo(xy.x,xy.y);
        xy = getXY(i,0.36);
        ctx.fillText(skills[penIndex].captions[valIndex],xy.x, xy.y+8);
        valIndex++;
        ctx.closePath();
        ctx.stroke();
      }
      for (var i = 0; i < sides; i++) {
        ctx.beginPath();
        xy = getXY(i, 0.25);
        ctx.strokeStyle = color;
        ctx.lineTo(xy.x, xy.y);
        xy = getXY(i+1, 0.25);
        ctx.lineTo(xy.x, xy.y);
        ctx.closePath();
        ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.2);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.2);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.15);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.15);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.1);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.1);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
        color2();
        function color2(){
          valIndex = 0;
          ctx.beginPath();
          
          ctx.fillStyle = "rgba(89,132,136, 0.5)";
          ctx.strokeStyle = "rgba(89,132,136, 0.6)";
          ctx.lineWidth =0;
          
          var value = skills[penIndex].values[valIndex];
          xy = getXY(i, value * 0.3);
          ctx.moveTo(xy.x,xy.y);

          for (var i = 0; i < sides; i++) {
            xy = getXY(i, value * 0.3);
            ctx.lineTo(xy.x,xy.y);
            valIndex++;
            value = skills[penIndex].values[valIndex];
          }
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          valIndex = 0; 
        }
  });

    //e
});