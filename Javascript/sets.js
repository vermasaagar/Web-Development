


const items =['itm1', 'itm2', 'itm3', 'itm4'];

// no index acess : console.log(number[2]);


const numbers =new Set();
numbers.add(1);
numbers.add(2);
numbers.add(items);
numbers.add(['itm1', 'itm2']);
console.log(numbers);




const myArray =[1,2,4,4,5,6,5,6];
const uiqueelement = new Set(myArray);
let length =0;
for(let element of uiqueelement){
    length++;
}

console.log(length);