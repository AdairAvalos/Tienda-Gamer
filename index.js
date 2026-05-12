

let cantidad = Number(prompt("Ingresa la cantidad de productos:"));
let total = Number(prompt("Ingresa el total de la compra:"));


let envio = calcularEnvio(cantidad);
let descuento = calcularDescuento(total);
let vip = esVIP(cantidad, total);

console.log("=== RESULTADOS ===");
console.log(envio);
console.log(descuento);
console.log(vip);