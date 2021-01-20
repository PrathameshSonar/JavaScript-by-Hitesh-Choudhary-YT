// function init() {
//     var fName = "Prathamesh";
//     function sayFname() {
//         console.log(fName);
//     }
    
//     return sayFname;

// }

// var value = init();

// value();

function doAddition(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = doAddition(4);
console.log(add5(4));

console.log(doAddition(5)(10));

// doAddition()()() //curring