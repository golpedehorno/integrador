var nombre= prompt("¿Cuál es tu nombre?")
alert("Bienvenido a Aranjuez "+nombre+ "!")


//BOTON VER PRODUCTOS
var productos=[" Panes"," Facturas"," Criollos"," Cafés"," Licuados"," Tostados"," Tortas"," Tartas"," Menues","Y mucho más..."];
        
        function ver(){

            for(i=0;i<productos.length;i++){
                //alert("Nuestros productos son: " + productos[i]+ "...");

                var elemento = document.createElement("li");
                var lista= document.createTextNode(productos[i])
                var referencia = document.createAttribute("href");
                referencia.value= "https://www.lipsum.com"
                elemento.appendChild(lista);
                
                var listaCreada = document.getElementById("lista");
                listaCreada.appendChild(elemento);
            }
         
        }


//ES DE CORDOBA?
 var cordobes= document.getElementById("cordobes")
 var resultado= prompt("Indicá 1 si sos de la ciudad de Cordoba o 2 si sos de otro lugar")

    if(resultado==1){
        cordobes.innerHTML= "<b>" + nombre + ": ya que sos de Córdoba tenés un 10% de descuento para que nos visites, escribinos y reservá tu mesa! </b>";
    }
    else if(resultado==2){
        cordobes.innerHTML= nombre+ ": aunque no vivas en Córdoba, igual podes consultarnos para tus vacaciones o algun evento en particular. Te encantará conocernos!";
    }
    else{
        alert("No es un valor valido")
        
    }

  //ENVIAR MENSAJE
   
//   form.addEventListener("submit", function(enviar){
//     alert("Su solicitud fue enviada con éxito, a la brevedad nos comunicaremos. Muchas gracias!")
   
// })
  
 
//COLOR DE ROSA
var body= document.getElementById("body")
function vivir(){

    body.style.background="pink"

}

//VALIDACION FORMULARIO

var nombre = document.getElementById("nombre")
var telefono = document.getElementById("telefono")
 
// form.addEventListener("submit", function(event){
//     alert("Su solicitud fue enviada con éxito, a la brevedad nos comunicaremos. Muchas gracias!")
   
// })

function validarDatos(){
    nombre.addEventListener("input",validarNombre)
    telefono.addEventListener("input",validarTelefono)
    
    validarNombre()
    validarTelefono()
}

function validarNombre(){

    if(nombre.value==""){
        nombre.setCustomValidity("Ingresá tu nombre")
        
    }else{
      if(isNaN(nombre.value)){
         if(nombre.value.length<4){
          nombre.setCustomValidity("Poné al menos cuatro letras a tu nombre...")
          nombre.style.background="rgb(245, 81, 81)"
         } else{
          nombre.setCustomValidity("")
          nombre.style.background=""
          }
       }else{
        nombre.setCustomValidity("Ingresá letras")}    
    }
      
  }

  

function validarTelefono(){
    if(telefono.value.length==10){
        telefono.setCustomValidity("")
    } else{
        telefono.setCustomValidity("Deben ser 10 digitos. Quitar el cero de la caracteristica y el 15 del numero del celular. Ej: 3515555555")
    }
}


window.addEventListener("load", validarDatos)

//PARA VER MAS INFO
var verMasInfo= document.getElementById("verMasInfo")
var masInfo= document.getElementById("masTexto")
var verMenosInfo=document.getElementById("verMenosInfo")

function verMas(){
masInfo.style.display= "block"
verMasInfo.style.display="none"
verMenosInfo.style.display="block"
}

function verMenos(){
    masInfo.style.display= "none"
    verMasInfo.style.display="block"
    verMenosInfo.style.display="none"
    }

//AMPLIAR MAPA

var google=document.getElementById("mapa")
var contacto=document.getElementById("contacto")

function ampliarDiv(div){
div.style.width="800px"
}

function disminuirDiv(div){
    div.style.width="300px"
}


