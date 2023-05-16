/* Exercițiul 1: Calcularea sumei vârstelor
Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
Calculează suma vârstelor tuturor studenților și returnează rezultatul.*/

var studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 }
};

var sumaVarsta = studenti.student1.varsta + studenti.student2.varsta + studenti.student3.varsta;
console.log("Suma varstei tuturor studentilor este: ", sumaVarsta);


/*Exercițiul 2: Concatenarea numelor de familie
Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.*/

var familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" }
};

console.log(familii.familie1.numeTata + "-" + familii.familie1.numeMama);
console.log(familii.familie2.numeTata + "-" + familii.familie2.numeMama);


/*Exercițiul 3: Găsirea celui mai mare punctaj
Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul. */

var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 }
  };

  var maxPunctaj = Math.max(elevi.elev1.punctaj, elevi.elev2.punctaj, elevi.elev3.punctaj);
  console.log("Cel mai mare punctaj este:",maxPunctaj);

  /* Exercițiul 4: Verificarea existenței unui email într-un obiect
Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.*/
