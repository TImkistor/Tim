import home_pc from "./device/pc/home_pc.js";
import home_mob from "./device/mobile/home_mob.js";
window.onload = function main() {
  if (window.innerWidth > 1000){
    home_pc(window.innerHeight)
  }
  else{
    home_mob(window.innerHeight)
  }
  }