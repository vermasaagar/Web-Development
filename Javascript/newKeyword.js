


// newKeyword

function createUser(firstname, age){
    this.firstname=firstname;
    this.age= age;
}
createUser.prototype.about = function(){
    console.log(this.firstname, this.age);
}
const user1 = new createUser("sagar", 23);
// new Keyword
//1. give this = {}(empy object)
//2. return this
//3. object.createUser.prototype work auto


console.log(user1);
//or
user1.about();


