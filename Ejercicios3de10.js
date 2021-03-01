/* 9) Programa una función que obtenga un número aleatorio entre 501 y 600. */
/* (function(){ console.info(parseInt(501+100*(Math.random())))})()
 */
/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/* const checkCapicua = (inNumber = undefined) => {
    (!inNumber)
        ?console.warn("no ingresaste un número")
            :(Number.isNaN(parseInt(inNumber)))
                ?console.warn("debes ingresar un número")
                    :(Math.sign(inNumber) === -1)
                        ?console.warn("No debe ser un número negativo")
                            :(inNumber.toString() === inNumber.toString().split("").reverse("").join(""))
                                ?console.info("¡¡¡es capicúa!!!")
                                    :console.info("No es Capicúa :-(")                            
}

checkCapicua()
checkCapicua("ss")
checkCapicua("-22")
checkCapicua("123")
checkCapicua("2002")
checkCapicua(2002)
checkCapicua(13) */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
/* const factorial = (inNumber = undefined) => {
    if(inNumber === undefined) return console.warn("No ingresaste un número")
    if(Number.isNaN(parseInt(inNumber))) return console.warn("debes ingresar un número")
    if(Math.sign(inNumber) === -1) return console.warn("No debe ser un número negativo")
    let outNumber = 1
    for (let index = 1; index <= inNumber; index++){
        outNumber *= index                       
    }                   
    console.info(`El factorial de ${inNumber} es ${outNumber}`)
}

factorial([1,2,3]) */