import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
import IMG from '../lib_element/img.js';

export default function home_pc(){
        const div = new DIV('home_div','90%','90%','black')
        div.element.style.marginTop = "5%"
        div.element.style.marginLeft = "5%"
        div.element.style.borderRadius = "10%"
        div.element.style.boxShadow = "0px 5px 100px 10px blue"
        div.appendTo(document.body)

        const h1 = new H1('home_h1','RusAnonymTeam pressent','white','center');
        h1.element.style.fontSize = "50"
        h1.element.style.textShadow = "blue 1px 0 10px"
        h1.element.style.paddingTop = "10%"
        h1.animationShiftText(50)
        h1.appendTo(div.element);

        const h2 = new H1('home_h2','Занимаемся раработкой web приложений','white','center');
        h2.element.style.fontSize = "50"
        h2.element.style.fontWeight = "normal"
        h2.element.style.textShadow = "blue 1px 0 10px"
        h2.animationShiftText(50)
        h2.appendTo(div.element);

        const h3 = new H1('home_h3','Мои контакты','white','center');
        h3.element.style.fontSize = "50"
        h3.element.style.fontWeight = "normal"
        h3.animationShiftText(50)
        h3.appendTo(div.element);

        const div2 = new DIV('home_div2','50%','10%','black') 
        div2.element.style.display = "flex"
        div2.element.style.marginLeft = "25%"
        div2.element.style.justifyContent = "center"
        div2.element.style.alignItems = "center"
        div2.appendTo(div.element)

        const img1 = new IMG('home_img1','https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png','13%','100%')
        img1.element.style.borderRadius = '100%'
        img1.appendTo(div2.element)

        const img2 = new IMG('home_img2','https://images.live.vkplay.ru/image/42223324-64bb-4e29-be52-28e622f52ce8?change_time=1713129202&mw=640','13%','100%')
        img2.element.style.borderRadius = '100%'
        img2.element.style.marginLeft = "3%"
        img2.appendTo(div2.element)

        const img3 = new IMG('home_img3','https://avatars.mds.yandex.net/i?id=d7b2192f0a02bada544b9cfb22ae1507_l-5161002-images-thumbs&n=13','13%','100%')
        img3.element.style.borderRadius = '100%'
        img3.element.style.marginLeft = "3%"
        img3.appendTo(div2.element)
}