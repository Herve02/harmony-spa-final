var menus = document.getElementById("menus");
menus.style.right = "-100%";
var menubar = document.querySelector("#menubar");
menubar.onclick = function(){
    if(menus.style.right == "-100%"){
        menus.style.right = "0";
    }
    else{
        menus.style.right = "-100%";
    }
}