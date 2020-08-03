const aplicarDescuento= new Promise((resolve,reject)=>{
    setTimeout(() => {

        let descuento=true;

        if(descuento){
            resolve('Descuento Aplicado');
        }else{
            reject('no se ha podido realizar el descuento');
        }
        
    },3000);
});

aplicarDescuento.then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error);
})