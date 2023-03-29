
let valorCopas;

valorCopas = parseInt(prompt("Tu pais cuantos mundiales de futbol tiene?"));

if (valorCopas > 1) {
    console.log("Claramente tu pais es Mudialista!!.");
}

else {
    ///estoy en el camino de es menor a 0 o igual!
    if (valorCopas === 1)
    {
        console.log("1? dale que estan lento.");
    } else {
        console.log("0? la proxima es tuya campeón!");
    }
}


let nombreJugadores = prompt("Quien es el mejor jugador de toda la historia del futbol mundial?").toUpperCase();

while (nombreJugadores != "ESC") {

    switch(nombreJugadores) {
        case "MESSI":
            alert("Lionel Andres Messi? Sin ninguna duda, el 10.");
            break;

        case "MARADONA":
            alert("Diego Armando Maradona, La mano de dios? puede ser pero no lo es");
            break;

         case "PELE":
            alert("Vos decis? Pele? mmmmh");
            break;

        default:
            alert("Seguro? pensa bien, dale!");
            break;
    }

    if ((nombreJugadores == "MESSI")) {
        console.log("2026 Leo, un poquito mas, daleeeeee!");
        break;
    }

    nombreJugadores = prompt("Ingrese un Nombre:").toUpperCase(); //ANA
}