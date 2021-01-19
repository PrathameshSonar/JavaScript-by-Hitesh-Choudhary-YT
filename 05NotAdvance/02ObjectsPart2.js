var User = {
    name : "",
    getUserName : function () {
        console.log(`User name is  : ${this.name}`);
    },
};

var pms = Object.create(User);
console.log(pms);
pms.name = "PMS";
pms.getUserName();


var sam = Object.create(User, {
    name: {value : "Sam"},
    courseCount: {value : 3},
});
sam.getUserName();
console.log(sam);
