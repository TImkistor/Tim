import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
export default function home_pc(){
        const div = new DIV('home_div','100%','20%','black')
        div.element.style.display = "flex"
        div.element.style.justifyContent = "center"
        div.element.style.alignItems = "center"
        div.appendTo(document.body)
        const h1 = new H1('home_h1',' Проверки формы ^https://github.com/TImkistor','white','center');
        h1.animationShiftText(150)
        h1.appendTo(div.element);
}