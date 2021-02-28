/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

//Solución al primer ejercicio------************************************1***************************----
/* function countLetters(inString){ 
    if(typeof inString == "string"){  
       let numberOfLetters = inString.length
       alert(`your string:${inString} have ${numberOfLetters} letters including the white space`)
    }else{
        alert("mal perro!")
    }
}

let inString = prompt("please introduce any string:")
countLetters(inString) */
// Fin solucion al primer ejercicio.

//Solucion al segundo ejercicio ---*************************************2***************************-----
/* function cutString(inString,numbToCut){
    if(typeof inString !== "string" && typeof numbToCut !== "string") return alert("mal perro!")
    let numberOfLetters = inString.length
    numbToCut = Math.abs(parseInt(numbToCut))
    if(Number.isNaN(numbToCut)) return alert("please introduce a number")
    if(numbToCut > numberOfLetters ) return alert(`your string: ${inString}  have ${numberOfLetters} letters including the white spaces.Then it has no sense that you want to cut ${numbToCut} letters that you don´t  have`)
    let newString = inString.substring(0,numbToCut)
    alert(`your new String is: ${newString}`)

}
let inString = prompt("please introduce any string:")
let numbToCut = prompt("please introduce a number to cut your string to that number of letters include white spaces")
cutString(inString,numbToCut) */
//Fin solucion al segundo ejercicio
//++++++++++++++++++++++++++++++3++++++++++++++++++++++++++++
//solución al tercer ejercicio
/* const splitString = function(inString,separator){
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("Ingresa una oración")
    if(separator === undefined ) return console.warn("No ingresaste un separador")
    console.info(inString.split(separator))
}
splitString("Welcome to the jungle"," ") */
//Fin solución al tercer ejercicio

/*++++++++++++++++++++++++++++++++ 4 ++++++++++++++
Solución al cuarto ejercicio */
/* function repeatString(inString,numbToRepeat){
    if(typeof inString !== "string" && typeof numbToRepeat !== "string") return alert("mal perro!")
    numbToRepeat = Math.abs(parseInt(numbToRepeat))
    if(Number.isNaN(numbToRepeat)) return alert("please introduce a number!!")
    let newString = inString
    for (let index = 1; index < numbToRepeat; index++) {
        newString +="\n" + inString
    }
    alert(`Asi queda perro: ${newString}`)
}
let inString = prompt("please introduce any string:")
let numbToRepeat = prompt("please introduce a number to repeat your string")
repeatString(inString,numbToRepeat) */
//Fin solución al cuarto ejercicio

