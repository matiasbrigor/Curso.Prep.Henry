// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Matias soy yo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 24;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;// "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
  var suma = x + y;// "x" e "y" son números
  return suma;// Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
  var resta = x - y;// Resta "x" de "y" y devuelve el valor
  return resta;// Tu código:
}

function multiplica(x, y) {
  var producto = x * y;
  return producto;// Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  var cociente = x / y;
  return cociente;// Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  }// Devuelve "true" si "x" e "y" son iguales
  return false;
  // De lo contrario, devuelve "false"
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;// Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;// Devuelve "true" si el argumento de la función "num" es menor que noventa
  }// De lo contrario, devuelve "false"
  // Tu código:
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  }// De lo contrario, devuelve "false"
  // Tu código:
}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;// Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;// Devuelve "true" si "num" es par
  }// De lo contrario, devuelve "false"
  return false;// Tu código:
}

function esImpar(num) {
  if (num % 2 === 1) {
    return true;// Devuelve "true" si "num" es impar
  }// De lo contrario, devuelve "false"
  return false;// Tu código:
}

function elevarAlCuadrado(num) {
  var cuad = Math.pow(num, 2);
  return cuad;// Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  var cubo = Math.pow(num, 3);// Devuelve el valor de "num" elevado al cubo
  return cubo;// Tu código:
}

function elevar(num, exponent) {
  var pot = Math.pow(num, exponent);
  return pot;// Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

function redondearNumero(num) {
  var red = Math.round(num);
  return red;// Redondea "num" y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  var tec = Math.ceil(num);
  return tec;// Redondea "num" hacia arriba y devuélvelo
  // Tu código:
}

function agregarSimboloExclamacion(str) {
  var nuevastr = str + '!';
  return nuevastr;// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var nomape = nombre + apellido;
  return nomape;// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  var saludo = 'Hola ' + nombre´+ '!';
  return saludo;// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  var area = alto * ancho;
  return area;// Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
