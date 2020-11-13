$(function(){ 
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var imgSrc,imgSrc2,name,detail,story,language,mode,day,web,url1,url2,url3,url4,url5,url6,title1,title2,title3,title4,title5,title6,link1,link2,pdfView,webView;
            
            function funList(code){
                var mainHeader,mainstory,storymain,page1,page21,page22,page31,page32,type,btn1,btn2,btn3,btn4,btn5,btn6,pdfLink,webLink = ''

                $(data).find('item').each(function(i){
                    
                    imgSrc = $(this).find('imgSrc').text();
                    imgSrc2 = $(this).find('imgSrc2').text();
                    name = $(this).find('name').text();
                    detail = $(this).find('detail').text();
                    story = $(this).find('story').text();
                    language = $(this).find('language').text();
                    mode = $(this).find('mode').text();
                    day = $(this).find('day').text();
                    web = $(this).find('web').text();

                    link1 = $(this).find('link1').text();
                    link2 = $(this).find('link2').text();
                    pdfView = $(this).find('pdfView').text();
                    webView = $(this).find('webView').text();

                    url1 = $(this).find('url1').text();
                    url2 = $(this).find('url2').text();
                    url3 = $(this).find('url3').text();
                    url4 = $(this).find('url4').text();
                    url5 = $(this).find('url5').text();
                    url6 = $(this).find('url6').text();
                    title1 = $(this).find('title1').text();
                    title2 = $(this).find('title2').text();
                    title3 = $(this).find('title3').text();
                    title4 = $(this).find('title4').text();
                    title5 = $(this).find('title5').text();
                    title6 = $(this).find('title6').text();


                    type = $(this).find('type').text();
                    
                    if( code == type){
                        mainstory = "<img id='png2' src='"+imgSrc+"' alt=''>";  
                        mainstory += "<img id='gif2' src='"+imgSrc2+"' alt=''>";  
                        
                        
                        mainHeader = "<h1>"+name+"</h1>";
                        storymain =  "<p>"+detail+"</p>";

                        page1 = "<p>"+story+"</p>";
                        page21 = "<p>"+language+"</p>";
                        page22 = "<p>"+mode+"</p>";
                        page31 = "<p>"+day+"</p>";
                        page32 = "<p>"+web+"</p>";

                        btn1 = "<button onclick='window.open('"+url1+"')'><span>"+title1+"</span></button>";
                        btn2 = "<button onclick='window.open('"+url2+"')'><span>"+title2+"</span></button>";
                        btn3 = "<button onclick='window.open('"+url3+"')'><span>"+title3+"</span></button>";
                        btn4 = "<button onclick='window.open('"+url4+"')'><span>"+title4+"</span></button>";
                        btn5 = "<button onclick='window.open('"+url5+"')'><span>"+title5+"</span></button>";
                        btn6 = "<button onclick='window.open('"+url6+"')'><span>"+title6+"</span></button>";                        

                        pdfLink = "<button onclick='window.open('"+link1+"')'><span>"+pdfView+"</span></button>";
                        webLink = "<button onclick='window.open('"+link2+"')'><span>"+webView+"</span></button>";
                    }
                   
                    $('main h1').html(mainHeader);
                    $('.mainimg').html(mainstory);                    
                    $('.story').html(storymain);    
                    $('.page1 p').html(page1);
                    $('.page2-1 li p').html(page21);
                    $('.page2-1 li span').html(page22);                    
                    $('.page2-2 li p').html(page31);
                    $('.page2-2 li span').html(page32);   
                    $('.page3 .pagebtn .on1').html(btn1);
                    $('.page3 .pagebtn .on2').html(btn2);
                    $('.page3 .pagebtn .on3').html(btn3);
                    $('.page3 .pagebtn .on4').html(btn4);
                    $('.page3 .pagebtn .on5').html(btn5);
                    $('.page3 .pagebtn .on6').html(btn6);

                    $('.page4 .pagebtn2 .btn1').html(pdfLink);
                    $('.page4 .pagebtn2 .btn2').html(webLink);
                    
                    $('aside a').removeClass('in');
                    $("aside a[href='"+code+"']").addClass('in');
                    
                });
                $('.mainstory .mainimg img').mousemove(
                    function(){
                        $('#png2').css({opacity:"0"});
                        $('#gif2').css({opacity:"1"});
                    }
                );
                $('.mainstory .mainimg img').mouseleave(
                    function(){
                        $('#png2').css({opacity:"1"});
                        $('#gif2').css({opacity:"0"});
                    }
                );

            //
            }
            funList('p01');
                
                   
                $('aside a').on('click',changePage);

                var idx = 0;
                var len = $('aside a').length;
                function changePage(e){
                    e.preventDefault();
                    idx = $(this).index();
                    
                    var type = $(this).attr('href');
                    funList(type);                
                    history.pushState({page:type},'pageHistory','');
                };
    
                $('.mainstory').on('mousewheel',function(e){
                    if(!$('.clickpage').hasClass('open')){
                        if (e.originalEvent.deltaY < 0){
                            if(idx > 1){
                                idx--;
                                funList('p0'+idx);
                            }
                        }else{
                            if(idx < len){
                                idx++;
                                funList('p0'+idx);
                            }
                        }
                    }                
                });  
            

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

            
            $('.mainimg').click(function(){
                $('.clickpage').toggleClass('open');
                $('.clickpage').slideToggle(500);
            });
            $('aside a').click(function(){
                $('.clickpage').removeClass('open');
                $('.clickpage').css({display:"none"});
            });
        //
        }
    });
})
