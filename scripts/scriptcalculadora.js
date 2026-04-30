let btn=document.getElementById("btn_calcular")
let resul=document.getElementById("resultado")
let historial=document.getElementById("con_hist")
let numerouno=document.getElementById("numero1")
let numerodos=document.getElementById("numero2")
let opcion=document.getElementById("operacion")
let limpiarcajas=document.getElementById("limpiar")
function calcular(){
    
    let error=false

    
    let resultadof=0

    if(numerouno.value=="" || numerodos.value==""){
        alert ("Digita los dos Números")
        return 
    }  
   
    else{
        let num1=parseFloat(numerouno.value)
        let num2=parseFloat(numerodos.value)

        if (opcion.value=="+"){
            resultadof=num1+num2
            resul.innerText=resultadof
            
        }
        else if (opcion.value=="-"){
            resultadof=num1-num2
            resul.innerText=resultadof
        }
        else if (opcion.value=="*"){
            resultadof=num1*num2
            resul.innerText=resultadof
        }
        else if (opcion.value=="/"){
            if (num2==0){
                error=true
                resul.innerText="Error"
                alert("No esta definida la division entre cero en los numeros reales")
            }
            else{
                resultadof=num1/num2
                resul.innerText=resultadof
            }
        }
    let aux=document.createElement("div")
    
    let n1=document.createElement("p") 
    n1.textContent=num1
    
    let n2=document.createElement("p")
    n2.textContent=num2

    let op=document.createElement("p")
    op.textContent=opcion.value
    let r=document.createElement("p")
    if (error==false){
    
        r.textContent=resultadof
    }
    else{

        r.textContent="Error"
    }
    
    let igual=document.createElement("p")
    igual.textContent="="
    aux.appendChild(n1)
    aux.appendChild(op)
    aux.appendChild(n2)
    aux.appendChild(igual)
    aux.appendChild(r)

    aux.className="con_histaux"

    historial.appendChild(aux)
  
    } 
    
   
}
btn.addEventListener("click", calcular)
function limpiar(){
    resul.textContent="0"
    numerouno.value=""
    numerodos.value=""

}limpiarcajas.addEventListener("click",limpiar)