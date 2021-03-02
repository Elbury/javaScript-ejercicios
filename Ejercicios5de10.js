/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */
/* const  binaryDecimalConverter = (inNumber, inBase)=>{
    if(typeof inNumber !== "number" || typeof inBase !== "number") return console.error("Debes ingresar números")
    if(inBase!== 2 && inBase !== 10) return console.error("Solo puede ser 2 o 10")
    if(inBase === 2){
        let arrayNumber = inNumber.toString().split("")
        for (let index = 0; index < arrayNumber.length; index++) {
            if(arrayNumber[index] !== "1" && arrayNumber[index] !== "0"){
                return console.warn("si tu base es 2 (binaria) solo puedes ingresar unos y ceros")
            }
        }
       return console.info(`el número ${inNumber} en base ${inBase} convertido a base 10 es ${parseInt(inNumber.toString(),2)}`) 
    }
    console.info(`el número ${inNumber} en base ${inBase} convertido a base 2 es ${inNumber.toString(2)}`)
}
binaryDecimalConverter(10001,2)
binaryDecimalConverter(17,10) */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
/* const applyDiscount = (inValue,inDiscount)=>{
    if(typeof inValue !== "number" || typeof inDiscount !== "number") return console.error("Debes ingresar números")
    if(Math.sign(inValue)=== -1 || Math.sign(inDiscount)=== -1) return console.error("No pueden ser valores negativos")
    if(inDiscount >= 100) return console.info("El descuento es del valor total del producto")
    console.info(`el producto queda en un valor de: ${inValue-(inValue*(inDiscount)/(100))}`)
}
applyDiscount(1000,20) */
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
/* const yearCounter = (inYear,inMonth,inDay) =>{
    if(typeof inYear !== "number" || typeof inMonth !== "number" || typeof inDay !== "number" ) return console.error("Debe ingresar solo numeros")
    if(Math.sign(inYear)=== -1 || Math.sign(inMonth)=== -1 || Math.sign(inDay)=== -1) return console.error("No pueden ser valores negativos")
    if(inMonth > 12) return console.error("meses no pueden ser mas de 12. El formato de entrada yyyy,mm,dd")
    if(inDay > 31) return console.error("Dias no puede ser mas de 31. El formato de entrada yyyy,mm,dd")
    let currentYear = new Date().getFullYear();
    let transYears = currentYear-inYear-1;
    console.info(`Desde ${inYear} hasta ${currentYear} han transcurrido ${transYears} años`)
}
yearCounter(1984,4,23) */