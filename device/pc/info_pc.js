import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
import H3 from '../lib_element/h3.js';
import IMG from '../lib_element/img.js';
import P from '../lib_element/p.js';

export default function info_pc(){
        const div = new DIV('info_div',"50%",window.innerHeight,'black')
        div.element.style.marginLeft = "25%"
        div.element.style.marginTop = "40px"
        div.element.style.borderRadius = "10%"
        div.element.style.boxShadow = "0px 0px 20px 5px blue"
        div.animationShadow('mouseover','0px 5px 100px 10px blue')
        div.animationShadow('mouseleave','0px 0px 20px 5px blue')
        div.appendTo(document.body)

        const div2 = new DIV('info_div2',"100%","35%",'red')
        div2.appendTo(div.element)
         
        const h1 = new H1 ('home_h1','Мой стек','white','center')
        h1.appendTo(div.element)

        const h2 = new H3 ('home_h2','(наведите на иконки что бы узнать подробнее)','white','center')
        h2.element.style.fontWeight = "normal"
        h2.appendTo(div.element)

        const div3 = new DIV('info_div3',"100%","10%",'blue')
        div3.element.style.display = "flex"
        div3.element.style.justifyContent = 'center'
        div3.element.style.alignItems = "top"
        div3.appendTo(div.element)

        const div4 = new DIV('info_div3',"100%","30%",'green')
        div4.appendTo(div.element)

}