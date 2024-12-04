import DIV from '../lib_element/div.js';

export default function info_pc(){
        const div = new DIV('info_div',"90%","100px","white")
        div.element.style.marginLeft = "5%"
        div.element.style.position = "absolute"
        div.appendTo(document.body)

}