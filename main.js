
window.onload= 
function ajedrez () {

    // botones
   var turno_blanco= document.getElementById("turno_blanco")
   var turno_negro= document.getElementById("turno_negro")
   var modo=document.getElementById("modo")
   var edicion=document.getElementById("edicion");
   var juego=document.getElementById("juego");
   var caja=document.getElementById("caja");
   var caja_2=document.getElementById("caja_2");
   var cerrar=document.getElementById("cerrar");
   var instrucciones=document.getElementById("instrucciones");
   var controles=document.getElementById("controles");
   edicion.addEventListener("click", editar);
   juego.addEventListener("click", posicion);
   modo.setAttribute("edicion", "true");
   // Instrucciones
   controles.addEventListener("click", instruir);
   function instruir(){
       instrucciones.style.display="block";
       contenedor.style.opacity="0.3";
       for(i=0; i<piezas.length; i++){
        piezas[i].removeEventListener('click', tocar);
        
    }
   }
   cerrar.addEventListener("click", out);
   function out(){
    piezas[i].addEventListener('click', tocar);
    contenedor.style.opacity="1";
    instrucciones.style.display="none";
    if (turn==true){
        turno_blancas();
    }
    if (turn==false){
        turno_negras();
    }
   }
   

   //
    // Piezas en el tablero
    var piezas=document.querySelectorAll(".pieza")
    var alfil=piezas[0];
    var torre=piezas[1];
    var dama=piezas[2];
    var rey=piezas[3];
    var caballo=piezas[4];
    var peon=piezas[5];
    var rey_negro=piezas[6];
    var dama_negra=piezas[7];
    var torre_negra=piezas[8];
    var alfil_negro=piezas[9];
    var caballo_negro=piezas[10];
    var peon_negro=piezas[11];
    var dama_coronada_blanca=piezas[12];
    var dama_coronada_negra=piezas [13];
    //var dama_coronada=piezas[8];
    //casillas
    var casillas= document.querySelectorAll(".casilla");
    var contenedor=document.getElementById("contengo");
    // Variables libres para manipular
    var turn=true;
    var pieza_movida="";
    var casilla_anterior="";
    var casilla_destino_y="";
    var casilla_destino_x=""
    var pieza_movida_x="";
    var pieza_movida_y="";
    var casilla_generica_x=""
    var casilla_generica_y=""
    var casilla_buscada="";

   
 
   

 


    // Atributo inicial de las piezas en almacenamiento
    for(i=0; i<piezas.length; i++){
        piezas[i].setAttribute('almacenamiento', 'true');
    }
    // Atributo de color
    for(i=0; i<6; i++){
        piezas[i].setAttribute('blanca', 'true');
    }
    for(i=6; i<12; i++){
        piezas[i].setAttribute('negra', 'true');
    }
    // ATRIBUTO TIPO DE PIEZA
    // Atributo torre
    torre.setAttribute("torre", "true");
    torre_negra.setAttribute("torre", "true");
    // Atributo caballo
    caballo.setAttribute("caballo", "true");
    caballo_negro.setAttribute("caballo", "true");
    // Atributo rey
    rey.setAttribute("rey", "true");
    rey_negro.setAttribute("rey", "true");
    // Atributo alfil
    alfil.setAttribute("alfil", "true");
    alfil_negro.setAttribute("alfil", "true");
    // Atributo Dama
    dama.setAttribute("dama", "true");
    dama_negra.setAttribute("dama", "true");
    dama_coronada_blanca.setAttribute("dama", "true");
    dama_coronada_blanca.setAttribute("blanca", "true");
    dama_coronada_blanca.setAttribute("tablero", "true")
    dama_coronada_blanca.setAttribute("coronada", "true");
    dama_coronada_negra.setAttribute("dama", "true");
    dama_coronada_negra.setAttribute("negra", "true");
    dama_coronada_negra.setAttribute("tablero", "true");
    dama_coronada_negra.setAttribute("coronada", "true");
    // Atributo peon
    peon.setAttribute("peon", "true");
    peon_negro.setAttribute("peon", "true");


                    // EVENTOS GENERALES
turno_blanco.addEventListener("click", turno_blancas)
turno_negro.addEventListener("click", turno_negras)

// EVENTO DE SELECCION DE LAS PIEZA A MOVER

   for (i=0; i<piezas.length; i++){
    piezas[i].addEventListener("click", tocar)
         }  


//EVENTO DE MOVER LA PIEZA A CASILLA DESTINO
/*
   for (i=0; i<casillas.length; i++){
       casillas[i].addEventListener("click", mover);
    }
*/
// EVENTO PARA ESTAR EN MODO EDICION 
for (i=0; i<casillas.length; i++){
    casillas[i].addEventListener("click", colocar);
}
// EVENTO DE REGRESAR A LA CAJA DE ALMACENAMIENTO

for (i=0; i<piezas.length; i++){
    piezas[i].addEventListener("contextmenu", volver);
}

function volver(){
   // this==pieza_regresada;
   if(modo.getAttribute("edicion")=="true")
    regresar(this);
}

// FUNCIONES DE MODO
function editar(){
    turno_blanco.addEventListener("click", turno_blancas)
turno_negro.addEventListener("click", turno_negras)
    caja.classList.remove("opacidad");
    caja_2.classList.remove("opacidad");
    this.classList.add("turno");
    juego.classList.remove("turno");
     modo.setAttribute("edicion", "true");
     for (i=0; i<piezas.length; i++){
      piezas[i].addEventListener("click", tocar)
      piezas[i].addEventListener("contextmenu", regresar)
           }  
           limpieza()
           pieza_movida="";   
           for (i=0; i<casillas.length; i++){
            casillas[i].addEventListener("click", colocar);
        }
        for (i=0; i<casillas.length; i++){
            casillas[i].removeEventListener("click", mover);
         }
 }
 function posicion (){
    turno_blanco.removeEventListener("click", turno_blancas)
    turno_negro.removeEventListener("click", turno_negras)
    caja.classList.add("opacidad");
    caja_2.classList.add("opacidad");
  this.classList.add("turno");
  edicion.classList.remove("turno");
     modo.removeAttribute("edicion");
     for (i=0; i<piezas.length; i++){
      piezas[i].removeEventListener("contextmenu", regresar)
           } 
           for (i=0; i<casillas.length; i++){
            casillas[i].removeEventListener("click", colocar);
        }
        for (i=0; i<casillas.length; i++){
            casillas[i].addEventListener("click", mover);
         }
         
         if (turn==true){
         turno_blancas();
         }      
         if (turn==false){
            turno_negras();
            }     
    document.getElementById("duelo").play();
  
 }
                                 

        // FUNCIONES RELACIONADAS A LAS COORDENADAS

     // Esta función es para cuando se selecciona la casilla al mover   

   function coordenadas_casilla(casillero){
    casilla_destino_x=casillero.getBoundingClientRect().left-16;
    casilla_destino_y=casillero.getBoundingClientRect().top-113;
       
    }
    // esta función es ideal para meter un for, y se usa para evitar pasar por casillas ocupadas
    function coordenadas_genericas(casillero){
        casilla_generica_x=casillero.getBoundingClientRect().left-16;
        casilla_generica_y=casillero.getBoundingClientRect().top-113;
           
        }
    // PARA CASILLAS OCUPADAS
    function coordenadas_ocupadas(casillero){
        casilla_ocupada_x=casillero.getBoundingClientRect().left-16;
        casilla_ocupada_y=casillero.getBoundingClientRect().top-113;
           
        }
    // Esta función da las coordenadas de la pieza con la que se está jugando
    function coordenadas_pieza(pieza){
            coordenadas_pieza_movida=pieza.getBoundingClientRect();
            pieza_movida_x=(coordenadas_pieza_movida.left)-16;
            pieza_movida_y=(coordenadas_pieza_movida.top)-113;


        }
        function coordenadas_ficha(ficha){
            coordenadas_pieza(ficha);
            for (i=0; i<casillas.length; i++){
                if ((casillas[i].getBoundingClientRect().left-16==pieza_movida_x)
            &&(casillas[i].getBoundingClientRect().top-113==pieza_movida_y)) 
            {
                casilla_buscada=casillas[i];
            }

            }


        }
        function casilla_previa(){
            for (i=0; i<casillas.length; i++){
            if ((casillas[i].getBoundingClientRect().left-16==pieza_movida_x)
            &&(casillas[i].getBoundingClientRect().top-113==pieza_movida_y)) 
            // Esto es importante para removerle el atributo de "ocupada" al moverse    
            casilla_anterior= casillas[i];  
            }
        }
function capturar(){
    coordenadas_ficha(this);
    
    
    if (
        (pieza_movida!="")&&(casilla_buscada.getAttribute("posible")=="true")
    )
    { 
    coordenadas_ocupadas(casilla_buscada);
    console.log(casilla_buscada);
    regresar(this);
   pieza_movida.style.marginLeft=casilla_ocupada_x+"px";
   pieza_movida.style.marginTop=casilla_ocupada_y+"px";
   document.getElementById("captura").play();
    casilla_anterior.removeAttribute("ocupada");
    casilla_buscada.setAttribute("ocupada", "true");
  limpieza();
  if (pieza_movida.getAttribute("blanca")=="true")
   {  casilla_buscada.removeAttribute("ocupada_negra");
     casilla_buscada.setAttribute("ocupada_blanca", "true");
   casilla_anterior.removeAttribute("ocupada_blanca");
       turno_negras() 
}
   if (pieza_movida.getAttribute("negra")=="true")
   {
    casilla_anterior.removeAttribute("ocupada_negra");
   casilla_buscada.removeAttribute("ocupada_blanca");  
   casilla_buscada.setAttribute("ocupada_negra", "true");
   turno_blancas()
 }
}

} 
        
    // FUNCIONES DE TURNO
    function turno_blancas (){
        turn=true;
        turno_negro.classList.add("turno");
        turno_blanco.classList.remove("turno");

    //    limpieza();
           if(modo.getAttribute("edicion")!="true")
          
           {
                dama_coronada_blanca.addEventListener("click", tocar);
                dama_coronada_negra.removeEventListener("click", tocar);
                dama_coronada_negra.addEventListener("click", capturar);
            for(i=0; i<6; i++){
                piezas[i].addEventListener("click", tocar)
            }
            
            for(i=6; i<12; i++){
                    piezas[i].removeEventListener("click", tocar)
                }
                for(i=6; i<12; i++){
                    piezas[i].addEventListener("click", capturar)
                }
            }
         
    }

    function turno_negras(){
        turno_blanco.classList.add("turno");
        turno_negro.classList.remove("turno");
        turn=false;
      //     limpieza();
   
           if(modo.getAttribute("edicion")!="true")
           {
           dama_coronada_blanca.removeEventListener("click", tocar);
           dama_coronada_negra.addEventListener("click", tocar);
           dama_coronada_blanca.addEventListener("click", capturar);
           {
        for(i=6; i<12; i++){
            piezas[i].addEventListener("click", tocar)
        }  
        for(i=0; i<6; i++){
            piezas[i].removeEventListener("click", tocar)
        }
        for(i=0; i<6; i++){
            piezas[i].addEventListener("click", capturar)
        }
    }
}
 
}
    function limpieza(){
        for(i=0; i<casillas.length; i++){
            casillas[i].removeAttribute("posible");
            casillas[i].removeAttribute("imposible");
            casillas[i].classList.remove("movida");
        }
        }
function bloquear(){
// Caso pieza blanca
    if(pieza_movida.getAttribute('blanca')=='true')  
    {       
    for(i=0; i<casillas.length; i++){
    
     if (casillas[i].getAttribute("ocupada_blanca")=="true")
    { 
                  casillas[i].setAttribute('imposible','true');
    }
}
}
// Caso Pieza negra
if(pieza_movida.getAttribute('negra')=='true')  
{       
for(i=0; i<casillas.length; i++){

 if (casillas[i].getAttribute("ocupada_negra")=="true")
{ 
              casillas[i].setAttribute('imposible','true');
}
}
}

} 

// FUNCIONES DE MOVILIDAD DE PIEZAS

function superposicion_vertical(){
    for (n=0; n<casillas.length; n++){
        coordenadas_ocupadas(casillas[n]);
        coordenadas_pieza(pieza_movida);
       
    if (       
    ((casilla_ocupada_x==pieza_movida_x))
                 &&
        (casillas[n].getAttribute("ocupada")=="true")
                    &&  
        (casillas[n] != casilla_anterior)
    )
         { 
             // EVITAR SUPERPOSICIÓN VERTICAL

             
                // SE HACE UN NUEVO FOR PARA CARGAR TODAS LAS CASILLAS ALINEADAS
                //CON LA TORRE Y UNA PIEZA OCUPADA
            for (i=0; i<casillas.length; i++){
                coordenadas_genericas(casillas[i]);
                // CONDICIÓN PARA QUE UNA CASILLA QUEDE "iNTERPUESTA"
                if(
                (casilla_ocupada_x==casilla_generica_x)
                &&
                (Math.sign(casilla_ocupada_y-pieza_movida_y)
                ==
                Math.sign(casilla_generica_y-casilla_ocupada_y))
                )            
                   { 
                    // SE AGREGA ESTE ATRIBUTO A LAS CASILLAS BLOQUEADAS POR OTRA PIEZA
                    casillas[i].setAttribute('imposible','true');
                   }
                
            }
            
         }
        // EVITAR SUPERPOSICIÓN HORIZONTAL
        if (       
            ((casilla_ocupada_y==pieza_movida_y))
                         &&
                (casillas[n].getAttribute("ocupada")=="true")
                            &&  
                (casillas[n] != casilla_anterior)
            )
                 { 
                 
              
                    for (i=0; i<casillas.length; i++){
                        coordenadas_genericas(casillas[i]);
                        if(
                        (casilla_ocupada_y==casilla_generica_y)
                        &&
                        (Math.sign(casilla_ocupada_x-pieza_movida_x)
                        ==
                        Math.sign(casilla_generica_x-casilla_ocupada_x))
                        )

                        
                                // Excluir a la pieza del mismo color como casilla destino
                       
            {
                              casillas[i].setAttribute('imposible','true');
            }
            
                    
                    
                 }

        
                }
            }
        }
function superposicion_diagonal(){
    
    for (n=0; n<casillas.length; n++){
        coordenadas_ocupadas(casillas[n]);
        coordenadas_pieza(pieza_movida);
        // SE AVERIGUA SI HAY CASILLAS QUE OCUPAN POSIBLES CASILLAS DESTINO 
        if (
            
 ((Math.abs(casilla_ocupada_x-pieza_movida_x))
 ==
(Math.abs(casilla_ocupada_y-pieza_movida_y)))
&&
(casillas[n].getAttribute("ocupada")=="true")
&&  
   // SE EXCLUYE AL PROPIO ALFILO COMO PIEZA OCUPADA
(casillas[n] != casilla_anterior)
)
{
     
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);
        if(
            // esta primera condición es para seleccionar sólo las casillas en diagonal, 
            // y hacerlo extensible a la dama
            (Math.abs(casilla_generica_x-pieza_movida_x)==Math.abs(casilla_generica_y-pieza_movida_y))
            &&
            (Math.sign(casilla_ocupada_y-pieza_movida_y)
        ==
        Math.sign(casilla_generica_y- casilla_ocupada_y))
&&
         (Math.sign(casilla_ocupada_x-pieza_movida_x)
    ==
        Math.sign(casilla_generica_x-casilla_ocupada_x))
        )

        {
            
            casillas[i].setAttribute('imposible','true');
        }



    } // cierre segundo for
} // cierre del if
    }// Acá se cierra el for de bloqueo

}
function bloqueo_peon_blanco(){
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);


