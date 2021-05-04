var nombre= prompt("Cual es tu nombre?")
alert("Bienvenido a Aranjez "+nombre+ " !")


//BOTON VER PRODUCTOS
var productos=[" Panes"," Facturas"," Criollos"," Cafés"," Licuados"," Tostados"," Tortas"," Tartas"," Menues"];
        
        function ver(){

            for(i=0;i<productos.length;i++){
                alert("Nuestros productos son: " + productos[i]+ "...");
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
   
  function mensajeEnviado(){
      alert("Mensaje enviado, nos comunicaremos a la brevedad. Gracias!")
  }
  
 
