

// function songs(){
//     console.log("happy birthday songs ......");
// }

// songs();



// function sum(num1, num2, num3){
//     return num1 + num2 + num3;

// }

// const return_value= sum(2,3,5);
// console.log(return_value);




// function isEven(num){
//     if(num %2==0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(3));



// function findtarget(arry, target){
//     for(let i =0;  i<arry.length; i++){
//         if(arry[i]===target){
//             return 1;
//         }
//     }

//     return -1;
// }

// const myArry = [1,3,4,6,7,8];
// const ans = findtarget(myArry,3);
// console.log(ans);




// function inside function



function app(){
    const myFunc =()=>{
        console.log("hello world");
    }

    const add = (num1, num2) =>{
        return num1+num2;
    }

    const mul = (num3, num4) => num3* num4;   
    console.log("inside app");
    myFunc(); 
    console.log(add(2,3));
    console.log(mul(2,3));

}

app();