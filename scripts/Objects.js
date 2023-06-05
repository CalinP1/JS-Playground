//Exercitiul 1 Discord
/*Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
Calculează suma vârstelor tuturor studenților și returnează rezultatul. */
var studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 }
};
var suma = 0;
for(var student in studenti){
  suma +=studenti[student].varsta;
}
console.log("Suma varstei este:",suma);

//Exercitiul 2
/* Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere. */

var familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" }
};
for(var nume in familii){
  console.log("Numele tatalui cu numele mamei, concatenate:", familii[nume].numeTata + "-" +familii[nume].numeMama);
}

//Exercitiul 3
/*Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.*/

var elevi = {
  elev1: { nume: "Maria", punctaj: 80 },
  elev2: { nume: "Alex", punctaj: 95 },
  elev3: { nume: "Andrei", punctaj: 85 }
};

var mare=0;
for(var elev in elevi){
  if(elevi[elev].punctaj>=mare){
    mare = elevi[elev].punctaj;
  }
}
console.log("Punctajul maxim este:",mare);

//Exercitiul 4
/* Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.*/

var utilizatori = {
  utilizator1: { nume: "John", email: "john@example.com" },
  utilizator2: { nume: "Alice", email: "alice@example.com" }
};
var verificator = prompt("Care este adresa pe care vrei sa o verifici? *Ex: maria@example.com*");
var verif =0;
for(var utilizator in utilizatori){
  if(utilizatori[utilizator].email === verificator){
    verif =1;
  }
  if(verif ==1){
    break;
  }
}
if(verif ==1){
  console.log("Adresa de mail exista in obiect");
}
else{
  console.log("Adresa de mail nu exista in obiect");
}

//Exercitiul 5
/* Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.
*/
var angajati = {
  departament1: { nume: "John", varsta: 30 },
  departament2: { nume: "Alice", varsta: 35 },
  departament3: { nume: "Mark", varsta: 28 }
};

var nrTotalAngajati =0;
for(var angajat in angajati){
  nrTotalAngajati++;
}
console.log("Numarul total de angajati:",nrTotalAngajati);

//Exercitiul 6
/* Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
Verifică dacă un anumit departament există în obiectul companie și returnează true sau false. */
var companie = {
  departamentIT: { nume: "John", vechime: 5 },
  departamentVanzari: { nume: "Alice", vechime: 3 }
};

var verifDepartament = prompt("Ce departament vrei sa verifici daca exista?");
verif=0;
for(var dep in companie){
  if(companie[dep] === verif){
    verif=1;
  }
  if(verif=1){
    break;
  }
}
if(verif ==1){
  console.log("Departamentul cautat exista!");
}
else{
  console.log("Departamentul cautat nu exista!");
}

//Exercitiul 7
/* Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.*/
var candidati = {
  candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
};

var calificarea = prompt("Care este calificarea pe care o cauti?");
verif=0;
for(var candidat in candidati){
  var verCalificari = candidati[candidat].calificari;
  for(var calific in verCalificari){
    if(calificarea == verCalificari[calific]){
      verif =1;
    }
    if(verif ==1){
      break;
    }
    } 
   if(verif ==1){
      break;
     }  
}
if(verif==1){
  console.log("calificarea cautata exista");
}
else{
  console.log("Calificarea cautata nu exista");
}