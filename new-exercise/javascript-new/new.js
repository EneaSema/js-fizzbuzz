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
const finish = 24;
console.log(finish);

//creo le mie variabili bolleane

//creo i testi

const text1 = "Hey";
const text2 = "Man";

//creo il processo di conta tramite il for

for (start = start; start <= finish; start++) {
  const multiple4 = start % 4 === 0;
  const multiple6 = start % 6 === 0;
  let outputtext = start;

  if (multiple4 && multiple6) {
    outputtext = start + text1 + text2;
  } else if (multiple6) {
    outputtext = start + text2;
  } else if (multiple4) {
    outputtext = start + text1;
  }
  console.log(outputtext);
}
