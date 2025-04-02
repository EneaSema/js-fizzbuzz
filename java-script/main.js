// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,

// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo
// faremmo "a mano"
// Buon lavoro e buon divertimento!

// RACCOLTA DATI

//creo variabile iniziale e quella finale senza usare const

let start = 1;
console.log(start);

let finish = 100;
console.log(finish);

//creo i 2 parametri richiesti

const requestFirst=3;
const requestSecond=5;



// SVILUPPO

for (start = 1; start <= finish; start++;) {
  console.log(start);
};


// OUTPUT

// outputtext = Fizz quando numero multiplo di 3
// outputtext = Buzzz quando numero multiplo di 5
// outputtext = FizzBuzz quando numero multiplo di 3 e 5