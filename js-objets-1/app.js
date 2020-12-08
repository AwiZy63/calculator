/*
let me = {
    firstname: "Bastien",
    lastname: "Flambi",
    age: 18,

    sayHi() {
        alert("Hello" + " " + this.firstname + " " + this.lastname);
    }
};

console.log(me.firstname);
console.log(me.lastname);
console.log(me.age);
me.sayHi()
*/








/*

let chaise = {
    couleur: "rouge",
    matiere: "metal",
    pieds: 4,

    breakLegChair() {
        if (this.pieds > 0) {
            this.pieds--;
        }
    },

    isBroken() {
        if (this.pieds != 4) {
            return true;
        }
    },

    setDisplay() {
        if (this.isBroken()) {
            alert("La chaise " + this.couleur + " en " + this.matiere + " est cassée");
        } else {
            alert("La chaise " + this.couleur + " en " + this.matiere + " n\'est pas cassée");
        }
    },

};

chaise.setDisplay()
console.log(chaise.pieds)
chaise.breakLegChair()
console.log(chaise.pieds)
chaise.setDisplay()

*/

function Chair(color, material, nbLegs) {
    this.color = color;
    this.material = material;
    this.nbLegs = nbLegs;

    this.breakLegChair = function() {
        if (this.nbLegs > 0) {
            this.nbLegs--;
        }
    };

    this.isBroken = function() {
        if (this.nbLegs != 4) {
            return true;
        }
    };

    this.setDisplay = function() {
        if (this.isBroken()) {
            console.log("La chaise " + this.color + " en " + this.material + " est cassée");
        } else {
            console.log("La chaise " + this.color + " en " + this.material + " n\'est pas cassée");
        }
    };
}

let chair1 = new Chair("red", "bois", "4");
let chair2 = new Chair("orange", "metal", "3");
let chair3 = new Chair("noir", "PVC", "4");

chair1.setDisplay(); 
chair2.setDisplay(); 
chair3.setDisplay();