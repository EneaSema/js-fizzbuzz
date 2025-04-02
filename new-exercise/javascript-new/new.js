// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,

// - per i multipli di 4 stampi "Hey" al posto del numero
// - per i multipli di 6 stampi "Man" al posto del numero
// - per i multipli di 4 e di 6 stampi "Hey Man" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo
// faremmo "a mano"
// Buon lavoro e buon divertimento!

// RACCOLTA DATI

//creo le mie variabili
let start = 1;
console.log(start);
const finish = 100;
console.log(start);

//creo le mie variabili bolleane

const multiple4 = start % 4 === 0;
console.log(multiple4);
const multiple6 = start % 6 === 0;
console.log(multiple6);

//creo il processo di conta tramite il for

for (start = start; start <= finish; start++) {
  console.log(start);
}
