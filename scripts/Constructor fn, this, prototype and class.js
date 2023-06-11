//Exercitiul1
/* Creați o constructor function pentru un obiect de tip "Carte" care să aibă proprietăți precum "titlu", "autor" și "anPublicatie". Inițializați un obiect nou folosind constructorul și afișați-l în consolă.
 */

function Carte(titlu,autor,anPublicatie){

    this.titlu=titlu;
    this.autor=autor;
    this.anPublicatie=anPublicatie;
}

var poveste=new Carte("Titlu","Autor",2000);
console.log(poveste);

//Exercitiul 2
/*Adăugați o metodă "afiseazaDetalii" la constructorul Carte care să afișeze toate detaliile cărții.
 */

Carte.prototype.afiseazaDetalii = function(){
    console.log("Acestea sunt detaliile cartii:",poveste.titlu,poveste.autor,poveste.anPublicatie);
}
poveste.afiseazaDetalii();

//Exercitiul 3
/*Creați un obiect "calculator" care să aibă o proprietate "rezultat" inițializată cu valoarea 0 și metode precum "aduna", "scade" și "afiseazaRezultat". Implementați aceste metode astfel încât să modifice valoarea "rezultat" utilizând keyword-ul "this" și să afișeze rezultatul.
 */

const calculator ={

    rezultat: 0,
    aduna: function(numar){
        this.rezultat += numar;
    },
    scade: function(numar){
        this.rezultat -=numar;
    },
    afiseazaRezultat:function(){
        console.log(`Rezultatul final este: ${this.rezultat}`);
    },
}
calculator.aduna(10);
calculator.scade(5);
calculator.afiseazaRezultat();

//Exercitiul 4
/*Creați o constructor function "Persoana" care să aibă proprietăți precum "nume" și "varsta". Adăugați o metodă "prezintaTe" la prototipul constructorului care să afișeze un mesaj de prezentare cu numele și vârsta persoanei.
 */

function Persoana (nume,varsta){
    this.nume = nume;
    this.varsta = varsta;
}

var persoana1 = new Persoana("Andrei",22);

Persoana.prototype.prezintaTe = function(){
    console.log(`Salut! Numele meu este ${persoana1.nume} si am ${persoana1.varsta} de ani.`);
}

persoana1.prezintaTe();


//Exercitiul 5
/* Extindeți prototipul Array pentru a adăuga o metodă numită "suma" care să calculeze suma tuturor elementelor dintr-un array.
*/

Array.prototype.Suma = function(){
    var sum=0;
    for(let i=0;i< this.length;i++)
    {
        sum +=this[i];
    }
    console.log(`Suma numerelor din array este: ${sum}`);
}
var numere = [1, 2, 3, 4];
numere.Suma();

//Exercitiul 6
/* Adăugați o metodă "inverseaza" la prototipul String care să inverseze ordinea caracterelor dintr-un șir de caractere.*/

String.prototype.inverseaza = function(){
    var newCaract = this.split(" ");
    newCaract = newCaract.reverse();
    newCaract = newCaract.join(" ");
    console.log(`Sirul inversat este: ${newCaract}`);
}

var sirCaractere = "acesta este sirul";
sirCaractere.inverseaza();

//Exercitiul 7
/* Creați o constructor function "Masina" care să aibă proprietăți precum "marca", "model" și "anFabricatie". Adăugați o metodă "afiseazaDetalii" la prototipul constructorului care să afișeze toate detaliile mașinii. Extindeți constructorul adăugând o proprietate statică "numarMasini" care să țină evidența numărului total de mașini create. Apoi, creați două instanțe ale clasei și afișați detaliile și numărul total de mașini create.
*/
var nrMasini=0;
function Masina (marca, model, anFabricatie){
    
    this.marca=marca;
    this.model=model;
    this.anFabricatie=anFabricatie;
    Masina.counter ++;
    this.afiseazaDetalii =function(){
        console.log(`Masina este un ${this.marca}, model ${this.model} din anul ${this.anFabricatie}`);
    }
}
    Masina.counter =0;


var masina1 = new Masina("toyota","corrola", 2010);
var masina2 = new Masina ("audi","a3",2006);
console.log(`Numarul total de masini introduse este: ${Masina.counter}`);
masina1.afiseazaDetalii();


//Exercitiul 8
/* Extindeți prototipul Array pentru a adăuga o metodă numită "filtrareNrPare" care să returneze un nou array conținând doar numerele pare din array-ul original. Utilizați keyword-ul "this" în implementarea metodei pentru a accesa array-ul curent.
*/


Array.prototype.filtrareNrPare=function(){
    var newArray =[];
    for(let i=0;i<this.length;i++){
        if(this[i]%2==0)
        {
            newArray.push(this[i]);
        }
    }
    console.log(`Numerele pare din sirul introdus sunt: ${newArray}`);
}
var numere = [1, 2, 5, 6, 8, 12, 14];
numere.filtrareNrPare();

//Exercitiul 9
/*Creați o clasă "FormaGeometrica" care să aibă o metodă statică "descriere" care afișează o descriere generală a formei geometrice. Extindeți clasa pentru a crea subclase pentru forme geometrice specifice, cum ar fi "Cerc" și "Patrat". În fiecare subclasă, adăugați metode specifice pentru calculul ariei și a perimetrului și utilizați keyword-ul "super" pentru a accesa metodele și proprietățile clasei părinte.
 */
