


const person = {
    firstName : "mohit",
    age:53,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}

person.about();