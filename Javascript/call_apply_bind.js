
function about(hobby, favmusic){
    console.log(this.firstName, this.age, hobby, favmusic);
}

const user1 = {
    firstName : "Dheeraj",
    age : 21,
   
 }

  
const user2 = {
        firstName : "mohit",
        age: 9,
    }

//apply:- array me pass hoga
about.apply(user1, ["guitar", "ar rehman"]);
//call
about.call(user1, "guitar", "ar rehman");
//bind:-return function
const func = about.bind(user2, "guitar", "ar rehman");
func();