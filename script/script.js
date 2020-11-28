
function submitContacto(e) {
    
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var domicilio = $("#domicilio").val();
    var codigoPostal = $("#codigoPostal").val();
    var fecha = $("#fecha").val();
    var comentario = $("#comentario").val();
    var tupedido = $("#tupedido").val();


    localStorage.nombre = nombre;
    localStorage.apellido = apellido;
    localStorage.email = email;
    localStorage.domicilio = domicilio;
    localStorage.codigoPostal = codigoPostal;
    localStorage.fecha = fecha;
    localStorage.comentario = comentario;
    localStorage.tupedido = tupedido;

    

}



function añadirMesasDulces(){
    localStorage.clear();
    var celebracionEscogida = $('#celebracion').find(":selected").text();
    var temaCelebración = $("#tema").val();
    var numMacarons = $("#numeroMacarons").val();
    var numAlfajores = $("#numeroAlfajores").val();
    var numBerlinas = $("#numeroBerlinas").val();
    var numBrownies = $("#numeroBrownies").val();
    var numAlmendrados = $("#numeroAlmendrados").val();
    var numTrufas = $("#numeroTrufas").val();
    var numBombones = $("#numeroBombones").val();

    var stringguardada = $("#mipedido").val();
    
    $("#mipedido").val(stringguardada + "Mesas dulces. Celebración: " +  celebracionEscogida + "; Tema de celebración: " + temaCelebración + "; ");

    var opcionesEscogidas = [numMacarons, numAlfajores, numBerlinas, numBrownies, numAlmendrados, numTrufas, numBombones];

    var numEscogodias = 0;

    if(temaCelebración==""){
        alert("Escribe el tema de celebración que desees para la mesa.");
        return;
    }
    for(i=0;i<opcionesEscogidas.length+1;i++){
        if(parseInt(opcionesEscogidas[i],10)>=6){
            numEscogodias += parseInt(opcionesEscogidas[i],10);
            console.log(numEscogodias);
        }
    }
    console.log(numEscogodias);

    if(numEscogodias < 24){
        alert("Has seleccionado un total de " + numEscogodias + ". El total de productos escogidos debe de ser mínimo 24. Para que los productos cuenten, tienen que haber mínimo 6 del mismo tipo");
        return;
    }
    

    for(i=0 ; i<opcionesEscogidas.length+1; i++){
        
        if(opcionesEscogidas[i]>=6){
            switch(i){
                case 0: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de macarons:" +  numMacarons + "; ");
                        break;

                case 1: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de alfajores:" +  numAlfajores + "; ");
                        break;

                case 2: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de berlinas:" +  numBerlinas + "; ");
                        break;

                case 3: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de brownies:" +  numBrownies + "; ");
                        break;

                case 4: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de almendrados:" +  numAlmendrados + "; ");
                        break;

                case 5: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de trufas:" +  numTrufas + "; ");
                        break;

                case 6: var stringguardada = $("#mipedido").val();
    
                        $("#mipedido").val(stringguardada + "Número de bombones:" +  numBombones + "; ");
                        break;
            }
        }
    }

    
    var strsave = $("#mipedido").val();
    $("#mipedido").val(strsave + "\n");

}

function añadirTartas(){
    var tartaNumPersonas = $("#personasTarta").val();
    var tartaElegida = $("#tarta-bizcocho").val();
    var tartaButtercreamElegida = $("#tarta-buttercream").val();

    if(tartaNumPersonas==""){
        alert("Introduce número de cupcakes");
        return;
    }else if(tartaNumPersonas<15){
        alert("Debes añadir un mínimo de 15 unidades");
        return;
    }
    
    var stringguardada = $("#mipedido").val();
    
    if($("#gridCheck-tarta").is(":checked")){
        $("#mipedido").val(stringguardada + "Tartas. Número de personas: " +  tartaNumPersonas + "; Sabor del bizcocho " + tartaElegida + "; Buttercream: "+  tartaButtercreamElegida + " *PARA MESA \n");
    }else{
        $("#mipedido").val(stringguardada + "Tartas. Número de personas: " +  tartaNumPersonas + "; Sabor del bizcocho " + tartaElegida + "; Buttercream: "+  tartaButtercreamElegida + " \n");
    }
}


