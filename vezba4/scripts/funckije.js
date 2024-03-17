export default{
    dodajStudenta,
    prikaziStudente,
    sortirajStudente,
    pretraziStudenate,
    dodajPredmet,
    napraviPredmet
}
import Student from './student.js'
import Predmet from './predmet.js';

let studenti=[]
function dodajStudenta(ime,prezime,indeks){
    studenti.push(new Student(studenti.length+1,ime,prezime,indeks));
}
function prikaziStudente(){
    let izlaz=""
    for (const student of studenti) {
        izlaz+=student.toString();
    }
    return izlaz;
}
function sortirajStudente(funcijaZaSortiranje){
    studenti.sort(funcijaZaSortiranje);
}
function pretraziStudenate(funcijaZaPretrazivanje){
    return studenti.find(funcijaZaPretrazivanje);
}

function dodajPredmet(idStudent,predmet){
    let student=studenti.find(s=>s.id==idStudent);
    student.dodajPredmet(predmet);
}

function napraviPredmet(naziv,espb,semestar,ocena){
    return new Predmet(naziv,espb,semestar,ocena);
}
