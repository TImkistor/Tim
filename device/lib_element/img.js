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
  }