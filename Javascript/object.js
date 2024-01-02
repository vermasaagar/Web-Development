
//object

const person = {name:"Harsit", age:22,
hobbies:[ "guitar","sleeping","listening music","reading"]

}
console.log(typeof(person));
console.log(person["name"]);


//how to access object data

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

person.gender= "male";//add new key-value pair
console.log(person);


const key = "email";

person[key] = "sagarverma@gmail.com";
console.log(person);


// how to iterate object
for(let key in person){
    console.log(person[key]);
}



