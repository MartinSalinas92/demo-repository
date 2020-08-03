//function construct

function tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

//prototype

tarea.prototype.mostrarInfotarea=function(){
    return`La tarea es ${this.nombre} es un prioridad de ${this.urgencia}`;
}

const tarea1=new tarea('Aprender Javascript y React','Urgencia');
const tarea2=new tarea('Pasear al Perro','Media');

console.log(tarea1.mostrarInfotarea());