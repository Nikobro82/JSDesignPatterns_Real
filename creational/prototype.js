// Prototype Design Pattern

const zombie = {
    eatBrains() {
        console.log("mm yumm")
    }
}

const chad = Object.create(zombie, {name: {value: 'chad'}}); // another way to handle inheritance!

console.log(chad.name);