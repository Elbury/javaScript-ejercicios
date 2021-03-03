/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */
/* const vowelsAndConsonants = (inString) => {
    if(typeof inString !== "string" || inString === "" || inString === " " ) return console.warn("No ingresaste una cadena de texto")
    const vowelsArray = ["a","e","i","o","u"]
    const consonantsArray =["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"]
    inString = inString.toLowerCase().split("")
    let vowelsCounter = 0
    let consonantsCounter = 0
    inString.forEach( letter => {
        vowelsArray.forEach( vowel =>{
            if(letter === vowel) vowelsCounter++   
        })
        consonantsArray.forEach( consonant =>{
            if(letter === consonant) consonantsCounter++ 
        })
    })
    console.info(`vocales: ${vowelsCounter}, consonantes: ${consonantsCounter}`)
}
vowelsAndConsonants("Hola mundo") */
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
/* const validateName = (inName) => {
    if(typeof inName !== "string" || inName === "" || inName === " " ) return console.warn("No ingresaste una cadena de texto")
    ///^([ ]([a-z][a-z']+|[a-z]+))*([ ]([a-z][a-z']+[a-z]|[a-z]+))$/,i
    let regExpNumb = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/
    console.log(regExpNumb.test(" "+inName.trim()));
    if(regExpNumb.test(" "+inName.trim())) return console.info(`${inName} es un nombre permitido`)
    console.info(`${inName} es un nombre no permitido`)
}
validateName("fredy buritica") */
/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
/* /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */