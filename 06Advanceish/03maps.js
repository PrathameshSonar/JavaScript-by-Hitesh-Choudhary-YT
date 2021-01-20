var myMap = new Map();

myMap.set(1, "ABC")
myMap.set(2, "dos")
myMap.set(3, "Tres")
myMap.set(4, "Uno")


console.log(myMap);

for( let key of myMap.keys()) {
    console.log(`key is ${key}`);
}

for( let value of myMap.values()) {
    console.log(`key is ${value}`);
}

for( let [key, value] of myMap) {
    console.log(`key is ${key} value is ${value}`);
}

myMap.forEach( (key) => console.log(key)); //just 1 parameter always give a VALUE not KEY

myMap.forEach( (key, value) => console.log(key + " " + value));


myMap.delete(2);
console.log(myMap);