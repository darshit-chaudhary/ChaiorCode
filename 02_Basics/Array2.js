const array1=['A','B','C']
const array2=['D','E','F']
//array1.push(array2);
// const array3=array1.concat(array2);
// console.log(array3);

// const allnewarray=[...array1,...array2];
// console.log(allnewarray);


const anotherarray=[1,2,3,4,[5,6,7],8,[9,10,11]];
const anotherarray2=anotherarray.flat(Infinity);
console.log(Array.isArray("Mike"));