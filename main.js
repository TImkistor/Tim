import home_pc from "./device/pc/home_pc.js";
import home_mob from "./device/mobile/home_mob.js";
import info_pc from "./device/pc/info_pc.js";
window.onload = function main() {
  document.body.style.backgroundColor = "black"
  document.body.style.backgroundImage = "url(https://github.com/rus-https/my-site/blob/main/device/img/js.jpg?raw=true)"
  if (window.innerWidth > 1000){
    home_pc()
    info_pc()
  }
  else{
    home_mob()
  }
  }