class HappyState {
    talk() {
        console.log("I'm so happy");
    }
    action() {
        console.log("I went outside and played");
    }
}

class SadState {
    talk() {
        console.log("I'm so sad :(");
    }
    action() {
        console.log("I cried in my room");
    }
}

class MadState {
    talk() {
        console.log("I'm so mad.");
    }
    action() {
        console.log("I threw my switch outside the window");
    }
}

class Human {
    State;
    constructor() {
        this.State = new HappyState;
    }

    talk() {
        return this.State.talk();
    }

    action() {
        return this.State.action();
    }

    changeMood(newState) {
        this.State = new newState;
    }
}

newHuman = new Human();
newHuman.talk();
newHuman.action();

newHuman.changeMood(MadState);
newHuman.talk();
newHuman.action();