interface Pizza {
    getPrice(): number;
    getDescription(): string;
}

class BasicPizza implements Pizza {
    getPrice(): number {
        return 10;
    }
    getDescription(): string {
        return 'Normal plain pizza';
    }
}

abstract class PizzaDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    getPrice(): number {
        return this.pizza.getPrice() + this.getAdditionalPrice();

    }

    getDescription(): string {
        return this.pizza.getDescription() + this.getAdditionalDescription()
    }

    protected abstract getAdditionalPrice(): number;
    protected abstract getAdditionalDescription(): string;

}

class CheeseDecorator extends PizzaDecorator {

    getAdditionalPrice(): number {
        return 5;
    }

    getAdditionalDescription(): string {
        return ', With Cheese';
    }
}

class PepperoniDecorator extends PizzaDecorator {

    getAdditionalPrice(): number {
        return 5;
    }

    getAdditionalDescription(): string {
        return ', With Pepperoni';
    }
}

const basicPizza: Pizza = new BasicPizza();
const cheesePizza: Pizza = new CheeseDecorator(basicPizza);
console.log(cheesePizza.getPrice());
console.log(cheesePizza.getDescription());

const cheesePepperoniPizza: Pizza = new PepperoniDecorator(cheesePizza);
console.log(cheesePepperoniPizza.getPrice());
console.log(cheesePepperoniPizza.getDescription());
