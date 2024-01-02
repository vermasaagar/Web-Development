//static method and property
class Person{
    constructor(firstName, lastName,  age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age = age;
    }

    static classInfo(){
        return 'this is person class';
    }


    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = this.fullName.split();
        this.firstName= firstName;
        this.lastName = lastName
    }

    eat(){

        return `${this.firstName} is eating`;
    }

    look(){

        return this.age>=18;
    }

}

const person1 = new Person("sagar", "verma", 23);
// console.log(person1);
// console.log(person1.look());

const info = Person.classInfo();
console.log(info);