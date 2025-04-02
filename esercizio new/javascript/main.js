// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,

// - per i multipli di 4 stampi "Hey" al posto del numero
// - per i multipli di 9 stampi "Man" al posto del numero
// - per i multipli di 4 e di 9 stampi "Hey Man" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo
// faremmo "a mano"
// Buon lavoro e buon divertimento!

//RACCOLTA DATI

//creo varibaili che mi servono

let start = 1;
console.log(start);

let finish = 100;
console.log(finish);

//creo condizioni

start = start % 4 === 0;
start = start % 9 === 0;

//SVOLGIMENTO
