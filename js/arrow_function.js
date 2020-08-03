//farrow function

/*La forma vieja */

/*let viajando= function(destino){
    return `Usted se encuentra viajando con destino a la ciudad ${destino} `;
}

let viaje= viajando('Formosa');
console.log(viaje);*/

//la forma nueva//

/*let viajando= destino=> `Viajando a la ciudad de ${destino}`;

let viaje= viajando('Bueno Aires');

console.log(viaje);*/

let viajando=(destino,duracion)=>`Viaja a la ciudad ${destino}, con aproximidad de llegada ${duracion}`;

let viaje=viajando('Buenos Aires', '14 horas de viaje');

console.log(viaje);