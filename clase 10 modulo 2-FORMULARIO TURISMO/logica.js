function recogerDatos(){
    function persona(nombre, primerApe, segundoApe, edad, peso, 
        condicsalud, alergias){
        this.nombre=nombre;
        
        this.edad=edad;
        this.peso=peso;
        this.condicsalud=condicsalud;
        this.alergias=alergias;
}

let recogernombre= document.getElementById("nombre").value;

let recogeredad= document.getElementById("edad").value;
let recogerpeso= document.getElementById("peso").value;
let recogercondicsalud= document.getElementById("condicsalud").value;
let recogeralergias= document.getElementById("alergias").value;

nuevaPersona = new persona (recogernombre, recogeredad, recogerpeso, 
    recogercondicsalud, recogeralergias);
    console.log(nuevaPersona)
    agregar(nuevaPersona);

}

let baseDatos=[];
function agregar(nuevaPersona){
    baseDatos.push(nuevaPersona);
    console.log(baseDatos);
}

baseDatos=[];
for (let i = 0; i<persona.length-1; i++){
    if (persona[i].Edad > 18){

    baseDatos.push(persona[i]);       
    }
}