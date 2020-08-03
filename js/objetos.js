//Objetos

//object literal

const personas={
    nombre:'Martin',
    apellido:'Salinas',
    sueno:'Ser Programandor React.js',
    edad:27
}

console.log(personas.sueno);

//object constructor

function tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

const tarea1=new tarea('Aprender Javascript y React','Urgente');

console.log(tarea1);