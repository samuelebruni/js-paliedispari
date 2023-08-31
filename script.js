//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


const selection = prompt('scrivi pari o dispari');
console.log('utente sceglie', selection);
const userNumber = Number(prompt('inserisci un numero da 1 a 5'));

if (userNumber > 5){
    alert('il numero da te inserito e maggiore di 5 o minore di 1, ricarica la pagina')
} else {
    console.log("l'utente ha inserito il numero ", userNumber);
}

function randomNumbers() {
    return Math.floor((Math.random() * 5) + 1);
}

pcNumber = randomNumbers();
console.log("il numero casuale del pc è ", pcNumber);


function sommaNumeri(num1, num2) {
    const result = num1 + num2
    return result;
}

somNumber = sommaNumeri(userNumber, pcNumber);
console.log('la somma dei numeri è ',somNumber);

function isEven(first_number) {
    if (first_number % 2 === 0) {
        return 'pari'
      }
    return 'dispari'    
}
const finalResult = isEven(somNumber);
console.log('vince', finalResult, 'dato che', somNumber, 'è un numero', finalResult);

//finish first exercise

//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


const word = prompt('digita una parola');

function palindromaWord() {
    return word.split('').reverse().join('')
} 
console.log(palindromaWord(word))


if (word === palindromaWord(word)) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

//finish second exercise
