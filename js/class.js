


class tarea{
    constructor(nombre,prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad;

    }
   mostrar(){
       console.log( `${this.nombre}, es un privilegio totalmente ${this.prioridad}`);
   }
}

class beneficios extends tarea{
    constructor(nombre,prioridad,cantidad){
        //agregamos super que viene del metodo padre que es tarea
        super(nombre,prioridad);
        this.cantidad=cantidad;

    }
    mostrar(){
        super.mostrar();
        console.log(`y los beneficios son realmentes altos y el sueldo es de ${this.cantidad}`);

    }
}

//let tarea1= new tarea("Aprender JavaScript","ALta");


let bene= new beneficios("javascript","ALta",33456);
bene.mostrar();

