// var v = Math.max(2,3,5,6,34,1,32);
// console.log(v);

// var  myObj = {}

// Object.assign(myObj, {a:1, b:2}, {x:3, y:4});

// console.log(myObj);


function sumOne(a, b){
    return a + b;
}

var myA = [5, 4];
// console.log(sumOne(...myA));    //spread operator


function sumTwo(a, b, ...args){           //rest operator
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2,3,4,5,6,7,8));