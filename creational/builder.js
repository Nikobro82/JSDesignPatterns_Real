// Builder Design Pattern

class HotDog {
    constructor(bun, ketchup, mustard, kraut) { // Builder is an alternative to constructors with 999 parameters

    }

    addKetchup() {
        this.ketchup = true;
        return this;
    }
    addMustard() {
        this.mustard = true;
        return this;
    }
    addKraut() {
        this.kraut = true;
        return this;
    }
}

const mylunch = new HotDog()
mylunch
    .addKetchup()
    .addKraut()
    .addMustard();

console.log(mylunch.kraut);