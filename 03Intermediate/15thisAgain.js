console.log(this);

var user = {
    fname : "PMS",
    courseCount : 4,
    getCourseCount : function () {
        console.log("Line7 ", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10", this);
        }
        sayHello();        
    }
};

user.getCourseCount();


