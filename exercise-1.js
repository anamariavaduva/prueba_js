/**
 * #############################
 * ##  E J E R C I C I O   1  ##
 * #############################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.  ---->> Split con space de separador
 *
 *  - No debe haber letras mayúsculas.  ----> aplicar toLowerCase
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.  ----- aplicar Replace
 *
 *  - El array debe estar ordenado por orden alfabético.  ------>> aplicar Sort que ordena alfabeticamente 
 *
 * Resultado esperado: ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]
 *
 */
'use strict'

const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

console.log (text);

//// Quito el coma

const text2 = text.replaceAll(',', '');

console.log (text2);

//// Quito el punto


const text3 = text2.replaceAll('.', '');
console.log(text3);

//// Quito !

const text4 = text3.replaceAll ('!', '');
console.log(text4);

//// Quito ¡
const text5 = text4.replaceAll ('¡', '');
console.log(text5);

//// Paso a minusculas


const textLowerCase = text5.toLowerCase();
console.log(textLowerCase);

//// Convierto el string en un aray


const myArray = textLowerCase.split(' ');

console.log(myArray);


//// Sort ordena alfabeticamente

const myArray2 = myArray.sort();
console.log(myArray2);




