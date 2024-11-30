import home_pc from "./device/pc/home_pc.js";
import home_mob from "./device/mobile/home_mob.js";
window.onload = function main() {
  console.log(window.innerWidth)
  if (window.innerWidth > 1000){
    home_pc()
  }
  else{
    home_mob()
  }
  }