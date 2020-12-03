import 'babel-polyfill';
import {about1, about2} from './about.js';
import common from './common.js';
import header from './header.js';
import {pentagon1,pentagon2} from './pentagon.js';
import project from './project.js';
import scorllnext from './scorllnext.js';


function init(){
    common();

    // about1();
    // about2();
   
    // pentagon1();
    // pentagon2();
    // project();
   
    //상단 주소에서 페이지명만 추출
    var page = location.pathname,
        pageS = page.lastIndexOf('/')+1,
        pageE = page.lastIndexOf('.'),
        pageName = page.slice(pageS,pageE);
        
    switch(pageName){ 
        case 'index':scorllnext(); break;
        case 'aboutme':header(); about1(); about2(); pentagon1(); pentagon2(); break;
        case 'project':header(); project(); break;
        default : scorllnext(); break;
    }
}
window.addEventListener('DOMContentLoaded',init); 