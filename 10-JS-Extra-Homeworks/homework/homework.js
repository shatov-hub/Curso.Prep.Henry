// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  for (let prop in objeto) {
    matriz.push([prop, objeto[prop]]);
  }

  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};
  let letters = "abcdefghijklmnñopqrstuvwxyz";
  for (let i = 0; i < letters.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === letters[i]) {
        count++;
      }
      if (j === string.length-1 && count > 0) {
        obj[letters[i]] = count;
      }
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      str = str + s[i];
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      str = str + s[i];
    }
  }
  return str;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strArray = str.split(" ");
  strArray = strArray.map(function(word) {
    let reversedWord = ""
    for (let i = word.length-1; i >= 0; i--) {
      reversedWord = reversedWord + word[i];
    }
    return reversedWord;
  })
  str = strArray.join(" ");
  return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString();
  let reversedNum = "";
  for (let i = numero.length-1; i >= 0; i--) {
    reversedNum = reversedNum + numero[i];
  }
  if (reversedNum === numero) {
    return "Es capicua";
  } 
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newStr = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      newStr = newStr + cadena[i];
    }
  }
  return newStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let k = 1;
  let changed = true;
  while (k < arr.length && changed === true) {
    changed = false;
    for (let i = 0; i < arr.length-k; i++) {
      if (arr[i].length > arr[i+1].length) {
        let temp = arr[i+1];
        arr[i+1] = arr[i] ;
        arr[i] = temp;
        changed = true;
      }
    }
    k++;
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        if (!arr.find(element => element === arreglo1[i])) {
          arr.push(arreglo1[i])
        }
        i++
        j = 0
      }
    }
  }
  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

