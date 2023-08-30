let nombreDeUsuario = prompt("Bienvenido... ¿Como te llamas?")
let reintento = "hola"
if (nombreDeUsuario == "" || nombreDeUsuario == null) {
    reintento = (prompt("¡Ey, no seas irrespetuoso y dime tu nombre!"))
        if (reintento == "" || reintento == null) {
            alert("Asi que no me vas a decir tu nombre... ok.")
        }
        else {
            alert("Bienvenido " + reintento + ", esta es mi tienda de ropa.")
            reintento = "chau"
        }
}
else{
    alert("¡Bienvenido " + nombreDeUsuario + ", encantado de conocerte! Esta es mi tienda de ropa.")
    reintento = "chau"
}
let prendaElegida
do {
    prendaElegida = (prompt("Aqui vendemos diferentes prendas, dime cual quieres llevar: \n\n 1- Pantalon azul \n 2- Remera blanca \n 3- Zapatillas negras \n 4- Gorra roja \n"))
    if (prendaElegida == "1") {
        alert("Elegiste comprar el pantalon azul")
        break
    }else if (prendaElegida == "2") {
        alert("Elegiste comprar la remera blanca")
        break
    }else if (prendaElegida == "3") {
        alert("Elegiste comprar las zapatillas negras")
        break
    }else if (prendaElegida == "4") {
        alert("Elegiste comprar la gorra roja")
        break
    }
} while (prendaElegida != "1" || prendaElegida != "2" || prendaElegida != "3" || prendaElegida != "4")
//MALEDUCADO
if (prendaElegida == "1" && (reintento == "" || reintento == null)){
    alert("El precio de tu pantalon es de $12500")
    prendaElegida = 12500
    reintento = "hola"
}else if (prendaElegida == "2" && (reintento == "" || reintento == null)){
    alert("El precio de tu remera es de $7500")
    prendaElegida = 7500
    reintento = "hola"
}else if (prendaElegida == "3" && (reintento == "" || reintento == null)){  
    alert("El precio de tus zapatilla es de $22500")
    prendaElegida = 22500
    reintento = "hola"
}else if (prendaElegida == "4" && (reintento == "" || reintento == null)){  
    alert("El precio de tu gorra es de $5000")
    prendaElegida = 5000
    reintento = "hola"
} 
//EDUCADO
if (prendaElegida == "1" && reintento != "hola"){
    alert("El precio de tu pantalon es de $10000")
    prendaElegida = 10000
}else if (prendaElegida == "2" && reintento != "hola"){
    alert("El precio de tu remera es de $5000")
    prendaElegida = 5000
}else if (prendaElegida == "3" && reintento != "hola"){
    alert("El precio de tus zaparillas es de $20000")
    prendaElegida = 20000
}else if (prendaElegida == "4" && reintento != "hola"){
    alert("El precio de tu gorra es de $2500")
    prendaElegida = 2500
}
let segundoArituculo = prompt("¿Quiere comprar alguna otra prenda? \n1- SI \n2- NO")
let prendaElegida2 
if (segundoArituculo == "1") {
    do {
        prendaElegida2 = (prompt("Elige otra prenda: \n\n 1- Pantalon azul \n 2- Remera blanca \n 3- Zapatillas negras \n 4- Gorra roja \n"))
        if (prendaElegida2 == "1") {
            alert("Elegiste comprar el pantalon azul")
            break
        }else if (prendaElegida2 == "2") {
            alert("Elegiste comprar la remera blanca")
            break
        }else if (prendaElegida2 == "3") {
            alert("Elegiste comprar las zapatillas negras")
            break
        }else if (prendaElegida2 == "4") {
            alert("Elegiste comprar la gorra roja")
            break
        }
    } while (prendaElegida2 != "1" || prendaElegida2 != "2" || prendaElegida2 != "3" || prendaElegida2 != "4")
    //MALEDUCADO
    if (prendaElegida2 == "1" && (reintento == "" || reintento == null)){
        alert("El precio de tu pantalon es de $12500")
        prendaElegida2 = 12500
        reintento = "hola"
    }else if (prendaElegida2 == "2" && (reintento == "" || reintento == null)){
        alert("El precio de tu remera es de $7500")
        prendaElegida2 = 7500
        reintento = "hola"
    }else if (prendaElegida2 == "3" && (reintento == "" || reintento == null)){  
        alert("El precio de tus zapatilla es de $22500")
        prendaElegida2 = 22500
        reintento = "hola"
    }else if (prendaElegida2 == "4" && (reintento == "" || reintento == null)){  
        alert("El precio de tu gorra es de $5000")
        prendaElegida2 = 5000
        reintento = "hola"
    } 
    //EDUCADO
    if (prendaElegida2 == "1" && reintento != "hola"){
        prendaElegida2 = 10000
        alert("El precio de tu pantalon es de $10000")
    }else if (prendaElegida2 == "2" && reintento != "hola"){
        alert("El precio de tu remera es de $5000")
        prendaElegida2 = 5000
    }else if (prendaElegida2 == "3" && reintento != "hola"){
        alert("El precio de tus zaparillas es de $20000")
        prendaElegida2 = 20000
    }else if (prendaElegida2 == "4" && reintento != "hola"){
        alert("El precio de tu gorra es de $2500")
        prendaElegida2 = 2500
    }
}else {
    alert("Okey, pasemos a cobrarle.")
}
//Funciones
function sumar (prenda1, prenda2) {
    return prenda1 + prenda2
}
let precioTotal = sumar(prendaElegida, prendaElegida2)
alert("El costo de su compra sera de $" + precioTotal)
function restar (monto1, monto2) {
    return monto1 - monto2
}
let montoDePago = 0
let vuelto = 0 
let faltanteDePago
let metodoDePago = prompt("Quiere abonar en efectivo o con tarjeta: \n1- Efectivo \n2- Tarjeta")
if (metodoDePago == 1) {
    montoDePago = Number(prompt("Indique el monto exacto con el que abonara."))
vuelto = restar(precioTotal - montoDePago)
    if (vuelto < 0) {
        alert("Excelente " + nombreDeUsuario + ", su vuelto es de $" + vuelto)
    }else if (vuelto > 0){
        alert("Para llegar al monto que tiene que abonar le faltan $" + vuelto)
        do {
            faltanteDePago = prompt("Ingrese el monto restante.")
        } while (faltanteDePago == vuelto);
    }else{
        alert("Genial, gracias por pagar el monto exacto.")
    }
}else if (metodoDePago == 2) {
    alert("Porfavor, apoye su tarjeta en el posnet.")
    alert("Su pago a sido realizado.")
}
alert("Muchas gracias por visitar mi tienda, espero que disfrute de su nueva ropa. \n\n¡Hasta la Proxima!")