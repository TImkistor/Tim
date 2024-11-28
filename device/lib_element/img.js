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

    animationRadius(mouse,radius,rotate,side){
     let currentRotation = rotate
     let rotationIncrement = 0

     if (side === "right"){
      rotationIncrement = 1
     }
     else{
      rotationIncrement = -1;
     }

     const rotateImage = () =>{
      this.element.style.transform = `rotate(${currentRotation}deg)`
      currentRotation = rotationIncrement;
      if (currentRotation < radius){
        requestAnimationFrame(rotateImage);
      }
     }

     this.element.addEventListener(mouse, ()=>{
     rotateImage()
     })
    }
  }