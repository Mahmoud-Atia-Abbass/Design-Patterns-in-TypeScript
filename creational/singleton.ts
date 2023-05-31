class Singleton {
    private static _instance: Singleton;

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    // make a getter function that create a new instance or retrieve the current obj
    public static get instance(): Singleton {
        return this._instance ?? (this._instance = new Singleton());
    }
};


// now we are making sure that our memory contains one single instance of Singleton class
function clientCode() {
    const instance1 = Singleton.instance;
    const instance2 = Singleton.instance;

    if (instance1 === instance2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
