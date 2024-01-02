

// prototype is for only function
function createUser(firstName, lastName, email, age, address){

    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;

}
//add method 1
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}


//add method 2
createUser.prototype.is18 = function(){
    return this.age >=18;
}

//add method 3
createUser.prototype.sing = function(){
    return "lla laalalalala";
}



const user1 = createUser('saroj', 'satish', 'dheeraj', 'rishu', 18);
const user2 = createUser('rohit', 'satish', 'dheeraj', 'rishu', 19);
const user3 = createUser('deepak', 'satish', 'dheeraj', 'rishu', 17);

console.log(user1);
console.log(user1.sing()); 
console.log(user1.is18());
