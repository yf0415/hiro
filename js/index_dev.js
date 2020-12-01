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
   

    var page = localStorage.pageNum;
    switch(page){
        case '0':scorllnext(); break;
        case '1':header(); about1(); about2(); pentagon1(); pentagon2(); break;
        case '2':header(); project(); break;
    }
}
window.addEventListener('DOMContentLoaded',init);