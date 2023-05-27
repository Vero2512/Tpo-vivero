let cad4 = ` <div class="contenedorx">
 `

for (let elemento of data) {
    cad4 = cad4 + `
   
    <div class="producto">

        <img src=${elemento.foto}>
        <div class="textocard">
            <h3>${elemento.nombre}</h3>
            <p>${elemento.requerimiento}</p> 
            <p>${elemento.precio}</p> 
            
            <button onclick= "guardarLocalStorage()">Comprar</button>


        </div>

    </div>

    
    
    `
}
cad4=cad4+`</div> `
document.querySelector("main").innerHTML=cad4;