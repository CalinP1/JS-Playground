// Tema suport curs

// Exercitiul 1 
/* O functie care verifica daca numarul primit ca si parametru este mai mic sau mai mare decat 10 
// Function is called, the return value will end up in x
function verifZece(x){

    if (x>10){
        console.log("Numarul este mai mare decat 10");
    }
    else if(x==10){
        console.log("Numarul este egal cu 10");
    }
    else{
        console.log("Numarul este mai mic decat 10");
    }
}
let numar = Number(prompt("Care este numarul pe care vrei sa il compari cu 10?"));
verifZece(numar);

*/
//Exercitul 2 din curs
 //Exercitiul 6 de pe Discord

/* O functie care verifica daca numarul este prim. Returneaza true daca numarul este prim si false daca acesta nu este numar prim 

function numarPrim(x){
    let ver=0;
    for(let i=2;i<=x/2;i++){
        if(x%i == 0){
            ver=1;
        }
        if(ver ==1)
            break;
    }
    if(ver==0){
        return 1;
    }
    else{
        return 0;
    }
}
let ex2 = Number(prompt("Alege numarul pe care sa il verificam daca este prim sau nu"));
if(numarPrim(ex2) == 1){
    console.log("Numarul este prim");
}
else{
    console.log("Numarul nu este prim");
}
*/
//EXercitiul 3 din curs  
//Exercitiul 5 de pe Discord 

/* O functie care primeste un numar si face suma tuturor numerelor dintre 0 si numarul ales

function sumaNumerelor(x){
    let suma = 0;
    for(let i=0;i<=x;i++){
        suma = suma +i;
    }
    return suma;
}

let ex3 = Number(prompt("Alege numarul pentru care sa facem suma numerelor de la 0 pana la acesta"));
console.log("Suma numerelor este = ",sumaNumerelor(ex3));
*/
//Exercitii de pe Discord