if (    
((pieza_movida_y-casilla_generica_y)==80) &&
    (pieza_movida_x==casilla_generica_x)&&
    (casillas[i].getAttribute("ocupada")=="true") 
)

            {
                for (n=0; n<casillas.length; n++){
                    coordenadas_genericas(casillas[n]);

if(pieza_movida_x==casilla_generica_x){
    casillas[n].setAttribute('imposible', 'true');
}


                }
            
            }

if (    
  (Math.abs(pieza_movida_y-casilla_generica_y)==160) &&
    (pieza_movida_x==casilla_generica_x)&&
     (casillas[i].getAttribute("ocupada")=="true") 
                )
                
             {
            casillas[i].setAttribute('imposible', 'true');
                            
            }
        }

}
function bloqueo_peon_negro(){
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);


if (    
((pieza_movida_y-casilla_generica_y)==-80) &&
    (pieza_movida_x==casilla_generica_x)&&
    (casillas[i].getAttribute("ocupada")=="true") 
)

            {
                for (n=0; n<casillas.length; n++){
                    coordenadas_genericas(casillas[n]);

if(pieza_movida_x==casilla_generica_x){
    casillas[n].setAttribute('imposible', 'true');
}


                }
            
            }

if (    
  ((pieza_movida_y-casilla_generica_y)==-160) &&
    (pieza_movida_x==casilla_generica_x)&&
     (casillas[i].getAttribute("ocupada")=="true") 
                )
                
             {
            casillas[i].setAttribute('imposible', 'true');
                            
            }
        }

}
function movimiento_torre(){
   // bloquear(pieza_movida);
    for (i=0; i<casillas.length; i++){
        coordenadas_pieza(pieza_movida);
     
        coordenadas_genericas(casillas[i]);
    if(
        ((casilla_generica_x==pieza_movida_x)||(casilla_generica_y==pieza_movida_y))
      && (casillas[i]!=casilla_anterior)
     &&
     (casillas[i].getAttribute("imposible")!="true")
     )
{
    casillas[i].classList.add('movida');
    casillas[i].setAttribute('posible', 'true');
 
    }
}

}
function movimiento_rey(){
    bloquear(pieza_movida);
        for (i=0; i<casillas.length; i++){
            coordenadas_genericas(casillas[i]);
        if (
        (((Math.abs(casilla_generica_x-pieza_movida_x)<81)) && 
        (Math.abs(casilla_generica_y-pieza_movida_y)<81))&&
        (casillas[i] != casilla_anterior) &&
        (casillas[i].getAttribute("imposible")!="true")
        )
         {
            
                casillas[i].classList.add('movida');
                casillas[i].setAttribute('posible', 'true');
                }  
         }
}
function movimiento_caballo(){
    bloquear(pieza_movida);
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);
        coordenadas_pieza(pieza_movida);
    if (
    ((((Math.abs(casilla_generica_x-pieza_movida_x)==160)) && 
    (Math.abs(casilla_generica_y-pieza_movida_y)==80))  
    ||
    (((Math.abs(casilla_generica_y-pieza_movida_y)==160))&& 
    (Math.abs(casilla_generica_x-pieza_movida_x)==80)))
    &&
    (casillas[i].getAttribute("imposible")!="true")

    )
     {
            casillas[i].classList.add('movida');
            casillas[i].setAttribute('posible', 'true');
            }  
     }
}
function movimiento_alfil(){
    bloquear(pieza_movida);
    for (i=0; i<casillas.length; i++) {
        coordenadas_pieza(pieza_movida);
        coordenadas_genericas(casillas[i]);
    if(
        (Math.abs(casilla_generica_x-pieza_movida_x)==
        Math.abs(casilla_generica_y-pieza_movida_y))
                                 && 
                 (casillas[i]!=casilla_anterior)
                               &&
                (casillas[i].getAttribute('imposible')!='true')
     )
    {
    casillas[i].classList.add('movida');
    casillas[i].setAttribute('posible', 'true');
    }
    } // aca se cierra el for
    
    
}
function movimiento_dama(){
    bloquear(pieza_movida);
    for (i=0; i<casillas.length; i++){
        coordenadas_pieza(pieza_movida);
        coordenadas_genericas(casillas[i]);
    if(
        ((casilla_generica_x==pieza_movida_x)||(casilla_generica_y==pieza_movida_y)
        ||(  (Math.abs(casilla_generica_x-pieza_movida_x)==
        Math.abs(casilla_generica_y-pieza_movida_y))))
      && 
     (casillas[i]!=casilla_anterior)
     &&
     (casillas[i].getAttribute("imposible")!="true")
     )
{
    casillas[i].classList.add('movida');
    casillas[i].setAttribute('posible', 'true');
 
    }
}
}
function coronacion(casillero){
     
    coordenadas_genericas(casillero);
    
    if(
        (pieza_movida.getAttribute("peon")=="true")&&
    ((casilla_generica_y==0)||(casilla_generica_y==400))
    )
  
    
    {   
        if (pieza_movida.getAttribute("blanca")=="true")
        {
           regresar(peon);
            pieza_movida=dama_coronada_blanca;
            dama_coronada_blanca.style.display="block"
            dama_coronada_blanca.style.marginLeft=casilla_generica_x+"px";
            dama_coronada_blanca.style.marginTop=casilla_generica_y+"px";

        }
        if (pieza_movida.getAttribute("negra")=="true")
        {
            regresar(peon_negro);
            pieza_movida=dama_coronada_negra;
            dama_coronada_negra.style.display="block"
            dama_coronada_negra.style.marginLeft=casilla_generica_x+"px";
            dama_coronada_negra.style.marginTop=casilla_generica_y+"px";
        }
    }
    
}
function movimiento_peon_blanco(){
   // captura_peon_blanco(pieza_movida);
      bloqueo_peon_blanco(pieza_movida);
      captura_peon_blanco(pieza_movida);
        for (i=0; i<casillas.length; i++){
            coordenadas_genericas(casillas[i]);
  
if (    
 (pieza_movida_y-casilla_generica_y==80) &&
        (pieza_movida_x==casilla_generica_x)&&
        (casillas[i].getAttribute("imposible")!="true") 
)
    
                {
                casillas[i].classList.add('movida');
                casillas[i].setAttribute('posible', 'true');
                
                }
        if (
            (pieza_movida_y==320)
            &&(pieza_movida_y-casilla_generica_y==160) &&
           (pieza_movida_x==casilla_generica_x)&&
           (casillas[i].getAttribute("imposible")!="true") 
            )
        {
            casillas[i].classList.add('movida');
            casillas[i].setAttribute('posible', 'true');
        }
      
    }
    
}

