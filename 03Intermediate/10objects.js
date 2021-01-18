var user  = {
    fname : "PMS",
    lname : "S",
    role : "admin",
    loginCount : "32",
    facebookSignedIn : true,
};

console.log(user.fname);
console.log(user["lname"]);

user.loginCount = 44;
console.log(user.loginCount);

console.table(user);
