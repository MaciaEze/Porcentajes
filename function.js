//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento)/100;

    return precioDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue= inputDiscount.value;

    const precioDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP= document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioDescuento;
}

//console.log({precioOriginal,descuento,porcentajePrecioDescuento,precioDescuento,});