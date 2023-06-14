const cuvant = "mere";
var sirCaractere = ["ana", "are","mere"];
const cuvantNou ="banane";
console.log(sirCaractere);
for(let i=0;i<sirCaractere.length;i++){
    if(sirCaractere[i]===cuvant){
        sirCaractere[i]=cuvantNou;
    }
}
console.log(sirCaractere);