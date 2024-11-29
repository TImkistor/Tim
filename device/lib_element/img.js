export default class IMG {
    constructor(id,src,width,height) {
      this.element = document.createElement('img');
      this.element.id = id
      this.element.src = src
      this.element.style.width = width
      this.element.style.height = height
    }
  
    appendTo(parentElement) {
      parentElement.appendChild(this.element);
    }

    animationAdvent(speed){
       this.element.style.opacity = 0
       let opacity = 0;
       const fadeIn = () =>{
        opacity += 0.01
        this.element.style.opacity = opacity
        if (opacity < 1){
          requestAnimationFrame(fadeIn)
        }
       }
       setTimeout(fadeIn,speed)
    }
    AnimationRotate(mouse,side){
        this.element.addEventListener(mouse,()=>{
          if ( side === "right"){
          this.element.style.transition = 'transform 1s'
          this.element.style.transform = 'rotate(360deg)'
          }
          else{
            this.element.style.transition = 'transform 1s'
            this.element.style.transform = 'rotate(-360deg)'
          }
        })
  }
}