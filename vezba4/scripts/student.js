export default class Student{
    constructor(id,ime,prezime,indeks){
        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.indeks=indeks;
        this.polozeniPredmeti=[]
        this.prikazPredmeta=false
    }
    prikaziPredmete() {
        let predmeti='';
        this.polozeniPredmeti.forEach(p => {
            predmeti+=p.toString()
        });
        return predmeti;
        
    }
    prosecnaOcena() {
        let suma=0;
        this.polozeniPredmeti.forEach(p => {
            suma+=p.ocena
        });
        return suma/this.polozeniPredmeti.length;
    }

    dodajPredmet(predmet){
        this.polozeniPredmeti.push(predmet);
    }
    toString() {
        return `<div>
            ${this.ime} ${this.prezime} ${this.indeks} ${this.prosecnaOcena()} <input type="checkbox" value="${this.id}"> Dodaj predmet
            <div>${this.prikaziPredmete()}</div>
        </div>`
    }
}
