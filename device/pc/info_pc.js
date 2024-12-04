import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
import H3 from '../lib_element/h3.js';
import IMG from '../lib_element/img.js';
import P from '../lib_element/p.js';

export default function info_pc(){
        const div = new DIV('info_div',"50%",window.innerHeight,'black')
        div.element.style.marginTop = "40px"
        div.element.style.borderRadius = "10%"
        
        if (parseInt(div.element.style.height) < 900){
            div.element.style.height = parseInt(div.element.style.height) * 2
            div.element.style.width = "90%"
            div.element.style.marginLeft = "5%"
         }
         else{
            div.element.style.width = "50%"
            div.element.style.marginLeft = "25%"
         }

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
        img.element.style.height = "90%"
        img.element.style.borderRadius = "100%"
        img.animationAdvent(10)
        img.appendTo(div3.element)
        
        const div4 = new DIV('info_div2',"50%","100%",)
        div4.element.style.display ="flex"
        div4.element.style.flexDirection ="column"
        div4.element.style.overflowY = "auto";
        div4.element.style.maxHeight = "100vh";
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

        img2.element.addEventListener("mouseover", ()=>{
            div6.element.innerHTML = ""
            const textStorage = ["<b>·</b> Понимание основных конпцепций javaScript",
                "<b>·</b> Умение работать с массивами и объектами, осуществлять доступ к их элементам и модификацию данных",
                "<b>·</b> Понимания работы с колекциями данных, использую методы массивов(map, filter, reduce и.т.д)",
                "<b>·</b> Умения работать с асинхронам кодом, использовать проммисы и async/await для управления аснихронами операциями",
                "<b>·</b> Знания работы DOM, умения создавать, модифицировать и управлять элементами на странице, добовлять обработчики событий",
                "<b>·</b> Умения работать c AJAX запросами, отпровлять и получать данные сервера",
                "<b>·</b> Умения отслеживать код с помощью инструментов браузера (DevTools) и умения использовать различные методы дебага",
                "<b>·</b> Знания основных принцопов ООП в JavaScript, умения использовать классы и наследование",
                "<b>·</b> Умения писать чистый и эффективный код, следую принципам DRY(Don`t Repeat Yourself) и SOLID"

            ]
            textStorage.forEach((text) =>{
                const p2 = new P()
                p2.element.innerHTML = text
                p2.element.style.color = "white"
                p2.element.style.textAlign = "left"
                p2.animationAdvent(10)
                p2.appendTo(div6.element)
            })
        })

        img2.AnimationRotate("mouseleave","left")
        img2.appendTo(div5.element)

        const img3 = new IMG('info_img3','https://github.com/rus-https/my-site/blob/main/device/img/ts.png?raw=true')
        img3.element.style.height = "100%"
        img3.element.style.marginLeft = "30px"
        img3.element.style.borderRadius = "100%"
        img3.animationAdvent(10)
        img3.AnimationRotate("mouseover","right")

        img3.element.addEventListener("mouseover", ()=>{
            div6.element.innerHTML = ""
            const textStorage = ["<b>·</b> Понимание основных конпцепций typeScript",
                "<b>·</b> Умение работать с массивами и объектами, осуществлять доступ к их элементам и модификацию данных",
                "<b>·</b> Понимания работы с колекциями данных, использую методы массивов(map, filter, reduce и.т.д)",
                "<b>·</b> Умения работать с асинхронам кодом, использовать проммисы и async/await для управления аснихронами операциями",
                "<b>·</b> Знания работы DOM, умения создавать, модифицировать и управлять элементами на странице, добовлять обработчики событий",
                "<b>·</b> Умения работать c AJAX запросами, отпровлять и получать данные сервера",
                "<b>·</b> Умения отслеживать код с помощью инструментов браузера (DevTools) и умения использовать различные методы дебага",
                "<b>·</b> Знания основных принцопов ООП в typeScript, умения использовать классы и наследование",
                "<b>·</b> Умения писать чистый и эффективный код, следую принципам DRY(Don`t Repeat Yourself) и SOLID"

            ]
            textStorage.forEach((text) =>{
                const p1 = new P()
                p1.element.innerHTML = text
                p1.element.style.color = "white"
                p1.element.style.textAlign = "left"
                p1.animationAdvent(10)
                p1.appendTo(div6.element)
            })
        })

        img3.AnimationRotate("mouseleave","left")
        img3.appendTo(div5.element)

        const div6 = new DIV('info_div4',"90%","40%")
        div6.element.style.marginLeft = "5%"
        div6.element.style.display ="flex"
        div6.element.style.flexDirection ="column"
        div6.element.style.overflowY = "auto";
        div6.element.style.maxHeight = "100vh";
        div6.appendTo(div.element)
}