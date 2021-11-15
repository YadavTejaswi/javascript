function tcalc(){
    var price = document.getElementById("taxprice").value,
    price = parseInt(price);
    if(price<=100){
        var tax = (price * 15) / 100;
        netAmount = price + tax;
        document.getElementById("taxamt").value = tax;
    document.getElementById("taxgrand").value = netAmount;
    }else{
        var tax = (price * 20) / 100;
        netAmount = price + tax;
        document.getElementById("taxamt").value = tax;
        document.getElementById("taxgrand").value = netAmount;
    }
return false;
     }