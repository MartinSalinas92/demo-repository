const descargarUsuarios= cantidad=>new Promise((resolve,reject)=>{
    const api=`https://randomuser.me/api/?results=${cantidad}`;

    //llamado a ajax
    const xhr= new XMLHttpRequest();

    //abrir conexion

    xhr.open('GET',api,true);

    //on load
    xhr.onload=()=>{
        if(xhr.status===200){
            resolve(JSON.parse(xhr.responseText).results);

        }else{
            reject(Error(xhr.statusText))
        }
    }

    //opcional

    xhr.oneror=(error)=>reject(error);
    //send
    xhr.send();

});

descargarUsuarios(20).then(
    miembros=>ImprimirHTML(miembros),
    error=>console.error(new Error('Hubor un error' + error),
)
);

function ImprimirHTML(usuarios){
    let html='';
    usuarios.forEach(usuario => {
        html += `<li>
                    Nombre:${usuario.name.first} ${usuario.name.last}
                    Pais:${usuario.location.country}
                    Imagem:
                    <img src="${usuario.picture.medium}"> 
        
        
                </li>`
        
    });
    const biografia= document.querySelector("#app")

    biografia.innerHTML=html;
}

