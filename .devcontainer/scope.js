let a=300;
//basically {} indicates as a scope in javascript. for any function except object.
//localscope is which is defined inside a function and globalscope is which is defined globally.
if(true){
    let a=3;
    const b=5;
    var c=10
    console.log("Inner:", a);
}
console.log(a);