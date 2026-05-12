export function esVip(cantProd, total) {

    if (cantProd > 20 && total > 1000) {
        return "***Eres cliente VIP***";

    } else {
        return "***No eres cliente VIP***";

    }//else
}//function esVip