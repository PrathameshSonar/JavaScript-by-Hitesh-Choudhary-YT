var name = "PMS";

console.log("Line 3", name);

function sayName() {
    var name = "Mr P";
    console.log("Line 7", name);
    sayName2();

    function sayName2() {
        var name = "Mr. PMS";
        console.log("Line 12",name);

    }
}

sayName();