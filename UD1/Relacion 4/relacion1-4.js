//ejercicio 1
/**
 * Muestra el resultado de una suma de parametros que le pasamos
 * @param  {...any} args 
 * @returns 
 */
function sum(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado += args[i];
  }
  return resultado;
}
// ejercicio 2
/**
 * Funcion que solo suma los numeros de una serie de argumentos
 * @param  {...any} args 
 * @returns 
 */
function addOnlyNums(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      resultado += args[i];
    }
  }
  return resultado;
}
// ejercicio 3
/**
 * Funcion que cuenta los argumentos que le vamos pasando
 * @param  {...any} args 
 * @returns 
 */
function countTheArgs(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado++;
  }
  return resultado;
}

// ejercicio 4
/**
 * Funcion que combina 2 arrays
 *
 */
 function combineTwoArrays(arr1, arr2) {
            let combinedArray = [];

            for (let i = 0; i < arr1.length; i++) {
                combinedArray.push(arr1[i]);
            }

            for (let i = 0; i < arr2.length; i++) {
                combinedArray.push(arr2[i]);
            }
            
            return combinedArray;
        }

// ejercicio 5


// ejercicio 6
/**
 * Funcion que comprueba si un numero es divisible entre 3
 
 */
function divisible(numero) {
    let divisible=true;
    if(numero%3==0){
        divisible=true;
    }else {
        divisible=false;
    }
    return divisible;
}

// ejercicio 7
/**
 * Funcion que comprueba si dos numeros son divisibles entre ellos
 
 */
function divisibleEntre(num1,num2) {
    let divisibleEntre=true;
    if (num1%num2===0) {
        divisibleEntre=true;
    } else {
        divisibleEntre=false;
    }
    return divisibleEntre;
}