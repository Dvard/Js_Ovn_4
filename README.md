# JS_Ovn_4
Grunder i programmering: JavaScript-övning 4.

# Demo
Live demo: [här](https://dvard.github.io/JS_Ovn_4)

___

# Javascript övning 4 - funktioner

Javascript övning - funktioner
Gör en ny html-fil med namnet js_ovn_func.html och js-fil js_ovn_func.js
 
Starta varje uppgift med att kommentera t.ex. //Uppgift 1.i koden. Läs om JS-funktioner.
 
Gör en funktion (t.ex. showMeal(meal)) som skriver ut valda måltiden med innerHTML-objektet i en <div> med id:n meal. Aktivera funktionen med en knapp (onclick).  Jämför vilken måltid är i fråga: Jämför meal med en elseif-sats om måltiden är: morgonmål, lunch, middag, kvällsmål eller något annat. 
 
Gör två parametrar a och b, och ge dem varsitt siffervärde. Gör en knapp för varje operator +,-, *,/ och skriv ut resultatet för varje räknesätt i en <div id=”resultat”>.  Gör en funktion t.ex.  countResult(a,b,ope) som kör jämförelsen och räkningen. T.ex. Operator: *, resultat: 3*3=9 


Bekanta dig med date-objektet http://www.w3schools.com/js/js_obj_date.asp Gör en knapp som skriver ut Dagens fullständiga tid i en div med id:n today.


Gör en funktion onLoadTime().  Använd Date()-objektet för att skriva ut tiden när sidan laddas i en <time>-element med id:n loadtime. Aktivera funktionen i javascript.
function onLoadTime(){
    // funktionens kod
}
window.onload = onLoadTime;
 Tips: getHour(), getMinutes(), getSeconds(). 


Följande kod skriver ut vilken dag det är idag.
<script>
function dagensDag(){ 
 
var d = new Date();
var weekday=new Array(7);
weekday[0]="Söndag";
weekday[1]="Måndag";
weekday[2]="Tisdag";
weekday[3]="Onsdag";
weekday[4]="Torsdag";
weekday[5]="Fredag";
weekday[6]="Lördag";


var x = document.getElementById("dag");
x.innerHTML = weekday[d.getDay()];
}
</script>


Testa koden med hjälp av en knapp och div. Gör sedan en funktion som skriver ut
dagens månad och år (Januari, 2018). Tips. getMonth, getYear.

