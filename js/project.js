$(function(){ 
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var name,smalltalk,logo,num;
            var type,imgSrc,imgSrc2,detail,story,mode,day,web,url1,url2,url3,url4,url5,title1,title2,title3,title4,title5,language1,language2,language3,language4;
            var bln = true;

            function funList(code){
                var project = ''
                var backimgMain,storyone,storytwo,backimgMokup,siteBtn,languageImg,dayHP,modeHP,webHP;

                $(data).find('item').each(function(i){
                    
                    //name
                    name = $(this).find('name').text();

                    //projectlist
                    smalltalk = $(this).find('smalltalk').text();
                    num = $(this).find('num').text();
                    logo = $(this).find('logo').text();

                    project += "<li><div class='listnum'>";
                    project += "<h5>"+num+"</h5></div>";
                    project += "<div class='logoimg' data-num='p0"+(i+1)+"'>";
                    project += "<a href='#'><img src='"+logo+"' alt=''></a></div>";
                    project += "<div class='smalllist'>";
                    project += "<h2>"+name+"</h2>";
                    project += "<p>"+smalltalk+"</p>";
                    project += "</div></li>";

                    //projectmain                    
                    type = $(this).find('type').text();
                    if( code == type){                        
                        imgSrc = $(this).find('imgSrc').text();
                        imgSrc2 = $(this).find('imgSrc2').text();
                        detail = $(this).find('detail').text();

                        story = $(this).find('story').text();
                        mode = $(this).find('mode').text();
                        day = $(this).find('day').text();
                        web = $(this).find('web').text();

                        url1 = $(this).find('url1').text();
                        url2 = $(this).find('url2').text();
                        url3 = $(this).find('url3').text();
                        url4 = $(this).find('url4').text();
                        url5 = $(this).find('url5').text();

                        title1 = $(this).find('title1').text();
                        title2 = $(this).find('title2').text();
                        title3 = $(this).find('title3').text();
                        title4 = $(this).find('title4').text();
                        title5 = $(this).find('title5').text();

                        language1 = $(this).find('language1').text();
                        language2 = $(this).find('language2').text();
                        language3 = $(this).find('language3').text();
                        language4 = $(this).find('language4').text();

                        //html
                        backimgMain = "<div class='backimg' style='background:url("+imgSrc+") no-repeat fixed;'></div>";

                        storyone = "<div class='projectname'><h1>"+name+"</h1>";
                        storyone += "<a href='"+url1+"' target='_blank'> WEB VIEW > </a></div>";
                        storyone += "<p>"+detail+"</p>";

                        storytwo = "<h3>동기</h3><p>"+story+"</p>";
                        
                        backimgMokup = "<div class='backimg' style='background:url("+imgSrc2+") no-repeat fixed;'></div>";

                        siteBtn = "<button type = 'button'><a href='"+url1+"' target='_blank'>"+title1+"</a></button>";
                        siteBtn += "<button type = 'button'><a href='"+url2+"' target='_blank'>"+title2+"</a></button>";
                        siteBtn += "<button type = 'button')'><a href='"+url3+"' target='_blank'>"+title3+"</a></button>";
                        siteBtn += "<button type = 'button'><a href='"+url4+"' target='_blank'>"+title4+"</a></button>";
                        siteBtn += "<button type = 'button'><a href='"+url5+"' target='_blank'>"+title5+"</a></button>";
                        
                        languageImg = "<img src='"+language1+"' alt=''>";
                        languageImg += "<img src='"+language2+"' alt=''>";
                        languageImg += "<img src='"+language3+"' alt=''>";
                        languageImg += "<img src='"+language4+"' alt=''>";
                        

                        dayHP = "<h3>제작기간</h3>";
                        dayHP += "<p>"+day+"</p>";

                        modeHP = "<h3>개발환경</h3>";
                        modeHP += "<p>"+mode+"</p>";

                        webHP = "<h3>웹접근성</h3>";
                        webHP += "<p>"+web+"</p>";
                    }


                    $('.backpage1 .backimg').html(backimgMain);
                    $('.backpage1 .stroymain .storyone').html(storyone);
                    $('.backpage1 .stroymain .storytwo').html(storytwo);
                    $('.backpage1 .stroymain .etcline .language .languageimg').html(languageImg);
                    $('.backpage1 .stroymain .etcline .etcright .etcup .day').html(dayHP);
                    $('.backpage1 .stroymain .etcline .etcright .etcup .mode').html(modeHP);
                    $('.backpage1 .stroymain .etcline .etcright .web').html(webHP);
                    
                    $('.backpage2 .backimg').html(backimgMokup);
                    $('.page2 .sitepage .btn').html(siteBtn);

                    $('.pagenum a').removeClass('on');
                    $(".pagenum a[href='"+code+"']").addClass('on');
                });
                if(bln == true){
                    $('main .projectlist').html(project); 
                    bln = false ;
                }
            //
            }
            funList('p01');

            $("main").on('mousewheel',function(e){
                $('main .titleprject2').css({
                    position:"fixed",
                    left:"5.7%",top:"14.5%"
                });
                $('main .projectlist').css("padding-top","14%");

                var wheelE = (e.originalEvent.wheelDelta)*.8;
                if(wheelE > 0){
                    $(this).scrollLeft(-wheelE + $(this).scrollLeft());        
                }else{
                    $(this).scrollLeft(-wheelE + $(this).scrollLeft());
                }
        
        });

            $('.pagenum a').on('click',changePage);

                var idx = 0;
                var len = $('.pagenum a').length;
                function changePage(e){
                    e.preventDefault();
                    idx = $(this).index();
                    
                    var type = $(this).attr('href');
                    funList(type);                
                    history.pushState({page:type},'pageHistory','');
                    $('html').animate({scrollTop:0},600);
                };
    
            $(window).on('popstate',function(){
                var type;                
                try{
                    console.log(type);
                    type = history.state.page;
                }catch{
                    type = 'p01';
                }
                funList(type);
            });

            function liAni(){
                var ul = $("main .projectlist");
                var liall = ul.find($("li") );
                
                for(var i =0 ; i< liall.length; i ++)
                { 
                    var index2 = i +1;
                    var time2 = ((liall.length)-i ) * -200;
                    $("main .projectlist li:nth-child("+index2+")").css( "-animation", "slideup "+time2+"ms 1.2s forwards ease-in-out" );
                }
            }
            setTimeout(liAni,500);
            
            $('.logoimg').click(function(e){
                e.preventDefault();
                funList($(this).attr('data-num')); 
                $('.projectmain').fadeIn(0);
                function playcss(){
                    $('.projectmain').css({
                        position:"absolute",
                        left:"0",
                        top:"35%",
                        transform:"trnaslate(0,-35%)"
                    });
                }
                setTimeout(playcss,150);

                $('.backbtn').css("display","block");
                function opacityspan(){
                    $('.backbtn').css("opacity","1");
                }
                setTimeout(opacityspan,330);

            });
            
            $('.backbtn').click(function(){
                $('.projectmain').css({
                    position:"absolute",
                    left:"0",
                    top:"100%",
                    transform:"trnaslate(0,-100%)"
                });
                $("main .projectlist li").css("opacity","1");
                function changeNone(){
                    $('.projectmain').css("display","none");
                }
                setTimeout(changeNone,200);
                $('.backbtn').css("display","none");

            });
                
        //
        }
    });
})


$(document).ready(function() {
    function aniGo(){
        var textL = $(".titleprject2 h1");
        var input1 = textL.find($("label") );
        
        for(var i =0 ; i< input1.length; i ++)
        { 
             var index = i +1;
             var time = ((input1.length)-i ) * -60;
            $(".titleprject2 h1 label:nth-child("+index+")").css( "-animation", "labelAni "+time+"ms 2.5s forwards ease-in-out" );
        }    
    }
    setTimeout(aniGo,300);

});

