

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    eat(){

        return `${this.name} is eating`;
    }

    look(){

        return this.age<=1;
    }

}

class Dog extends Animal{

    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}`;
    }

}

const tommy = new Dog("tommy", 0.5, 45);
console.log(tommy);
console.log(tommy.look());






const animal1 = new Animal("tom", 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.look());
