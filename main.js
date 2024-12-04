import home_pc from "./device/pc/home_pc.js";
import home_mob from "./device/mobile/home_mob.js";
import info_pc from "./device/pc/info_pc.js";
import info_mob from "./device/mobile/info_mob.js";
window.onload = function main() {

  document.body.style.backgroundColor = "black"
  document.body.style.backgroundImage = "url(https://github.com/rus-https/my-site/blob/main/device/img/stars.gif?raw=true)"
  document.body.style.backgroundSize = "cover"

  if (window.innerWidth > 1000){
    home_pc()
    info_pc()
  }
  else{
    home_mob()
    info_mob()
  }
  }