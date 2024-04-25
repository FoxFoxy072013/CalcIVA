let iva10_05 = 0.105
let iva21 = 0.21
let iva27 = 0.27

let calculoIva
let precioFinal1
let calculoIva2
let precioFinal2
let calculoIva3
let precioFinal3

do {
do {
    calculoIva = parseFloat(prompt("Escriba el precio NETO de una compra con IVA de 10.5%"))
}while (calculoIva === null || calculoIva == 0)

if (!isNaN(calculoIva)) {
    let resultado1 = calculoIva * iva10_05
    precioFinal1 = resultado1 + calculoIva
    alert ("El precio sumando IVA de 10.5% es de " + precioFinal1 + "\nEl IVA de 10.5% es de " + resultado1)
}else {
    alert("No se escribió ningun importe en IVA de 10.5%")
}

do {
    calculoIva2 = parseFloat(prompt("Escriba el precio NETO de una compra con IVA de 21%"))
}while (calculoIva2 === null || calculoIva2 == 0)

if (!isNaN(calculoIva2)) {
    let resultado2 = calculoIva2 * iva10_05
    precioFinal2 = resultado2 + calculoIva2
    alert ("El precio sumando IVA de 21% es de " + precioFinal2 + "\nEl IVA de 21% es de " + resultado2)
}else {
    alert("No se escribió ningun importe en IVA de 21%")
}

do {
    calculoIva3 = parseFloat(prompt("Escriba el precio NETO de una compra con IVA de 27%"))
}while (calculoIva3 === null || calculoIva3 == 0)

if (!isNaN(calculoIva3)) {
    let resultado3 = calculoIva3 * iva10_05
    precioFinal3 = resultado3 + calculoIva3
    alert ("El precio sumando IVA de 27% es de " + precioFinal3 + "\nEl IVA de 27% es de " + resultado3)
}else {
    alert("No se escribió ningun importe en IVA de 27%")
}
}while(true)




