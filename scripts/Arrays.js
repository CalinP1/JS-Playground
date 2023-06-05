//EX 1
// Scrie un program care primeste de la utilizator trei numere si le adauga intr-un array. 
//Apoi, calculeaza suma numerelor din array si afiseaza in consola
let array = [];
function sumaNumerelor(x){
    var suma =0;
    for(let i=0;i<x.length;i++){
        suma = suma + x[i];
    }
    return suma;
}
let n = Number(prompt("Cate numere vrei sa adaugi in array?"));
for(i=1;i<=n;i++){
    var numar = Number(prompt("Care este numarul pe care vrei sa il adaugi?"));
    array.push(numar);
}
console.log("suma este", sumaNumerelor(array));

//EX 2
//Scrie un program care primeste un array de la utilizator si verifica daca exista vreun element negativ
//in array. Daca da, afiseaza un mesaj corespunzator. Altfel, calculeaza media numerelor din array si o afiseaza in consola
let array2=[];
n = Number(prompt("Cate numere vrei sa adaugi in array?"));
for(i=1;i<=n;i++){
    numar = Number(prompt("Care este numarul pe care vrei sa il adaugi?"));
    array2.push(numar);
}
function verifNegativ(x){
    suma = 0;
    for(i=0;i<x.length;i++){
        if(x[i] <0){
            console.log("Avem un numar negativ");
            break;
        }
        else{
            suma = suma +x[i];
        }
    }
    if(suma!=0){
        let media = suma/x.length;
        return media;
    }
    
}
console.log("Media este",verifNegativ(array2));

//Exercitiul 3
/* Scrie un program care primeste un cod de tara de la utilizator si afiseaza numele tarii respective, impreuna cu o lista de capitale asociate. Foloseste un obiect pentru a mapa codurile de tara la numele tarilor si la array-uri cu capitalele corespunzatoare */

var tari = {
    Romania: {
        shortName: "RO",
        capital: "Bucharest",
    },
    Hungary:{
        shortName:"HU",
        capital: "Budapest",
    },
    Serbia:{
        shortName:"RS",
        capital: "Belgrad",
    },
    Ukraine:{
        shortName:"UA",
        capital: "Kiev",
    },
}
function verificareCodTara(cod){
    for(var tara in tari){
        if(cod == tari[tara].shortName){
            console.log("Codul apartine:"+ tara + " care are capitala la de " + tari[tara].capital);
        }
    }
} 
var codulTarii = prompt("Care este codul tarii pe care vrei sa il verifici?").toUpperCase();
verificareCodTara(codulTarii);

//Exercitiul 4
/* Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.*/

const produse =[
    {name: "masina1", price: 100, qty: 2 },
    {name: "masina2", price: 100, qty: 1 },
    {name: "masina3", price: 300, qty: 3 },
    {name: "masina4", price: 100, qty: 4 },
]
sumaCantitate =0;
for(var i=0;i< produse.length;i++){
      sumaCantitate +=produse[i].price*produse[i].qty;
}
console.log("Valoarea produselor este de:", sumaCantitate);

//Exercitiul 5
/* Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți (cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. Afișează numele și media fiecărui student în consolă.*/

const studentii=[
    {nume:"Marin", age: 20, note:[7,6,5,8] },
    {nume:"George", age: 23, note:[6,5,8,9]},
    {nume:"Alex", age: 25, note:[10,5,6,10]},
    {nume:"Maria", age: 21, note:[10,5,1,2,5,10]},
]

for(var i=0;i<studentii.length;i++){
    var suma=0;
    for(var j=0;j<studentii[i].note.length;j++){
        suma+= studentii[i].note[j];
    }
    console.log("Pentru studentul " + studentii[i].nume + "media este:"+ suma/studentii[i].note.length);
}
