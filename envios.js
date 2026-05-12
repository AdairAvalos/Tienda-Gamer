export function calcularEnvio(cantProd) {

    if (cantProd < 3) {
        return "No se permiten compras menores a 3";

    } else if (cantProd >= 3 && cantProd <= 10) {
        return "El costo de envio es de $15 USD";
        
    } else {
        return "El envio es gratis";
    }
}