function movimiento_peon_negro(){
 bloqueo_peon_negro(peon_negro);
 captura_peon_negro(peon_negro);
    {
        for (i=0; i<casillas.length; i++){
            coordenadas_genericas(casillas[i]);
        if (
        (pieza_movida_y-casilla_generica_y==-80) &&
        (pieza_movida_x==casilla_generica_x)&&
        (casillas[i].getAttribute("imposible")!="true") 
        )
         {
            
                casillas[i].classList.add('movida');
                casillas[i].setAttribute('posible', 'true');
                }  
        if (
                    (pieza_movida_y==80)
                    &&(pieza_movida_y-casilla_generica_y==-160) &&
                   (pieza_movida_x==casilla_generica_x)&&
                   (casillas[i].getAttribute("imposible")!="true") 
                    )
                {
                    casillas[i].classList.add('movida');
                    casillas[i].setAttribute('posible', 'true');
                }
         }
    
        }
}
function captura_peon_blanco(){
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);
        if (casillas[i].getAttribute("ocupada_negra")=="true")
{

if (    
(pieza_movida_y-casilla_generica_y==80) &&
 ((pieza_movida_x-casilla_generica_x==80)||
 (pieza_movida_x-casilla_generica_x==-80))   
)

            {
            casillas[i].classList.add('movida');
            casillas[i].setAttribute('posible', 'true');  
            }
  

}
}
}
function captura_peon_negro(){
    for (i=0; i<casillas.length; i++){
        coordenadas_genericas(casillas[i]);
        if (casillas[i].getAttribute("ocupada_blanca")=="true")
{

if (    
(pieza_movida_y-casilla_generica_y==-80) &&
 ((pieza_movida_x-casilla_generica_x==-80)||
 (pieza_movida_x-casilla_generica_x==80))   
)

            {
            casillas[i].classList.add('movida');
            casillas[i].setAttribute('posible', 'true');  
            }
  

}
}
}
    // FUNCIONES DE MOVIMIENTO


    // Esta función es para volver a la caja de almacenamiento
    function regresar(pieza){
            
        pieza.removeAttribute("tablero");
         
         pieza.setAttribute('almacenamiento', 'true');
         coordenadas_ficha(pieza);
         console.log(casilla_buscada);
         casilla_buscada.removeAttribute('ocupada'); 
         casilla_buscada.removeAttribute('ocupada_blanca');
          casilla_buscada.removeAttribute('ocupada_negra'); 
    
         
         if(pieza==rey) {
             pieza.style.marginLeft="0px";
             rey.style.marginTop="0px"
         
         }
         if(pieza==dama) {
             pieza.style.marginLeft="0px";
             dama.style.marginTop="80px"                
         }
         if(pieza==alfil) {
             pieza.style.marginLeft="0px";
             alfil.style.marginTop="240px"
         }
         if(pieza==caballo) {
             pieza.style.marginLeft="0px";
             caballo.style.marginTop="320px"
         }
         if(pieza==torre) {
             pieza.style.marginLeft="0px";
             torre.style.marginTop="160px"
    
         }
         if(pieza==peon) {
             pieza.style.marginLeft="0px";
             peon.style.marginTop="400px"
         }
         if(pieza==rey_negro) {
             pieza.style.marginLeft="1220px";
             rey_negro.style.marginTop="0px"
         }
         if(pieza==dama_negra) {
             pieza.style.marginLeft="1220px";
             dama_negra.style.marginTop="80px"
         }
         if(pieza==alfil_negro) {
             pieza.style.marginLeft="1220px";
             alfil_negro.style.marginTop="240px"
    
         }
         if(pieza==caballo_negro) {
             pieza.style.marginLeft="1220px";
             caballo_negro.style.marginTop="320px"
    
         }
         if(pieza==torre_negra) {
             pieza.style.marginLeft="1220px";
             torre_negra.style.marginTop="160px"
         }
         if(pieza==peon_negro) {
             pieza.style.marginLeft="1220px";
             peon_negro.style.marginTop="400px"
         }
         if(pieza==dama_coronada_blanca) {
            pieza.style.display="none";
        }
        if(pieza==dama_coronada_negra) {
            pieza.style.display="none";
        }
         
         
     }
 // FUNCIONES DE CAPTURA


