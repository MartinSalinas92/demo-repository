//objetos

const aprendiendoJs={
    version:{
        nueva: 'ES6',
        antigua:'ES5'
    },
    framework:['Angular','Vue.js','React.js'],

}

//Extraer Objetos Forma Antigua

//console.log(aprendiendoJs);

/*let version= aprendiendoJs.version.nueva;

console.log(version);*/

//Extraer Objetos Forma Nueva

let {antigua}=aprendiendoJs.version;
console.log(antigua);

