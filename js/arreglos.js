class Arreglos {
   mayor() {
      // Presenta el elemento mayor de un arreglo de numeros
      // Separar cada numero en un arreglo y presentar el mayor
      // 12;3;7;23
      // [12,3,7,23]
      // Respuesta: El mayor es 23
      let num = document.getElementById("num1").value;

      let arreglo = num.split(";");

      let mayor = parseInt(arreglo[0]);

      for (let i = 1; i < arreglo.length; i++) {
         if (parseInt(arreglo[i]) > mayor) {
            mayor = parseInt(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `El mayor es ${mayor}`;
   }
   menor() {
      // Presenta el elemento menor de un arreglo de numeros
      let num = document.getElementById("num1").value;
      let arreglo = num.split(";");

      let menor = parseInt(arreglo[0]);

      for (let i = 1; i < arreglo.length; i++) {
         if (menor > parseInt(arreglo[i])) {
            menor = arreglo[i];
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `El menor es: ${menor}`;
   }
   promedio() {
      // Se ingresa varios numeros en un arreglo y se pide el promedio de todos ellos
      let num = document.getElementById("num1").value;
      let arreglo = num.split(";");
      let suma = 0;

      for (let i = 0; i < arreglo.length; i++) {
         suma += parseInt(arreglo[i]);
      }

      let promedio = suma / arreglo.length;
      let resp = document.getElementById("resp");
      resp.innerHTML = `El promedio es: ${promedio}`;
   }
   nombreAlReves() {
      // Dado un arreglo de nombres presentar cada nombre al revés
      let arreglo = document.getElementById("num1").value.split(";");

      let resp = document.getElementById("resp");

      let nombres = [];

      for (let i = 0; i < arreglo.length; i++) {
         nombres.push(arreglo[i].split("").reverse().join(""));
      }

      resp.innerHTML = nombres.join(";");
   }
   buscar() {
      /* 
      Dado un arreglo y elemento a buscar. Se pide presentar la posicion del elemento buscado en el arreglo
      Ejemplo: arreglo=[20,40,60,80] buscado=60 respuesta=2 
      */

      let arreglo = document.getElementById("num1").value.split(";");
      let resp = document.getElementById("resp");
      let buscado = document.getElementById("num2").value;

      let posiciones = [];

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == buscado) {
            posiciones.push(i);
         }
      }

      if (posiciones.length > 0) {
         resp.innerHTML = `Se encuentra en la posición: ${posiciones.join(
            ", "
         )}`;
      } else {
         resp.innerHTML = "No se encontró en el arreglo.";
      }
   }
   adivinaNumero() {
      /* Generar con random un arreglo de 100 numeros enteros. Se pide presentar la posición ingresar un numero a adivinar si lo encuentra presenta un mensaje de adivinaste caso contrario error no adivinaste */

      let arreglo = [];

      for (let i = 0; i < 100; i++) {
         arreglo.push(Math.floor(Math.random() * 100));
      }

      let resp = document.getElementById("resp");
      let num = document.getElementById("num1").value;

      let condi = false;

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == num) {
            condi = true;
         }
      }

      if (condi) {
         resp.innerHTML = "Felicitaciones Adivinaste";
      } else {
         resp.innerHTML = "Error No adivinaste";
      }
   }
   insertar() {
      /* Dada un arreglo y un dato a insertar en una posicion del arreglo.
      Se pide insertar el dato en el arreglo a partir de la posicion de indicada
      Ejemplo: arreglo = [20,40,60]  datoInsertar=50 posicionInidicada=2 
      respuesta=[20,40,50,60] 
      */

      let arreglo = document.getElementById("num1").value;

      let arreglo2 = arreglo.split(";");

      let datoInsertar = document.getElementById("num2").value;

      let posicionIndicada = document.getElementById("num3").value;

      arreglo2.splice(posicionIndicada, 0, datoInsertar);

      let resp = document.getElementById("resp");

      resp.innerHTML = arreglo2;
   }
   eliminar() {
      /* Dado un arreglo y un dato a eliminar en un arreglo.
      Se pide eliminar el dato en el arreglo a partir de la posicion encontrada.
      Ejemplo: arreglo = [20,40,60]  eliminar=40
      respuesta = [20, 60]; 
      */

      let datos = document.getElementById("num1").value;
      let arreglo = datos.split(";");

      let eliminar = document.getElementById("num2").value;

      let nuevoArreglo = [];

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] !== eliminar) {
            nuevoArreglo.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");
      resp.innerHTML = nuevoArreglo.join(";");
   }
   base10_2() {
      /* Se ingresa un numero en base 10 y se retorna el numero a base 2
      ejemplo= numBase10="5"   respBase2="101" */
      let numBase10 = document.getElementById("num1").value;

      let resp = document.getElementById("resp");

      let numBase2 = [];

      while (numBase10 > 0) {
         numBase2.push(numBase10 % 2);
         numBase10 = Math.floor(numBase10 / 2);
      }

      resp.innerHTML = numBase2.reverse().join("");
   }
   base2_10() {
      /* Se ingresa un numero en base 2 y se retorna el numero a base 10
      ejemplo= numBase2="101"   respBase10="5" */
      let base2 = document.getElementById("num1").value;

      let base10 = 0;

      let exponente = 0;

      while (base2 > 0) {
         base10 = base10 + (base2 % 10) * 2 ** exponente;
         base2 = Math.floor(base2 / 10);
         exponente++;
      }

      resp.innerHTML = base10;
   }
   sueldosEmpleados() {
      /* 
      Dado un arreglo de empleados se pide el promedio de los sueldos donde el sueldo=valorHora*numeroHoras.

      empleados=[
         {nombre:"ana",vh:5,nh:40},
         {nombre:"ana",vh:10,nh:40},
         {nombre:"ana",vh:2,nh:40}
      ]

      respuesta=(5*40+10*40+2*40)/3
      */

      let nombre = document.getElementById("num1").value;
      //  let nombre = 'Daniel; Ricardo; Ambar'
      let vh = document.getElementById("num2").value;
      //  let vh = '5; 10; 2'
      let nh = document.getElementById("num3").value;
      //  let nh = '40; 40; 40'
      let resp = document.getElementById("resp");

      let name = nombre.split(";");
      let valorHora = vh.split(";");
      let numeroHora = nh.split(";");

      let vt = 0;
      let vtt = 0;
      let valorTotal = 0;
      for (let i = 0; i < numeroHora.length; i++) {
         vt = parseInt(valorHora[i]) * parseInt(numeroHora[i]);
         valorTotal += vt;
      }

      vtt = parseInt(valorTotal / numeroHora.length);
      resp.innerHTML = `El promedio de los sueldos de [${name}] es ${vtt}`;
   }
   sumaDivisores() {
      // Dado un arreglo de números indicar la suma de los divisores de cada número
      let arreglo = document.getElementById("num1").value.split(";");
      let suma = [];

      for (let i = 0; i < arreglo.length; i++) {
         let sumaDivisores = 0;
         for (let j = 1; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               sumaDivisores += j;
            }
         }
         suma.push(sumaDivisores);
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `La suma de cada numero es: ${suma.join(", ")}`;
   }
   perfectos() {
      // Dado un arreglo de numeros indicar cuantos son perfectos
      let arreglo = document.getElementById("num1").value.split(";");

      let perfectos = [];

      for (let i = 0; i < arreglo.length; i++) {
         let sumaDivisores = 0;
         for (let j = 1; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               sumaDivisores += j;
            }
         }
         if (sumaDivisores == arreglo[i]) {
            perfectos.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      if (perfectos.length == 0) {
         resp.innerHTML = "No hay perfectos";
      } else {
         resp.innerHTML = `Perfectos: ${perfectos.join(", ")}`;
      }
   }
   primos() {
      // Dado un arreglo de numeros indicar cuantos son primos
      let numeros = document.getElementById("num1").value;

      let arreglo = numeros.split(";");

      let primo = [];

      for (let i = 0; i < arreglo.length; i++) {
         let contador = 0;
         for (let j = 2; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               contador++;
            }
         }

         if (contador == 0) {
            primo.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      if (primo.length == 0) {
         resp.innerHTML = "No hay primos";
      } else {
         resp.innerHTML = `Primos: ${primo.join(", ")}`;
      }
   }
   repeticion_numero_arreglo() {
      /* Dado un arreglo y un número indicar cuántas veces se repite el numero
      Ejemplo: arreglo=[40,20,30,20,20,10]  numero=20   resp=3 */

      let arreglo = document.getElementById("num1").value.split(";");

      let numero = document.getElementById("num2").value;

      let contador = 0;

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == numero) {
            contador++;
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `El numero ${numero} se repite ${contador} veces`;
   }
   vuelto_billetes() {
      /* Dado un costo y su pago presentar el vuelto en la minima cantidad de billetes 

      billetes: 1,5,10,20,50 hasta 100

      Ejemplo:70.50  
      respuesta="1 billete de 50, 1 billete de 20 y 50 centavos" 

      costo=70.50

      pago=100

      vuelto= 1 billete de 20, 1 billete de 10, 1 billete de 5 y 50 centavos
      
      */

      let costo = parseFloat(document.getElementById("num1").value);
      let pago = parseFloat(document.getElementById("num2").value);
      let vuelto = pago - costo;
      let billetes = [100, 50, 20, 10, 5, 1];
      let monedas = [0.5, 0.25, 0.1, 0.05, 0.01];
      let resp = document.getElementById("resp");
      let respuesta = "";

      for (let i = 0; i < billetes.length; i++) {
         let cantidadBilletes = Math.floor(vuelto / billetes[i]);
         if (cantidadBilletes > 0) {
            if (respuesta !== "") {
               respuesta += ", ";
            }
            respuesta += `${cantidadBilletes} billete de ${billetes[i]}`;
            vuelto -= cantidadBilletes * billetes[i];
         }
      }

      vuelto = Math.round(vuelto * 100) / 100;
      if (vuelto > 0) {
         respuesta += `${respuesta !== "" ? ", " : ""}${vuelto} centavos`;
      }

      vuelto = pago - costo;

      resp.innerHTML = `${vuelto} = ${respuesta}`;
   }
}

const arreglos = new Arreglos();
