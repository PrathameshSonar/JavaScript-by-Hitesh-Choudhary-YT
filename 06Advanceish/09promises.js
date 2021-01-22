const uno = () => {
    return "one";
};

// const dos = () => {
//     setTimeout(() => {
//         return "Two";
//     }, 3000);
    
// };

const dos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
        
    });
    
};

const tres = () => {
    return "Three";
};

const callMe = async () => {
    let v1 = uno();
    console.log(v1);

    let v2 = await dos();
    console.log(v2);

    let v3 = tres();
    console.log(v3);
}

callMe();
