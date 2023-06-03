interface Chair {
    hasLegs();
    sitOn();
}
interface CoffeeTable {
    hasLegs();
    sitOn();
}
interface Sofa {
    hasLegs();
    sitOn();
}

class VictorianChair implements Chair {
    hasLegs() {
        console.log('victorian chair legs');
    };
    sitOn() {
        console.log('victorian chair set On');
    };
}
class VictorianCoffeeTable implements CoffeeTable {
    hasLegs() {
        console.log('victorian Coffee table legs');
    };
    sitOn() {
        console.log('victorian Coffee table On');
    };
}
class VictorianSofa implements Sofa {
    hasLegs() {
        console.log('victorian sofa legs');
    };
    sitOn() {
        console.log('victorian sofa table On');
    };
}

class ModernChair implements Chair {
    hasLegs() {
        console.log('Modern chair legs');
    };
    sitOn() {
        console.log('Modern chair set On');
    };
}

class ModernCoffeeTable implements CoffeeTable {
    hasLegs() {
        console.log('Modern Coffee table legs');
    };
    sitOn() {
        console.log('Modern Coffee table On');
    };
}

class ModernSofa implements Sofa {
    hasLegs() {
        console.log('Modern Sofa legs');
    };
    sitOn() {
        console.log('Modern Sofa set On');
    };
}

class ArtDecoChair implements Chair {
    hasLegs() {
        console.log('Art Deco chair legs');
    };
    sitOn() {
        console.log('Art Deco chair set On');
    };
}

class ArtDecoCoffeeTable implements CoffeeTable {
    hasLegs() {
        console.log('Art Deco Coffee table legs');
    };
    sitOn() {
        console.log('Art Deco Coffee table On');
    };
}

class ArtDecoSofa implements Sofa {
    hasLegs() {
        console.log('Art Deco Sofa legs');
    };
    sitOn() {
        console.log('Art Deco Sofa On');
    };
}


interface FurnitureFactoryModel {
    CreateChair(): Chair;
    CreateCoffeeTable(): CoffeeTable;
    CreateSofa(): Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactoryModel {
    CreateChair(): Chair {
        return new VictorianChair();
    }

    CreateCoffeeTable(): CoffeeTable {
        return new VictorianCoffeeTable();
    }

    CreateSofa(): Sofa {
        return new VictorianSofa();
    }
}

class ModernFurnitureFactory implements FurnitureFactoryModel {
    CreateChair(): Chair {
        return new ModernChair();
    }

    CreateCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable();
    }

    CreateSofa(): Sofa {
        return new ModernSofa();
    }
}

class ArtDecoFurnitureFactory implements FurnitureFactoryModel {
    CreateChair(): Chair {
        return new ArtDecoChair();
    }

    CreateCoffeeTable(): CoffeeTable {
        return new ArtDecoCoffeeTable();
    }

    CreateSofa(): Sofa {
        return new ArtDecoSofa();
    }
}

let flat1 = new VictorianFurnitureFactory();
let livingChair = flat1.CreateChair();
let livingTable = flat1.CreateCoffeeTable();
let livingSofa = flat1.CreateSofa();
console.log(livingChair instanceof VictorianChair)

flat1 = new ModernFurnitureFactory();
livingChair = flat1.CreateChair();
livingTable = flat1.CreateCoffeeTable();
livingSofa = flat1.CreateSofa();
console.log(livingChair instanceof ModernChair)
