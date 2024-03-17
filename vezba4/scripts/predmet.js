export default class Predmet{
    constructor(naziv,espb,semestar,ocena){
        this.naziv=naziv;
        this.espb=espb;
        this.semestar=semestar;
        this.ocena=ocena;
    }

    toString() {
        return `<div>
        ${this.naziv} ${this.espb} ${this.semestar} ${this.ocena}
        </div>`
    }
}
