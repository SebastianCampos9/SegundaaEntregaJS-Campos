
// let valorCopas;

// valorCopas = parseInt(prompt("Cuantos mundiales de futbol tiene tu pais?"));

// if (valorCopas > 1) {
//     console.log("Claramente tu pais es Mudialista!!.");
// }

// else {
//     ///estoy en el camino de es menor a 0 o igual!
//     if (valorCopas === 1)
//     {
//         console.log("1? dale que estan lento.");
//     } else {
//         console.log("0? la proxima es tuya campeón!");
//     }
// }


// let nombreJugadores = prompt("Quien es el mejor jugador de toda la historia del futbol mundial?").toUpperCase();

// while (nombreJugadores != "ESC") {

//     switch(nombreJugadores) {
//         case "MESSI":
//             alert("Lionel Andres Messi? Sin ninguna duda, el 10.");
//             break;

//         case "MARADONA":
//             alert("Diego Armando Maradona, La mano de dios? puede ser pero no lo es");
//             break;

//          case "PELE":
//             alert("Vos decis? Pele? mmmmh");
//             break;

//         default:
//             alert("Seguro? pensa bien, dale!");
//             break;
//     }

//     if ((nombreJugadores == "MESSI")) {
//         console.log("2026 Leo, un poquito mas, daleeeeee!");
//         break;
//     }

//     nombreJugadores = prompt("Ingrese un Nombre:").toUpperCase(); //ANA
// }


let carrito = [];


function cargarUnaMedia() {

    const nuevaMedia = new medias ();
    nuevaMedia.color = prompt('Ingrese el color');
    nuevaMedia.talle = prompt('Ingrese el talle');
    nuevaMedia.larga = prompt('Larga? si/no');
    nuevaMedia.corta = prompt('Corta? si/no');
    nuevaMedia.material = prompt('Ingrese el tipo de material');
    nuevaMedia.precio = Number(prompt('Ingrese el precio'))

    carrito.push(nuevaMedia);
}



const cargarMedia = () => {
    let seguir;
    do{
       cargarUnaMedia();
       seguir = prompt('Desea ingresar otra media? si/no');

} while(seguir == 'si');

}


function mostrarCarritoDeMedias() {
    
    carrito.forEach((medias) => {
        alert(`color: ${medias.color} \n talle: ${medias.talle} \n larga: ${medias.larga} \n corta: ${medias.corta} \n material: ${medias.material} \n precio: ${medias.precio} \n\n`)
    })


}

cargarUnaMedia();
cargarMedia();
mostrarCarritoDeMedias();






function sumaDePrendas(precio1, precio2)
{
    const total = precio1 + precio2; 

    return total; 
}

let total;

total = sumaDePrendas(2045,5245);

console.log(total);

console.log('Mas IVA:' + sumaDePrendas(2045,5245)*1.21);

const laMejorMedia = {color: "Negra", talle: 2 , corta: 3, material: "Algodon"}

console.log(laMejorMedia);
