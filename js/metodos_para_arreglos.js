//Metodos en arreglos

const personas=[
    {nombre:'Martin', edad:27, Aprendiendo:'Javascript'},
    {nombre:'Romina', edad:23, Aprendiendo:'PHP'},
    {nombre:'Rogelio', edad:28, Aprendiendo:'Angular'},
    {nombre:'Claudio', edad:28, Aprendiendo:'Node.js'},
    {nombre:'jhonathan', edad:22, Aprendiendo:'git'},
]

const mayores= personas.filter(persona=>{

    return persona.edad >= 28;

});

//console.log(mayores); //find significa encontrar

const nombre= personas.find(persona=>{

    return persona.nombre === 'Romina';
});

//console.log(nombre);

let total=personas.reduce((edadtotal,persona)=>{
    return edadtotal+persona.edad
},0);

console.log(total/5);