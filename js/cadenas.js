class Cadenas {
   vocalesConsonantes() {
      // Presenta cuantas vocales y consonantes hay en una frase

      let frase = document.getElementById("num1").value;

      let frase2 = frase.replace(/ /g, "").toLowerCase();

      let vocales = 0;

      let consonantes = 0;

      for (let i = 0; i < frase2.length; i++) {
         if (
            frase2[i] == "a" ||
            frase2[i] == "e" ||
            frase2[i] == "i" ||
            frase2[i] == "o" ||
            frase2[i] == "u"
         ) {
            vocales++;
         } else {
            if (frase2[i] >= "a" && frase2[i] <= "z") {
               consonantes++;
            }
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `La frase tiene ${vocales} vocales y ${consonantes} consonantes`;
   }
   palabrasFrase() {
      // Presenta cuantas palabras hay en una frase considere un espacio por palabra

      // Ejemplo: frase="hola que tal"  palabras=3

      let frase = document.getElementById("num1").value;

      let frase2 = frase.replace(/  +/g, " ").trim();

      let palabras = frase2.split(" ").length;

      let resp = document.getElementById("resp");

      resp.innerHTML = `La frase tiene ${palabras} palabras`;
   }
   caracterEspecial() {
      // Presenta cuantas, "," "." ";" ":" hay en una frase

      let frase = document.getElementById("num1").value;

      let frase2 = frase.replace(/ /g, "");

      let caracteres = 0;

      for (let i = 0; i < frase2.length; i++) {
         if (
            frase2[i] == "," ||
            frase2[i] == "." ||
            frase2[i] == ";" ||
            frase2[i] == ":"
         ) {
            caracteres++;
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `La frase tiene ${caracteres} caracter especial`;
   }
   fraseIgual() {
      /* 
      Indicar si una frase se lee igual de inicio a fin o de fin a inicio
      ejemplo: frase="ana" respuesta="Se lee igual"
      */

      let frase = document.getElementById("num1").value;

      let frase2 = frase.replace(/ /g, "").toLowerCase();

      let alReves = frase2.split("").reverse().join("");

      let resp = document.getElementById("resp");

      if (frase2 == alReves) {
         resp.innerHTML = `Se lee igual`;
      } else {
         resp.innerHTML = `No se lee igual`;
      }
   }
   fraseInvertida() {
      /*  Presenta la copia de una frase invertida en otra variable
      ejemplo: frase="hola"   salida="aloh" */

      let frase = document.getElementById("num1").value;

      let salida = "";

      for (let i = frase.length - 1; i >= 0; i--) {
         salida += frase[i];
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `La frase invertida es: ${salida}`;
   }
   concatenarFrases() {
      /* Dada dos frases se crea una tercera en base a las dos
      ejemplo: frase="Hola "  frase2="que tal"  salida="Hola que tal" */

      let frase = document.getElementById("num1").value;

      let frase2 = document.getElementById("num2").value;

      let salida = frase + " " + frase2;

      let resp = document.getElementById("resp");

      resp.innerHTML = salida;
   }
   buscarCaracter() {
      /* Dada una frase y un caracter a buscar. Se pide presentar
      la posicion de caracter en la frase
      Ejemplo: frase = "hola que tal"  caractBuscar="q" respuesta=5  */

      // Ejemplo: frase="hola mundo" caracter="o" respuesta=Se encuentra en la posicion 1 y 8

      let frase = document.getElementById("num1").value;

      let caracter = document.getElementById("num2").value;

      let pos = [];

      for (let i = 0; i < frase.length; i++) {
         if (frase[i] === caracter) {
            pos.push(i);
         }
      }

      let resp = document.getElementById("resp");

      if (pos.length === 0) {
         resp.innerHTML = `No se encuentra el caracter en la frase`;
      } else {
         resp.innerHTML = `Se encuentra en la posición ${pos}`;
      }
   }
   buscarSubcadena() {
      /* Dada una frase y una subacadena a buscar. Se pide presentar
      la posicion de la subcadena en la frase
      Ejemplo: frase = "hola que tal"  subCadenBuscar="que" respuesta=5 */

      let frase = document.getElementById("num1").value;

      let subCadenBuscar = document.getElementById("num2").value;

      let resp = document.getElementById("resp");

      let posicion = frase.indexOf(subCadenBuscar);

      if (posicion === -1) {
         resp.innerHTML = `No se encuentra la subcadena`;
      } else {
         resp.innerHTML = `Se encuentra en la posición ${posicion}`;
      }
   }
   insertarSubcadena() {
      /* Dada una frase y una subcadena a insertar en una posicion de la frase.
      Se pide insertar la subcadena en la frase a partir de la posicion de indicada
      Ejemplo: frase = "hola  tal"  subCadenaBuscar="que" posicionInidicada=5 
      respuesta="hola que tal" */

      let frase = document.getElementById("num1").value;

      let subCadenBuscar = document.getElementById("num2").value;

      let posicion = document.getElementById("num3").value;

      let resp = document.getElementById("resp");

      let frase2 = frase.slice(0, posicion);

      let frase3 = frase.slice(posicion, frase.length);

      let salida = frase2 + subCadenBuscar + frase3;

      resp.innerHTML = salida;
   }
   eliminarSubcadena() {
      /* Dada una frase y una subacadena a eliminar en la frase.
      Se pide eliminar la subcadena en la frase a partir de la posicion encontrada de la subcadena
      Ejemplo: frase = "hola que tal"  subCadenaEliminar="que" 
      respuesta="hola tal" */

      let frase = document.getElementById("num1").value;

      let subCadenEliminar = document.getElementById("num2").value;

      let resp = document.getElementById("resp");

      let posicion = frase.indexOf(subCadenEliminar);

      let frase2 = frase.slice(0, posicion);

      let frase3 = frase.slice(
         posicion + subCadenEliminar.length,
         frase.length
      );

      let salida = frase2 + frase3;

      if (posicion === -1) {
         resp.innerHTML = `No se encuentra la subcadena`;
      } else {
         resp.innerHTML = salida;
      }
   }
   fraseArreglo() {
      /* Dada una frase y un caracter separador. Se pide pasar esa frase a un arreglo tal como se indica en el ejemplo 
      Ejemplo:
      frase = "20;40;50;60"  caracterSeparador=";" 
      Respuesta=["20","40","50","60"] */

      let frase = document.getElementById("num1").value;

      let caracterSeparador = document.getElementById("num2").value;

      let arreglo = frase.split(caracterSeparador);

      let resp = document.getElementById("resp");

      resp.innerHTML = `[${arreglo}]`;
   }
   sumaDigitoFrase() {
      /* Dada una cantidad ingresada en una frase.
      Se pide presentar la suma de los digitos que tiene la frase 
      Ejemplo: frase = "123"  Respuesta=6  */

      let frase = document.getElementById("num1").value;

      let resp = document.getElementById("resp");

      let suma = 0;

      for (let i = 0; i < frase.length; i++) {
         suma += Number(frase[i]);
      }

      resp.innerHTML = `La suma de los digitos es: ${suma}`;
   }
}

const cadenas = new Cadenas();
