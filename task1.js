
//=============================================
//Task1

// let summation = (n) => { 
// let sum = 0

// for(i = 0; i<= n; i++){
//     sum = sum+i
//     console.log(sum);
// }

// }
// summation(6)


//===============================================
//Task2

let key = [1,2,3,3,3,4,5,6,6]

let unique = key.filter((value, index, array) => array.indexOf(value) === index) 
    
console.log(unique);





// let set = new Set([1,2,3,4,5,5,5,6,6,7,8,8])

// console.log(set);