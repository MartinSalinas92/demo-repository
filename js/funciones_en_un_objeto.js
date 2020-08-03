const personas={
    nombre:'Martin',
    Trabajo:'Desarrollador Web',
    musicaRock: true,
    mostrarInfo(){
        console.log( `EL alumno ${this.nombre} es nuevo y trabaja en una empresa como ${this.Trabajo}`);
    }

}

personas.mostrarInfo();