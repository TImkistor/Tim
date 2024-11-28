export default class DIV {
    constructor(id,width,height,backgroundColor) {
      this.element = document.createElement('div');
      this.element.id = id
      this.element.style.width = width
      this.element.style.height = height
      this.element.style.backgroundColor = backgroundColor
    }
  
    appendTo(parentElement) {
      parentElement.appendChild(this.element);
    }

    animationShadow(mouse,boxShadow){
      this.element.addEventListener(mouse,() => {
       this.element.style.boxShadow  = boxShadow
      });
    }
  }