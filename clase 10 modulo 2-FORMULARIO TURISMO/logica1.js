var mayoriaedad = 0
var maspeso = 0
var promedioedad = 0

const datos = 
[{"nombre":"Pedro","edad":30,"peso":88,"condicsalud":"sano","alergias":"no"},
{"nombre":"Hardy","edad":40,"peso":70,"condicsalud":"enfermo","alergias":"no"},
{"nombre":"Juan","edad":50,"peso":99,"condicsalud":"enfermo","alergias":"si"},
{"nombre":"Flor","edad":25,"peso":68,"condicsalud":"sano","alergias":"no"},
{"nombre":"Sergio","edad":48,"peso":89,"condicsalud":"sano","alergias":"no"},
{"nombre":"Blanca","edad":50,"peso":88,"condicsalud":"sano","alergias":"no"},
{"nombre":"Pablo","edad":22,"peso":72,"condicsalud":"sano","alergias":"si"},
{"nombre":"Guillermo","edad":36,"peso":77,"condicsalud":"sano","alergias":"no"},
{"nombre":"Leonel","edad":39,"peso":91,"condicsalud":"sano","alergias":"no"}];

for (let i = 0; i < datos.length-1; i++) {
if (datos[i].edad >= 18) {mayoriaedad++};
if (datos[i].peso > 90) {maspeso++};

function average(datos) {
    let sumaedad = 0;
    for (let i = 0; i < datos.length; i++)
    sumaedad = sumaedad + datos[i].edad;
}
 const sumaedad = datos.reduce((a,b) => a + b);
 
 const promedioedad = sumaedad / datos.length;


}

function compare( a, b ){
    if (a.nombre < b.nombre){
    
        return -1;
    }
    if (a.nombre > b.nombre){
        return 1;
    }
    return 0;
}
console.log("Lista desordenada", datos)

datos.sort(compare);

console.log("Lista ordenada", datos)
console.log("Mayores de edad", mayoriaedad)
console.log("Más de 90 Kilos", maspeso)
console.log("Promedio de edades", promedioedad)