//Exercitiul 4
/* Functide care afiseaza daca un numar este par sau nu 

function numarPar(x){
    if(x%2 == 0){
        return 1;
    }
    else{
        return 0;
    }
}
let ex4 = Number(prompt("Ce numar trebuie verificat daca este par?"));
if(numarPar(ex4)==1){
    console.log("Numarul este par");
}
else{
    console.log("Numarul este impar");
}
*/
//Exercitiul 5
/* O functie care primeste 2 numere, face suma acestora si o inmulteste cu 0.1 

function sumaInmultita(a,b){
    let suma = a + b;
    return (suma*0.1);
}

let numarSuma1 = Number(prompt("Exercitiul 5: Primul numar pentru suma"));
let numarSuma2 = Number(prompt("Exercitiul 5: Al doilea numar pentru suma"));

console.log("Suma dintre numere inmultita cu 0.1 este = ",sumaInmultita(numarSuma1,numarSuma2));
*/
//Exercitiul 6
/* O functie care calculeaza procentul dintr-un numar 

function procentDinNumar(numar, procent){
    let procentual = (procent * numar)/100;
    return procentual;
}
let numarPtProcent = Number(prompt("Introdu numarul din care sa se calculeaza procentul"));
let procentul = Number(prompt("Introdu procentul care sa se foloseasca la calcul"));
console.log("Procentul calculat este ",procentDinNumar(numarPtProcent,procentul));

*/
//Exercitiul 7
/* O functie care primeste 3 numere si il returneaza pe cel mai mare dintre acestea 

function comparareDeTreiNumere (a,b,c){

    if(a >= b && a >= c){
        return a;
    }
    else if( b >= a && b >= c){
        return b;
    }
    else if( c >= a && c>=b){
        return c;
    }
}
let primulNumarPentruComparatie = Number(prompt("Primul numar din cele 3 folosite la comparatie"));
let alDoileaNumarPentruComparatie = Number(prompt("Al doilea numar din cele 3 folosite la comparatie"));
let alTreileaNumarPentruComparatie = Number(prompt("Al treilea numar din cele 3 folosite la comparatie"));

console.log("Cel mai mare numar din cele 3 este ",comparareDeTreiNumere(primulNumarPentruComparatie, alDoileaNumarPentruComparatie,alTreileaNumarPentruComparatie));
*/
//Exercitiul 8
/* Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz. 

function verifCuZero (x){
    if(x<0){
        return console.log("Numarul este mai mic decat 0");
    }
    else if(x>0){
        return console.log("Numarul este mai mare decat 0");
    }
    else{
        return console.log("Numarul este 0");
    }
}
let numarPtComparatiaCuZero = Number(prompt("Care este numarul pe care vrei sa il compari cu 0?"));
verifCuZero(numarPtComparatiaCuZero);
*/
//Exercitiul 9
/* 8. Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru 

function numereDintreUnMinSiMax(numar1, numar2)
{   let nr = 0;
    if(numar1>numar2){
        for(let i=numar2;i<=numar1;i++){
            if(i%2==0){
                 console.log("Numar par -> ",i);
                 nr=1;
            }
    
        }
    }
    else if (numar1 == numar2){
        if(numar1 %2 == 0){
             console.log("Numar par -> ",numar1);
             nr=1;
        }
    }
    else{
        for(let i=numar1;i<=numar2;i++){
            if(i%2 == 0){
                 console.log("Numar par -> ",i);
                    nr =1;
            }
        }
    }
    if(nr==0){
        console.log("Nu avem numere pare");
    }

}
let primulNumarMinMax = Number(prompt("Primul numar din functia min-max"));
let alDoileaNumarMinMax = Number(prompt("Al doilea numar din functia min-max"));
numereDintreUnMinSiMax(primulNumarMinMax,alDoileaNumarMinMax);
*/
//Exercitiul 10
// 9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.
/* 
function sirNumereCrescator(a,b,c){
    if(a <b && a<c && b<c){
        console.log(a + "<"+b+"<"+c);
    }
    else if(a <b && a<c && c<b){
        console.log(a + "<"+c+"<"+b);
    }
    else if(a <b && a<c && c==b){
        console.log(a + "<"+c+"="+b);
    }
    else if(a ==b && a<c){
        console.log(a + "="+b+"<"+c);
    }
    else if(a ==c && a<b){
        console.log(a + "="+c+"<"+b);
    }
    else if(b<a && b<c && a <c){
        console.log(b+"<"+a+"<"+c);
    }
    else if(b<a && b<c && c<a){
        console.log(b+"<"+c+"<"+a);
    }
    else if(b<a && b<c && c==a){
        console.log(b+"<"+c+"="+a);
    }
    else if(b==a && b<c){
        console.log(b+"="+a+"<"+c);
    }
    else if(b==c && b<a){
        console.log(b+"="+c+"<"+a);
    }
    else if(c<a && c<b && b<a){
        console.log(c+"<"+b+"<"+a)
    }
    else if(c<a && c<b && a<b){
        console.log(c+"<"+a+"<"+b)
    } else if(c<a && c<b && a==b){
        console.log(c+"<"+a+"="+b);
    }
    else if(c==a && c<b){
        console.log(c+"="+a+"<"+b);
    }
    else if(c==b && c<a){
        console.log(c+"="+b+"<"+a);
    }
    else if(c==b && c==a){
        console.log(c+"="+b+"="+a);
    }
}
let numarul1DinSirCrescator = Number(prompt("Primul numar din sirul de 3 care trebuie ordonat crescator"));
let numarul2DinSirCrescator = Number(prompt("Al doilea numar din sirul de 3 care trebuie ordonat crescator"));
let numarul3DinSirCrescator = Number(prompt("Al treilea numar din sirul de 3 care trebuie ordonat crescator"));
sirNumereCrescator(numarul1DinSirCrescator,numarul2DinSirCrescator,numarul3DinSirCrescator);




*/
//Exercitiul 11
/* 10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.

function sirNumereDescrescator(a,b,c){
    if(a >b && a>c && b>c){
        console.log(a + ">"+b+">"+c);
    }
    else if(a >b && a>c && c>b){
        console.log(a + ">"+c+">"+b);
    }
    else if(a >b && a>c && c==b){
        console.log(a + ">"+c+"="+b);
    }
    else if(a ==b && a>c){
        console.log(a + "="+b+">"+c);
    }
    else if(a ==c && a>b){
        console.log(a + "="+c+">"+b);
    }
    else if(b>a && b>c && a >c){
        console.log(b+">"+a+">"+c);
    }
    else if(b>a && b>c && c>a){
        console.log(b+">"+c+">"+a);
    }
    else if(b>a && b>c && c==a){
        console.log(b+">"+c+"="+a);
    }
    else if(b==a && b>c){
        console.log(b+"="+a+">"+c);
    }
    else if(b==c && b>a){
        console.log(b+"="+c+">"+a);
    }
    else if(c>a && c>b && b>a){
        console.log(c+">"+b+">"+a)
    }
    else if(c>a && c>b && a>b){
        console.log(c+">"+a+">"+b)
    } else if(c>a && c>b && a==b){
        console.log(c+">"+a+"="+b);
    }
    else if(c==a && c>b){
        console.log(c+"="+a+">"+b);
    }
    else if(c==b && c>a){
        console.log(c+"="+b+">"+a);
    }
    else if(c==b && c==a){
        console.log(c+"="+b+"="+a);
    }
}
let numarul1DinSirDescrescator = Number(prompt("Primul numar din sirul de 3 care trebuie ordonat descrescator"));
let numarul2DinSirDescrescator = Number(prompt("Al doilea numar din sirul de 3 care trebuie ordonat descrescator"));
let numarul3DinSirDescrescator = Number(prompt("Al treilea numar din sirul de 3 care trebuie ordonat descrescator"));
sirNumereDescrescator(numarul1DinSirDescrescator,numarul2DinSirDescrescator,numarul3DinSirDescrescator);

//Exercitiul 12
// 11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.

function tablaInmultirii(x)
{
    for(let i=0;i<=9;i++){
        var inmultire = x*i;
        console.log(x + "x" + i + "=" + inmultire );
    }
}
nrTablaInmultirii = Number(prompt("Pentru ce numar sa se faca tabla inmultirii?"));
tablaInmultirii(nrTablaInmultirii);


//Exercitiul 13
//12. Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, iar la final afiseaza cate locuri libere au ramas (total).


//Exercitiul 14
//13. Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.

//Exercitiul 15
//14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.

function calculVarsta(x){
    let anCurent = 2023;
    let varsta = 2023-x;
    return varsta;
}
let varsta = Number(prompt("Care este anul nasterii tale?"));
console.log("Varsta ta este: ",calculVarsta(varsta));

//Exercitiul 16
//15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru (caine sau pisica / daca alegi si altceva, go for it).

function calcVarstaAnimal(x){
    let factor = 7;
    return factor * x;
}
let varstaAnimal = Number(prompt("Cati ani omenesti are animalutul tau?"));
console.log("Animalul tau are varsta de:",calcVarstaAnimal(varstaAnimal)," ani");*/