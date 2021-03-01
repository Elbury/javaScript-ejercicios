/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
const primeNumber = ( inNumber = 0) =>{
    if(typeof inNumber !== "number") return console.warn("No ingresaste un número!")
    if(Math.sign(inNumber) === -1) return console.error("No debe ser un número Negativo") 
    if(inNumber < 2) return console.info(`El número ${inNumber} no es primo`)
    if(inNumber === 2) return console.info(`El número ${inNumber} es primo`)
    for (let index = 2; index < inNumber; index++) {
        if(inNumber%index === 0 ){
            return console.info("el numero no es primo")
        }  
    }
    console.info(`el número ${inNumber} es primo`)
}
primeNumber(5)

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */