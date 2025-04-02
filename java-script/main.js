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

let start;
console.log(start);

let finish = 100;
console.log(finish);

//creo i 2 parametri richiesti 3 e 5

//creo le variabili con testo

const textFizz = "Fizz";
const textBuzz = "Buzz";
const textFizzBuzz = "FizzBuzz";

// SVILUPPO

// inizio a contare da 1 fino a 100;
// controllo se il numero ottenuto è un multiplo di 3, usa formula 1 / 3 se resto 0, stampare Fizz e
// controllo se il numero ottenuto è un multiplo di 5, usa formula 1 / 5 se resto 0, stampare FizzBuzz

for (start = 1; start <= finish; start++) {
  const requestFirst = start % 3 === 0;
  const requestSecond = start % 5 === 0;
  let outputtext = start;

  if (start % 3 === 0 && start % 5 === 0) {
    // console.log(start + textFizzBuzz);
    outputtext = textFizzBuzz;
  } else if (start % 5 === 0) {
    // console.log(start + textBuzz);
    outputtext = textBuzz;
  } else if (start % 3 === 0) {
    // console.log(start + textFizz);
    outputtext = textFizz;
  }

  console.log(outputtext);
}

// OUTPUT

// outputtext = Fizz quando numero multiplo di 3
// outputtext = Buzzz quando numero multiplo di 5
// outputtext = FizzBuzz quando numero multiplo di 3 e 5
