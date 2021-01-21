// import User from "./06class.js";

const User = require("./06class.js");


const pms = new User("pms", "pms@gmail.com");

console.log(pms.getInfo());
pms.enrollCourse("CPP");
pms.enrollCourse("Angular");

console.log(pms.getCourseList());

let courses  = pms.getCourseList();

courses.forEach(c => console.log(c));