var expande = false;
var lista = document.getElementsByClassName("lista")[0];
function listar(){
    if(expande == false){
        lista.style.display = "none";
        expande = true;
    }else{
        lista.style.display = "block";
        expande = false;
    }
}
