//EXERCITIUL 1
/* Creați un element HTML cu un anumit ID.
Adăugați un eveniment de clic la acest element. 
În funcția de tratare a evenimentului de clic, schimbați culoarea de fundal a elementului.
*/

const elementEv = document.getElementById("primulID");
elementEv.addEventListener('click',function(){
    elementEv.textContent ="Hello!";
})