
//arrow function

//we cant use this() is arrow function
//take this() by surrounding automatiically
// this() is window object



const user1 = {
    firstName : "Dheeraj",
    age : 21,
    about:()=>{
     
           console.log(this.firstName, this.age);
        
       
    }
   
 }

 user1.about.call(user1);


 //undefined undefined
