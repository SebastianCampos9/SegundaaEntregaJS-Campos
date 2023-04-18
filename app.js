
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

function Media(color, talle, corta, larga, material)
{
    this.color = color;
    this.talle = talle;
    this.corta = corta;
    this.larga = larga;
    this.material = material;
}

///genero mis objetos de tipo Persona usando el constructor

const mediaf1 = new Media("Azul", 2, 3, 3, "Lana"); 

console.log(mediaf1);