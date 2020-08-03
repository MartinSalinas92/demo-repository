//templane string

const nombre= "Juan";
const trabajo= "Desarrollador Web";

//la forma antigua

console.log('nombre:'+ nombre + ', trabajo: '+trabajo);

//la nueva forma

console.log(`Nombre:${nombre} , Trabajo: ${trabajo}`);

const biografia= document.querySelector("#app");

let html= `<ul> 
                <li>Nombre:${nombre}; </li>
                <li>Trabajo:${trabajo} ;</li>



        </ul>`;

    biografia.innerHTML= html;

    