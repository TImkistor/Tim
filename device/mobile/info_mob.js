import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
import H3 from '../lib_element/h3.js';
import IMG from '../lib_element/img.js';
import P from '../lib_element/p.js';

export default function info_mob(){
        const div = new DIV('info_div',"90%",window.innerHeight,'black')
        div.element.style.marginLeft = "5%"
        div.element.style.marginTop = "40px"
        div.element.style.borderRadius = "10%"
        div.element.style.boxShadow = "0px 0px 20px 5px blue"
        div.animationShadow('mouseover','0px 5px 100px 10px blue')
        div.animationShadow('mouseleave','0px 0px 20px 5px blue')
        div.appendTo(document.body)

        const div2 = new DIV('info_div2',"100%","35%",)
        div2.element.style.display = "flex"
        div2.element.style.justifyContent = 'center'
        div2.element.style.alignItems = "center"
        div2.appendTo(div.element)

        const div3 = new DIV('info_div2',"50%","100%",)
        div3.element.style.display = "flex"
        div3.element.style.justifyContent = 'center'
        div3.element.style.alignItems = "center"
        div3.appendTo(div2.element)

        const img = new IMG('info_img1','https://sun9-77.userapi.com/impg/RwRExZHFyeETot29QAQ7RqhybUlkOLmcB6c1gg/BDqy1h0p1G0.jpg?size=640x640&quality=95&sign=7e357c39ab6fd68cce0dffa41b8b110d&type=album')
        img.element.style.width = "90%"
        img.element.style.borderRadius = "100%"
        img.animationAdvent(10)
        img.appendTo(div3.element)
        
        const div4 = new DIV('info_div2',"50%","100%",)
        div4.appendTo(div2.element)
        
        const p1 = new P()
        p1.element.innerHTML = "<b>Имя:</b> Тимур"
        p1.element.style.color = "white"
        p1.appendTo(div4.element)

        const p2 = new P()
        p2.element.innerHTML = "<b>Город:</b> Москва"
        p2.element.style.color = "white"
        p2.appendTo(div4.element)

        const p3 = new P()
        p3.element.innerHTML = "<b>Специальность:</b> Техник по защите информации"
        p3.element.style.color = "white"
        p3.appendTo(div4.element)

        const p4 = new P()
        p4.element.innerHTML = "<b>Оброзавание:</b> Неоконченое высшее и среднее техническое"
        p4.element.style.color = "white"
        p4.appendTo(div4.element)

        const p5 = new P()
        p5.element.innerHTML = "<b>Вид работы:</b> Удаленая или работа в офисе не более 8 часов"
        p5.element.style.color = "white"
        p5.appendTo(div4.element)

        const p6 = new P()
        p6.element.innerHTML = "<b>Зарплата:</b> 500Р в час"
        p6.element.style.color = "white"
        p6.appendTo(div4.element)

        const p7 = new P()
        p7.element.innerHTML = "<b>Переезды:</b> Командировкам и переездам не готов"
        p7.element.style.color = "white"
        p7.appendTo(div4.element)

        const p8 = new P()
        p8.element.innerHTML = "<b>Гражанство:</b> РФ"
        p8.element.style.color = "white"
        p8.appendTo(div4.element)

        const p9 = new P()
        p9.element.innerHTML = "<b>Владениями языками:</b> Русский(разговорный) Англиский(на уровне чтения технической документации)"
        p9.element.style.color = "white"
        p9.appendTo(div4.element)

        const h1 = new H1 ('home_h1','Мой стек','white','center')
        h1.appendTo(div.element)

        const h2 = new H3 ('home_h2','(наведите на иконки что бы узнать подробнее)','white','center')
        h2.element.style.fontWeight = "normal"
        h2.appendTo(div.element)

        const div5 = new DIV('info_div3',"100%","10%")
        div5.element.style.display = "flex"
        div5.element.style.justifyContent = 'center'
        div5.element.style.alignItems = "top"
        div5.appendTo(div.element)

        const img2 = new IMG('info_img2','https://github.com/rus-https/my-site/blob/main/device/img/js.jpg?raw=true')
        img2.element.style.height = "100%"
        img2.element.style.borderRadius = "100%"
        img2.animationAdvent(10)
        img2.AnimationRotate("mouseover","right")
        img2.AnimationRotate("mouseleave","left")
        img2.appendTo(div5.element)

        const img3 = new IMG('info_img3','https://github.com/rus-https/my-site/blob/main/device/img/ts.png?raw=true')
        img3.element.style.height = "100%"
        img3.element.style.marginLeft = "30px"
        img3.element.style.borderRadius = "100%"
        img3.animationAdvent(10)
        img3.AnimationRotate("mouseover","right")
        img3.AnimationRotate("mouseleave","left")
        img3.appendTo(div5.element)

        const div6 = new DIV('info_div3',"90%","40%","green")
        div6.element.style.marginLeft = "5%"
        div6.appendTo(div.element)
}