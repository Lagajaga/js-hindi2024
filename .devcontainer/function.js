const vueuser={
    name:"paglaayan",
    profession:"databasedeveloper",
    age:40
}

function paglaAyan(any){
  console.log(`Username is vue is ${vueuser.name} and profession is ${vueuser.profession} and age is ${vueuser.age} `);
}
paglaAyan(vueuser)

const oldArray=[20,30,40,50,100]

function findArrayValue(arr){
    return arr[1]
}
console.log(findArrayValue(oldArray));