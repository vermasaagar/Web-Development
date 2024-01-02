const person = {

    name : "sagar",
    gender : "male"

}

// function printdata(obj){
//     console.log(obj.name);
//     console.log(obj.gender);

// }

function printdata({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);

}





printdata(person);