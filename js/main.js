const productos = [
{ id: 1, nombre: "Creatina",  precio: "4500" ,},
{ id: 2, nombre: "proteina",  precio: "3000", },
{ id: 3, nombre: "pre entreno",  precio: "5700", },
{ id: 4, nombre: "pasti loca",  precio: "2000", },

]

for (const producto of productos) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `<p> ID: ${producto.id} </p> <hr>
<h1> Nombre: ${producto.nombre }</h1>
<h2> Precio: ${producto.precio }</h2>`;
document.body.appendChild(contenedor);

} 

let bienvenido = document.getElementById("hola")
console.log(hola.innerText)
hola.innerText = "elije tu suplemento"
console.log(bienvenido);



