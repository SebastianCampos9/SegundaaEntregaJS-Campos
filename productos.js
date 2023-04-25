class productos {
    
    media;
    boxer; 
    remera; 
    jean; 
    pantalon; 
    gorra;
    ojotas; 
    gorroDeLana;

constructor(media,boxer,remera,jean,pantalon,gorra,ojotas,gorroDeLana)
{

this.media = media;
this.boxer = boxer;
this.remera = remera;
this.jean = jean;
this.pantalon = pantalon;
this.gorra = gorra;
this.ojotas = ojotas;
this.gorroDeLana = gorroDeLana;

}


megusta = function() {
    console.log("Le diste me gusta a la seccion:" + this.jean)
};


}

class medias{

    color;
    talle;
    corta;
    larga;
    material;
    precio;


//     constructor(color, talle, corta, larga, material)
// {

//     this.color = color;
//     this.talle = talle;
//     this.corta = corta;
//     this.larga = larga;
//     this.material = material;
//     this.precio = precio;

// }

agarrar = function() {
console.log("El Usuario agarra una Media de color"+ this.color + 'y de talle' + this.talle );
};


}