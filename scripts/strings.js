//Exercitiul 1
/* Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un singur șir de caractere. Apoi, determină lungimea șirului rezultat și afișează în consolă.*/

var primulCuv = prompt("Scrie primul cuvant");
var alDoileaCuv = prompt("Scrie al doilea cuvant");

console.log("Cuvintele concatenate sunt:" + primulCuv+alDoileaCuv+" iar lungimea noului sir obtinut este de "+ (primulCuv+alDoileaCuv).length);

//Exercitiul 2
/*Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare caracter al șirului ca element separat. Apoi, apelează funcția cu un șir introdus de utilizator și afișează array-ul rezultat în consolă. */

function separareCuvinte(x){
    console.log( x.split(" "));
}
var sirCuvinte = prompt("Introdu o propozitie pentru a fi impartit in cuvinte");
separareCuvinte(sirCuvinte);

//Exercitiul 3
/* Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter al șirului în ordine inversă, folosind un loop. */
var cuvNou=[];
function sirInvers(x){
    for(var i=x.length-1;i>=0;i--)
    {
         cuvNou= cuvNou +x[i];
    }
    console.log(cuvNou);
}
var propozitieInvers = prompt("Introdu o propozitie pt procesare");
sirInvers(propozitieInvers);

//Exercitiul 4
/*Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi (reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care să conțină informații despre persoană, folosind proprietățile obiectului. */

var persoana={
    name: "Andrei Martinel",
    age: "44 de ani",
    hobbys: "tenisul, drumetiile si pictura cu ulei",
}

console.log("Numele persoanei este "+persoana.name+" ,are varsta de "+persoana.age+" iar hobby-urile acestuia sunt:"+persoana.hobbys);

//Exercitiul 5
/* Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator. Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.*/

var sirCaractere = prompt("Introdu o propoztie separata de spatii");

var caracterele = sirCaractere.split(" ");
for(var i =0;i<caracterele.length;i++){
    console.log("cuvantul este "+caracterele[i]+" si are lungimea de "+caracterele[i].length+" de caractere");
}