
export default function DisableWallpaper(valor) {
     var element1 =  document.getElementById("stars_")
     var element2 =  document.getElementById("stars1_")
     var element3 =  document.getElementById("stars2_")

 if (valor <3) { 


     element1.classList.remove("stars");

     element2.classList.remove("stars1");
     
     element3.classList.remove("stars2");
 } else if (valor === 1 ) { 


     element1.classList.remove("stars");

     element2.classList.remove("stars1");

     element3.classList.remove("stars2");
 } else if (valor > 8 ) { 

     var _element1 =  document.getElementById("stars_")
     _element1.classList.add("stars");
     var _element2 =  document.getElementById("stars1_")
     _element2.classList.add("stars1");
     var _element3 =  document.getElementById("stars2_")
     _element3.classList.add("stars2");


 }





}

