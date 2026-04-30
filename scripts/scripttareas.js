const tarea=document.getElementById("tarea")
const btn=document.getElementById("btn-agregar")
const caja=document.getElementById("caja")
let tareas=document.getElementById("total")
let completadas=document.getElementById("completadas")



let contadorTareas=0
let contadorCompletadas=0
function agregarTarea(){
    
    let tarea_nueva=tarea.value

    if (tarea_nueva.trim()==""){
        alert("Debes Ingresar Tarea")    
    }
    else{
        let p=document.createElement("p")
        p.textContent=tarea_nueva
        let check=document.createElement("input")
        check.type="checkbox"
        let btn_eliminar=document.createElement("button")
        btn_eliminar.textContent="X"
        btn_eliminar.classList.add("advertencia")
        let hijo=document.createElement("div")
        hijo.appendChild(check)
        hijo.appendChild(p)
        hijo.appendChild(btn_eliminar)
        hijo.classList.add("hija")
        caja.appendChild(hijo)
        contadorTareas=contadorTareas+1
        tareas.textContent=contadorTareas+" Total"
        // borrar la caja de tarea al agregar tarea
        tarea.value=""

        function borrar(){
        
            hijo.remove()
            contadorTareas=contadorTareas-1
            tareas.textContent=contadorTareas+" Total"
            if(check.checked==true){
                contadorCompletadas=contadorCompletadas-1
                completadas.textContent=contadorCompletadas+" Completadas"
            }
                
         }btn_eliminar.addEventListener("click", borrar)

         function realizadas(){
            if (check.checked==true){
                contadorCompletadas=contadorCompletadas+1
                
            }
            else{
                contadorCompletadas=contadorCompletadas-1
                
            }
            completadas.textContent=contadorCompletadas+" Completadas"
         
         }check.addEventListener("click", realizadas)
    }
   
}btn.addEventListener("click", agregarTarea)