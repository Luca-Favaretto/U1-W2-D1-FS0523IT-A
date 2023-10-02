/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Marco";
let cognome = "Rossi";
let soprannome = "Magico";
// variabile di tipo "string" contenente dei caratteri che devono essere contenuti nelle appposite virgolette come da esempio
let num = 1;
let num2 = 1.3;
// variabile di tipo "number" contenente valori numerici senza bisogno di definizioni più specifiche come altri linguaggi di
// programmazione (es flot, long, double. ecc)
let boleano = true;
let boleano2 = false;
// variabili di tipo "bolean" contenente solo due possibili valori true o false
let ancoraDaDefinire;
ancoraDaDefinire = 5;
// variabile di tipo "undefined" creata senza un valore che potra essere aggiunto in seguito
let definito = null;
//variabile di tipo "null" creata definendo intenzionalmente l'assenza di valore
let simbolo = Symbol();
// variabile di tipo symbol entita unica

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let mioNome = "Luca";
console.log(mioNome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 12;
let num4 = 20;
console.log(num3 + num4);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

mioNome = "Favaretto";

const MioCogmome = mioNome;
// MioCogmome = Rossi; commenato per non dare errore che bloccherebbe la console
console.log(MioCogmome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);

let uguaglianza =
  name1.toLowerCase() === name2.toLowerCase() ? "uguali" : "diverse";
console.log(
  `portando tutti i caratteri in minuscolo le due variabili sono  ${uguaglianza}`
);
