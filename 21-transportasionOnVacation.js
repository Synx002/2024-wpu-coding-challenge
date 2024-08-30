function rentalCarCost(d) {
    var harga;
    var diskon;
    var total;
    if(d >= 7) diskon = 50;
    else if (d >= 3) diskon = 20;
    else diskon = 0
    harga = d*40;

    total = harga - diskon;
    return total;
}

console.log(rentalCarCost(7));