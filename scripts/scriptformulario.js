let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let btn=document.getElementById("boton")

function enviar(){
     let nom=nombre.value
     let ape=apellido.value
     if(nom.trim()=="" || ape.trim()=="") {
        alert("Debes Ingresar Todos los Datos")
     }
     else{
        let usuario= "Tu nombre es: "+ nom+ " "+ape+" , Bienvenido."
        alert(usuario)
        nombre.value=""
        apellido.value=""
     }

}btn.addEventListener("click", enviar)