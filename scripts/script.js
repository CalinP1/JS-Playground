//alert("Heya! This is just the sign that you have a JS script loaded");


// JS INTRO EXERCITII

//Operatori Aritmetici
// EXERCITIUL 1 
 var numarul1=3;
 var numarul2=4;

var suma=numarul1+numarul2;
console.log(suma);

//EXERCITIUL 2

var numar1 = 2;
var numar2 = 3;
var numar3 = 5;
var medie = (numar1+numar2+numar3)/3;
console.log(medie);

// Operatori de atribuire

//EXERCITIUL 1

var n=5;
console.log(n);

//EXERCITIUL 2

var y=10;
y+=2;
console.log(y);

//Operatori de comparare

//EXERCITIUL 1

var a =2;
var b =3;
if(a>b){
    console.log("a este mai mare decat b");
}
else if(a<b){
    console.log("a este mai mic decat b");
}
else{
    console.log("Cele doua numere sunt egale");
}

//Exercitiul 2

/*varsta = prompt("care este varsta?");
if(varsta >= 18){
    console.log("Este major");
}
else{
    console.log("Este minor");
}
*/
//Operatori logici
//Exercitiul 1
a =50;
b=60;
if(a>10 && b<100){
    console.log("mesaj1");
}
else{
    console.log("mesaj2");
}

//Exercitiul 2

a =1;
if(a !=0 ){
    console.log("Numarul este diferit de 0");
}



//JS IF & LOOPS


//EXERCITIUL 1
console.log("Exercitiul 1")
var c = 1;

do{
    console.log(c);
    c++;
}while(c<=10);

//EXERCITIUL 2
console.log("Exercitiul 2");
for(let i=0;i<=20;i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//EXERCITIUL 3
/*
primul = prompt("Primul numar = ");
alDoilea = prompt("Al doilea numar =");
if(primul > alDoilea){
    for(i=alDoilea;i<=primul;i++){
        console.log(i);
    }
}
else if(primul == alDoilea){
    console.log(primul);
}
else{
    for(i=primul;i<=alDoilea;i++){
        console.log(i);
    }
}
*/
//EXERCITIUL 4

//EXERCITIUL 5

 var t = prompt("Care este numarul pentru tabla inmultirii?");
console.log("Exercitiul 5");
 for(i=0;i<=9;i++){
    var inmultire = t*i;
    console.log(t + "x" + i + "=" + inmultire );
 }