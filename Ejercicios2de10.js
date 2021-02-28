/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
/* const reverseString = inString =>{
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("No ingresaste una oracion de texto")
    let newString="";
    for (let index = inString.length; index >= 0; index--) {
        newString += inString.charAt(index) 
    }
    console.info(newString)
}
reverseString("Hola Mundo") */

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
/* const countRepeatWord = function(inString,searchString){
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("No ingresaste una oracion de texto")
    if(inString.length === 1) return console.warn("debes ingresar un texto largo")
    if(searchString === undefined) return console.warn("debes ingresar la palabra que quieres contar")
    let counter = 0
    inString = inString.split(" ")
    inString.forEach(word => {
        if(word === searchString ){
            counter++
        }
    });
    console.info(counter)
}

countRepeatWord("Hola mundo Adios mundo mundo mund","mundo") */

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
/* const checkPalindromos = inString =>{
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("No ingresaste una oracion de texto")
    let newString="";
    for (let index = inString.length; index >= 0; index--) {
        inString = inString.toLowerCase()
        newString += inString.charAt(index) 
    }
    if( newString !== inString) return console.info("No es un palindromo :-(")
    console.info("¡¡Es un Palindromo!!")
}
checkPalindromos("ojo") */

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
const filterString = (inString,stringToDelete)=>{
    
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("No ingresaste una cadena de texto")
    if(typeof stringToDelete !== "string" || stringToDelete === "") return console.warn("debes ingresar el patron a eliminar")
    let outString = ""
    inString = inString.split(stringToDelete)
    inString.forEach(word => {
        outString += word
    });
    console.info(outString)

}
filterString("Hola, mundo, malparido, hijo, de, puta", ",")