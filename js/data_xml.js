$(function(){ 
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var imgSrc,imgSrc2,logo,name,detail,story,mode,day,web,url1,url2,url3,url4,url5,url6,title1,title2,title3,title4,title5,title6,language1,language2,language3,language4,smalltalk,logo,num;
            
            function funList(code){
                var mainHeader,mainstory,storymain,storypage,modepage,daypage,webpage,type,btn1,btn2,btn3,btn4,btn5,btn6,dango1,project = ''

                $(data).find('item').each(function(i){
                    
                    imgSrc = $(this).find('imgSrc').text();
                    imgSrc2 = $(this).find('imgSrc2').text();
                    name = $(this).find('name').text();
                    detail = $(this).find('detail').text();
                    story = $(this).find('story').text();
                    mode = $(this).find('mode').text();
                    day = $(this).find('day').text();
                    web = $(this).find('web').text();

                    language1 = $(this).find('language1').text();
                    language2 = $(this).find('language2').text();
                    language3 = $(this).find('language3').text();
                    language4 = $(this).find('language4').text();
                    smalltalk = $(this).find('smalltalk').text();
                    num = $(this).find('num').text();
                    logo = $(this).find('logo').text();

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


                    //mainpage
                    project = "<li><div class='listnum'>";
                    project += "<h5>"+num+"</h5></div>";
                    project += "<div class='logoimg'>";
                    project += "<img src='"+logo+"' alt=''></div>";
                    project += "<div class='smalllist'>";
                    project += "<h2>"+name+"</h2>";
                    project += "<p>"+smalltalk+"</p>";
                    project += "</div></li>";

                    $('main .projectlist').append(project);

                    console.log('a');

                    //subpage
                    // if( code == type){
                    //     mainstory = "<img id='png2' src='"+imgSrc+"' alt=''>";  
                    //     mainstory += "<img id='gif2' src='"+imgSrc2+"' alt=''>";  
                        
                    //     mainHeader = "<h1>"+name+"</h1>";
                    //     storymain =  "<p>"+detail+"</p>";

                    //     dango1 = "<li><img src='"+language1+"' alt=''></li>";
                    //     dango1 += "<li><img src='"+language2+"' alt=''></li>";
                    //     dango1 += "<li><img src='"+language3+"' alt=''></li>";
                    //     dango1 += "<li><img src='"+language4+"' alt=''></li>";

                    //     storypage = "<p>"+story+"</p>";
                    //     modepage = "<p>"+mode+"</p>";
                    //     daypage = "<p>"+day+"</p>";
                    //     webpage = "<p>"+web+"</p>";

                    //     btn1 = "<a href='"+url1+"' target='_blank'>"+title1+"</a>";
                    //     btn2 = "<a href='"+url2+"' target='_blank'>"+title2+"</a>";
                    //     btn3 = "<a href='"+url3+"' target='_blank'>"+title3+"</a>";
                    //     btn4 = "<a href='"+url4+"' target='_blank'>"+title4+"</a>";
                    //     btn5 = "<a href='"+url5+"' target='_blank'>"+title5+"</a>";
                    //     btn6 = "<a href='"+url6+"' target='_blank'>"+title6+"</a>";
                    // }
                   
                    
                    $('aside a').removeClass('in');
                    $("aside a[href='"+code+"']").addClass('in');
                    
                });
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

        //
        }
    });
})
