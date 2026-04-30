const peso=document.getElementById("peso")
const altura=document.getElementById("altura")
const resultado=document.getElementById("resultado")
const desc= document.getElementById("descripcion")
const imagen=document.getElementById("img")
function icm(){
    if(peso.value=="" || altura.value==""){
        alert("Debes Ingresar todos los valores")
        return
    }
    else{
        let resul=0
        let peso1=parseFloat(peso.value)
        let altura1=parseFloat(altura.value)
        if (altura1==0 || isNaN(peso1)|| isNaN(altura1)){
          alert("Debes Ingresar todos los valores")
          return
        }
        resul=(peso1)/(altura1*altura1)
        
     

         if(resul <=16){
             imagen.src="Img/desnutricion.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Desnutrición Severa"
             desc.style.color='red'
     
          }
          else if(resul>16.1 && resul<=18.4){
             imagen.src="Img/desnutricion leve.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Desnutrición Moderada"
             desc.style.color='orangered'
          }
          else if(resul>18.5 && resul<=22){
             imagen.src="Img/bajodepeso.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Bajo de Peso"
             desc.style.color='orange'
         }
         else if(resul>22.1 && resul<=24.9){
             imagen.src="Img/pesonormal.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Peso Normal"
             desc.style.color='green'
          }
          else if(resul>25 && resul<=29.9){
             imagen.src="Img/sobrepeso.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Sobrepeso"
             desc.style.color='orenge'
          }
          else if(resul>30 && resul<=34.9){
             imagen.src="Img/obe1.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo I "
             desc.style.color='orengered'
          }
          else if(resul>35 && resul<=39.9){
             imagen.src="Img/obs2.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo II "
             desc.style.color='darkred'
          }
          else if(resul>40){
             imagen.src="Img/obs3.jpg"
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo III "
             desc.style.color='red'
          }
    }
    
}

    