// Esta función se activa cuando se toca la pieza que se va a mover
    function tocar(){
        
        // seleccionamos la pieza
        pieza_movida=this;
        console.log(pieza_movida);
        // se cargan sus coordenadas
        coordenadas_pieza(pieza_movida);
      
      

        // se remueven clases y atributos, por si se tocaron dos piezas seguidas
        limpieza();
       
        // Con este for se identifica la casilla DESDE donde se mueve la pieza
        casilla_previa();

if (modo.getAttribute("edicion")!="true")  {
                // MOVIMIENTO GENERAL DE LA TORRE 
if ((pieza_movida.getAttribute("torre")=="true")&&(pieza_movida.getAttribute('tablero')=='true'))
        {
            bloquear(pieza_movida);
            superposicion_vertical(pieza_movida);
                movimiento_torre(pieza_movida);
    }
                 // MOVIMIENTO GENERAL DEL ALFIL
 if(
     (pieza_movida.getAttribute("alfil")=="true")&&
     (pieza_movida.getAttribute('tablero')=='true'))
               
{    
    superposicion_diagonal(pieza_movida);
    movimiento_alfil(pieza_movida);
} 
    

            // MOVIMIENTO DE LA DAMA

            if ((pieza_movida.getAttribute("dama")=="true")&&
            (pieza_movida.getAttribute('tablero')=='true'))
            {
 superposicion_diagonal(pieza_movida);
 superposicion_vertical(pieza_movida);
 movimiento_dama(pieza_movida);
       }


                    // CABALLLO
if((pieza_movida.getAttribute("caballo")=="true")&&
(pieza_movida.getAttribute('tablero')=='true'))
    {
        
         movimiento_caballo(pieza_movida);         
    }
    // REY 
    if((pieza_movida.getAttribute("rey")=="true")&&
    (pieza_movida.getAttribute('tablero')=='true'))
    
    {
        movimiento_rey(pieza_movida);
    
        }

        // PEON BLANCO
        if((pieza_movida==peon)&&(peon.getAttribute('tablero')=='true'))
        {
                movimiento_peon_blanco(peon);
        }
  // PEON NEGRO
  if((pieza_movida==peon_negro)&&(peon_negro.getAttribute('tablero')=='true'))
  {
          movimiento_peon_negro(peon_negro);
  }


        }          
                }
      


    // FUNCION DE MOVER LA PIEZA SELECCIONADA

    // función de transición 
    function mover(){
        jugar(this);  
       coordenadas_casilla(this);
       
       
    }
    function colocar(){
        desplazar(this);  
       coordenadas_casilla(this);
       
       
    }
    function desplazar(casilla){
        coordenadas_casilla(casilla);
        // ESTO ES EN CASO DE TOCAR LA CASILLA LUEGO DE TOCAR UNA PIEZA EN LA CAJA DE ALMACENAMIENTO
               if(
                   (pieza_movida!="") && 
             (modo.getAttribute("edicion")=="true")
             &&(pieza_movida.getAttribute("peon")!="true")
               )
               {
           
                   if (pieza_movida.getAttribute("negra")=="true") { 
                       casilla.setAttribute('ocupada_negra','true');  
                      }
                   if (pieza_movida.getAttribute("blanca")=="true") {
                      casilla.setAttribute('ocupada_blanca', 'true');
                      
               }
               pieza_movida.style.marginLeft=casilla_destino_x+"px";   
               pieza_movida.style.marginTop=casilla_destino_y+"px";
               pieza_movida.removeAttribute('almacenamiento');
               pieza_movida.setAttribute('tablero', 'true');
               casilla.setAttribute("ocupada", "true");
               if (casilla_anterior!=""){
                   casilla_anterior.removeAttribute("ocupada");
                   casilla_anterior.removeAttribute("ocupada_blanca");
                   casilla_anterior.removeAttribute("ocupada_negra");
                   console.log(casilla_anterior);
               }
   
           }
        
               
       // CASO DEL PEÓN 
       if (
           (pieza_movida!="")&&
           (pieza_movida.getAttribute("peon")=="true")
            && (casilla_destino_y<399)
            && (casilla_destino_y>0)
       )  
       {
        if (pieza_movida.getAttribute("negra")=="true") { 
            casilla.setAttribute('ocupada_negra','true');  
           }
        if (pieza_movida.getAttribute("blanca")=="true") {
           casilla.setAttribute('ocupada_blanca', 'true');
        }
               pieza_movida.style.marginLeft=casilla_destino_x+"px";   
               pieza_movida.style.marginTop=casilla_destino_y+"px";
               pieza_movida.removeAttribute('almacenamiento');
               pieza_movida.setAttribute('tablero', 'true');
               if (casilla_anterior!=""){
                casilla_anterior.removeAttribute("ocupada");
                casilla_anterior.removeAttribute("ocupada_blanca");
                casilla_anterior.removeAttribute("ocupada_negra");
            }
               casilla.setAttribute("ocupada", "true");          
       }
       pieza_movida="";
   }


    

