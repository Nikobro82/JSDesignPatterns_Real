// Facade

class PlumbingSystem { // Hidden
    // lol evel access to plumbing system
    setPressure(v) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem { // Hidden
    // lol evel access to plumbing system
    setVoltage(v) {}
    turnOn() {}
    turnOff() {}
}

class House { // Simplified Wrapper, user interacts with this and doesn't see behind the scenes
    plumbing = new PlumbingSystem();
    electrical = new ElectricalSystem();

    turnOnSystems() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500)
        this.plumbing.turnOn();
    }
    
}