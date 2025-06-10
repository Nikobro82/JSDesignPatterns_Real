// Factory Design Pattern

class IOSButton {}
class AndroidButton {}

// Without Factory

//const button1 = os == "ios" ? new IOSButton() : new AndroidButton();

// With Factory

class ButtonFactory { // main factory that handles all button creation
    createButton(os) {
        if (os == "ios") {
            return new IOSButton();
        }
        else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton("ios");