function calcularDescuento(total) {

  if (total < 200) {

    let falta = 200 - total;
    console.log("Te faltan $" + falta + " para obtener la promoción");

  } else if (total <= 500) {

    let descuento = total * 0.05;
    let totalFinal = total - descuento;

    console.log("Se aplicó un descuento del 5%");
    console.log("Total a pagar: $" + totalFinal);

  } else {

    let descuento = total * 0.12;
    let totalFinal = total - descuento;

    console.log("Se aplicó un descuento del 12%");
    console.log("Total a pagar: $" + totalFinal);
  }

}