function añadirGalletas(){
    var galletasNumero = $("#numeroGalletas").val();
    var galletasTamaño = $("#galletas-tamaño").val();
    var galletasSabor = $("#galletas-sabor").val();
    var galletasDecorado = $("#galletas-decorado").val();

    if(galletasNumero==""){
        alert("Introduce número de cupcakes");
        return;
    }else if(galletasNumero<15){
        alert("Debes añadir mínimo de 15 unidades");
        return;
    }
    
    if(galletasDecorado==""){
        alert("Describe el decorado que quieres para las galletas, si no deseas ninguno en concreto escribe 'básico' ")
    }
    var stringguardada = $("#mipedido").val();
    
    if($("#gridCheck-galletas").is(":checked")){
        $("#mipedido").val(stringguardada + "Galletas. Número: " +  galletasNumero + "; Tamaño: " + galletasTamaño + "; Sabor: "+  galletasSabor + "; Decorado: " + galletasDecorado + " *PARA MESA \n");
    }else{
        $("#mipedido").val(stringguardada + "Galletas. Número: " +  galletasNumero + "; Tamaño: " + galletasTamaño + "; Sabor: "+  galletasSabor + "; Decorado: " + galletasDecorado + "\n");
    }

}

function añadirCupcakes(){
    var cupcakesNumero = $("#numeroCupcakes").val();
    var cupcakesTamaño = $("#cupcakes-tamaño").val();
    var cupcakesSabor = $("#cupcakes-sabor").val();
    var cupcakesButtercream = $("#cupcakes-buttercream").val();

    if(cupcakesNumero==""){
        alert("Introduce número de cupcakes");
        return;
    }else if(cupcakesNumero<15){
        alert("Debes añadir mínimo de 15 unidades");
        return;
    }

    var stringguardada = $("#mipedido").val();
    if($("#gridCheck-cup-cakes").is(":checked")){
        $("#mipedido").val(stringguardada + "Cupcakes. Número: " +  cupcakesNumero + "; Tamaño: " + cupcakesTamaño + "; Sabor: "+  cupcakesSabor + "; Buttercream: " + cupcakesButtercream + " *PARA MESA \n");
    }else{
        $("#mipedido").val(stringguardada + "Cupcakes. Número: " +  cupcakesNumero + "; Tamaño: " + cupcakesTamaño + "; Sabor: "+  cupcakesSabor + "; Buttercream: " + cupcakesButtercream + "\n");
    }
}

function añadirPopcakes(){

    var popcakesNumero = $("#numeroPopcakes").val();
    var popcakesSabor= $("#popcakes-sabor").val();

    if(popcakesNumero==""){
        alert("Introduce el número de popcakes");
        return;
    }else if(popcakesNumero<15){
        alert("Debes añadir un mínimo de 15 unidades");
        return;
    }
    var stringguardada = $("#mipedido").val();
    if($("#gridCheck-pop-cakes").is(":checked")){
        $("#mipedido").val(stringguardada + "Popcakes. Número: " +  popcakesNumero + "; Sabor: " + popcakesSabor + "*PARA MESA \n");
    }else{
        $("#mipedido").val(stringguardada + "Popcakes. Número: " +  popcakesNumero + "; Sabor: " + popcakesSabor + "\n");
    }
    
    
}

function miPedido(){
    var pedidoCompleto = $("#mipedido").val();
    localStorage.pedidoCompleto = pedidoCompleto;
    document.location.href = "./contacto.html";
}

function initContacto(){
    if(localStorage.pedidoCompleto){
        
        var str = localStorage.getItem("pedidoCompleto");
        $("#tupedido").val(localStorage.getItem("pedidoCompleto"));
        
        localStorage.clear();
    }
}