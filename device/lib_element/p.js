export default class P{
    constructor(){
       this.element = document.createElement('P')
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.element);
      }
}