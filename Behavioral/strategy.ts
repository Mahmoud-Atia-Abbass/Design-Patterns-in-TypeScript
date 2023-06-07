class Duck {

    private FlyStrategy: ICanFly = new FlyNormally();
    private DisplayStrategy: ICanDisplay = new DisplayBW();

    constructor(DuckBluePrint?: DuckBluePrint) {
        this.FlyStrategy = DuckBluePrint?.fly ?? this.FlyStrategy;
        this.DisplayStrategy = DuckBluePrint?.display ?? this.DisplayStrategy;
    }

    setFlyStrategy(flyStrategy: ICanFly) {
        this.FlyStrategy = flyStrategy;
    }

    setDisplayStrategy(displayStrategy: ICanDisplay) {
        this.DisplayStrategy = displayStrategy;
    }

    fly(): void {
        this.FlyStrategy.fly();
    };


    display(): void {
        this.DisplayStrategy.display();
    };
};

interface DuckBluePrint {
    display?: ICanDisplay;
    fly?: ICanFly;
}

interface ICanDisplay {
    display(): void;
}

interface ICanFly {
    fly(): void;
}

class FlyNormally implements ICanFly {
    fly(): void {
        console.log('Duck that could fly FlyNormally...');
    }
}

class FlyWithoutWings implements ICanFly {
    fly(): void {
        console.log('Duck that could fly Without Wings...');
    }
}

class JetFly implements ICanFly {
    fly(): void {
        console.log('Duck that could Jet Fly...');
    }
}

class DisplayColored implements ICanDisplay {
    display(): void {
        console.log('Duck that could DisplayColored...');
    }
}

class DisplayBW implements ICanDisplay {
    display(): void {
        console.log('Duck that could DisplayBW...');
    }
}
const DuckDock = new Duck({ display: new DisplayColored(), fly: new JetFly() });
DuckDock.display();
// DuckDock.fly();
// DuckDock.setDisplayStrategy(new DisplayBW());
// DuckDock.display();