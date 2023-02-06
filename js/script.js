
document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side")
var btn_open = document.getElementById("btn_open")
var body = document.getElementById("body")

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

if (window.innerWidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

window.addEventListener("resize", function(){
    if (window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }
})

let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let cantidad = document.getElementById("cantidad");
let diametroSeleccionado = document.getElementById("diametro");
let modeloSeleccionado = document.getElementById("modelo")

//let cantidad = document.getElementById("descripcion");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;
    //cantidad.innerHTML = item.getElementsByTagName("cantidad")[0].innerHTML;
    //diametroSeleccionado.innerHTML = item.getElementsByTagName("diametro")[0].innerHTML;
    
    
//    cantidad.innerHTML = "Cantidad";
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    seleccion.reset();
}


$(document).ready(function(){
    $(".editableBox").change(function(){
        $(".g").val($(".editableBox option:selected").html())
    });
});

function enviar(){
    
    var cantidad = document.getElementById("cantidad").value;
    var diametro = document.getElementById("diametros").value;
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;
    var g = document.getElementById("g").value;
    document.getElementById("total").value = cantidad + " " + "E  " + diametro + " " + b + "x" + h + " " + g;
}