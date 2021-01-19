var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.courseCount}`);
    };
    
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is : ${this.firstName}`);
};

var pms = new User("PMS", 2);
pms.getCourseCount();
if (pms.hasOwnProperty("firstName")) {
    pms.getFirstName();
}


// console.log(pms);


var sam = new User("sam", 1);
sam.getCourseCount();
sam.getFirstName();

