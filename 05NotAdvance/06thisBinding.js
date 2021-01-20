const pms = {
    fName : "PMS",
    lName : "S",
    role : "admin",
    courseCount : 3,
    getInfo : function() {
        console.log(`
        First Name is ${this.fName}
        Last Name is ${this.lName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses.
        `);
    },
};

const dj = {
    fName : "Rock",
    lName : "DJ",
    role : "Sub-admin",
    courseCount : 4,
};

// pms.getInfo();
// dj.getInfo();

// var djInfo = pms.getInfo.bind(dj);
// djInfo();

pms.getInfo.call(dj);