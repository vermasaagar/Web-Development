

// const arry1 = [1, 2, 3];
// const arry2 = [5, 6, 7];

// const newArray = [...arry1,...arry2,89,69,..."sagar"];
// console.log(newArray);



//spread operator in objects

const obj1 = {
key1: "val1",
key2: "val2",
};


const obj2 = {
    key3: "val3",
    key4: "val4",
    key1: "unique",//overwrite
    };
    
const newObj = {...obj1, ...obj2, key69 : "value69"}    
console.log(newObj);
