// Proxy (Substitute/Listener)

const original = {name: 'jeff'}

const reactive = new Proxy(original, { // wrapper that intercepts changes to the original class and runs whatever you want afterwards
    get(target, key) {
        console.log("Tracking: ", key);
        return target[key];
    },
    set(target, key, value) {
        console.log('updating UI...');
        return Reflect.set(target, key, value);
    }
});