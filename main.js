// SISTEMA PARA CALCULO DE COSTO DE PRODUCTOS

//Declaración de constantes y variables:
const precioPorKilo = 800;
const precioTe = 500;
let cantidadKilos = 0;
let cantidadTe = 0;
let costoTotal = 0;
let eleccion = "";
let cuotas = 0;
alert("¡Bienvenidos!");

eleccion = prompt("Que producto desea llevar?(cafe o te): ");
//Ciclo while
while (eleccion !== 'cafe' && eleccion !== 'te') {
    alert("Ingrese nuevamente");
    eleccion = prompt("Que producto desea llevar?(cafe o te): ");
}
//Función
function calculoCosto() {
    //Condicionales
    if (eleccion === "cafe") {

        cantidadKilos = parseInt(prompt("Ingrese la cantidad de kilos de café: "));
        costoTotal = cantidadKilos * precioPorKilo;
        alert("El precio total de su compra es: $ " + costoTotal);

    }
    else {
        cantidadTe = parseInt(prompt("Ingrese cantidad de cajas de té: "));
        costoTotal = cantidadTe * precioTe;
        alert("El precio total de su compra es: $ " + costoTotal);
    }
}

function calculoCuotas() {
    cuotas = parseInt(prompt("Ingrese cantidad de cuotas a pagar: "));

    alert("El precio por cuota es de: $ " + (costoTotal / cuotas).toFixed(2));
}


//Llamado a la función:
calculoCosto();
calculoCuotas();