var user  = {
    fname : "PMS",
    lname : "S",
    role : "admin",
    loginCount : "32",
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.fname} is enrolled in total of ${this.courseList.length} courses`;
    },
};

console.log(user.fname); 
console.log(user.getCourseCount());
user.buyCourse("Python");
user.buyCourse("Python ad");
console.log(user.getCourseCount());

