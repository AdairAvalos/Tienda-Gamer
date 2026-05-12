import { calcularEnvio } from "./envios.js";
import { calcularDescuento } from "./descuentos.js";
import { esVip } from "./vip.js";

let nombre = "Adair";
let cantProd = 10;
let total = 479;

console.log(`Hola ${nombre}`);
console.log(calcularEnvio(cantProd));
console.log(esVip(cantProd, total));