//MOVIMIENTO ESPECÍFICO DE LA PIEZA SELECCIONADA A LA CASILLA DESTINO 
    function jugar(casilla){
        // Llamando a esta función se cargan las coordenadas x e y de la casilla clikeada
     coordenadas_casilla(casilla);
     // ESTO ES EN CASO DE TOCAR LA CASILLA LUEGO DE TOCAR UNA PIEZA EN LA CAJA DE ALMACENAMIENTO
    // ESTOS SON LOS MOVIMIENTOS EN EL TABLERO 
             
    if(
        (pieza_movida!="") && (pieza_movida.getAttribute('tablero') == 'true')
    && (modo.getAttribute("edicion")!="true")  
    )
    {
       if (casilla.getAttribute("posible")=='true'){
           pieza_movida.style.marginLeft=casilla_destino_x+"px";
           pieza_movida.style.marginTop=casilla_destino_y+"px";
         //  casilla_anterior.removeAttribute('ocupada'); 
         //  casilla_anterior=casilla
           casilla.setAttribute('ocupada', 'true');
           document.getElementById("click").play();
         
           // TURNOS
           if (pieza_movida.getAttribute("negra")=="true") { 
            casilla_anterior.removeAttribute('ocupada'); 
            casilla_anterior.removeAttribute('ocupada_negra'); 
            casilla_anterior=casilla
            coronacion(casilla);
          
            casilla.setAttribute('ocupada_negra','true');
            turno_blancas();
           }
        if (pieza_movida.getAttribute("blanca")=="true") {
            casilla_anterior.removeAttribute('ocupada'); 
            casilla_anterior.removeAttribute('ocupada_blanca'); 
            casilla_anterior=casilla
            coronacion(casilla);
            casilla.setAttribute('ocupada_blanca', 'true');
      turno_negras();
    }
        
           

       }
        
    
        // aca termina el condicional si la pieza está en el tablero
    }
    // AL COMPLETAR EL MOVIMIENTO, LA PIEZA QUEDA "DESSELECCIONADA"

pieza_movida="";



  

// REMOVER ATRIBUTOS DE CASILLA IMPOSIBLE PARA QUE SE ACTUALIZE JUGADA A JUGADA
limpieza();


}
    }
