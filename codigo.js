//Creo una variable con el contenido del div que tiene la clase "flex-container"
const contenedor = document.querySelector(".flex-container");
//Creo un contador
let contador;
//Creo una funcion para crear llaves
function crearLlave(nombre, modelo, precio){
    contador ++;
    //Creo los atributos con etiquetas html para agregarlos al "contenedor"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    img = `<img src="llave.png"></img>`;

    //Devuelvo un array con el contenido de la llave
    return [img, nombre, modelo, precio];
}

//creo el documentFragment para guardar todos los div y luego agregarselos al contenedor
let documentFragment = document.createDocumentFragment();

//Hago un for para crear las 20 llaves del problema de Cofla(Dalto)
for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*1000000);
    let precioRandom = Math.random()*10+30;
    precioRandom = precioRandom.toFixed(2); //Limito el numero a 2 decimales
    //Creo una variable llave con el contenido de una llave
    let llave = crearLlave(`Llave ${i}`,"Modelo: " + modeloRandom,precioRandom); 
    //Creo un div
    let div = document.createElement("DIV");
    //creo una funcion para cambiar el value del input hidden al del modelo de la llave que se elija
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom;
    });
    //Para que el elemento quede marcado
    div.tabIndex = i;
    //Le agrego al div la clase "flex-item" y "item-i"
    div.classList.add("flex-item",`item-${i}`);
    //Le agrego al div el contenido del objeto llave[i]
    //div.innerHTML = [...llave]; //operador Spread
    div.innerHTML = (llave[0]+llave[1]+llave[2]+llave[3]);
    //voy acumulando los divs en el documentFragment
    documentFragment.appendChild(div);
}
//Agrego los divs del bucle al contenedor
contenedor.appendChild(documentFragment);


