let nombre= document.getElementById("nombre");
let edad= document.getElementById("edad");
let agregar= document.getElementById("boton");

//Declarar el arreglo
const arreglo = [{ campo1: "Juan", campo2: 44}]; //Instanciar el arreglo
agregar.onclick= function (e){
        arreglo.push({campo1:nombre.value, campo2:edad.value});

}
console.log(arreglo);