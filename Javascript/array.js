

// traversing elements in the array
var myFriends = ['Ramesh', 'Suresh', 'Rakesh']; // we can store anythings in array 

// console.log(myFriends[1]);
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length -1]); // show last element



// for in loop  it show array index number

// for (var i = 0; i < myFriends.length; i++) {

//     console.log(myFriends[i]);
// } 

console.log("For in Loop");
for(let elements in myFriends) {
    console.log(elements);
}



// for of loop it show array element

console.log("For of Loop");
for(let elements of myFriends) {
    console.log(elements);
}


console.log("For each Loop");
var myFriends = ['Ramesh', 'Suresh', 'Rakesh'];
myFriends.forEach(function(element, index, array){
    console.log(element + "=" + index);
});
 