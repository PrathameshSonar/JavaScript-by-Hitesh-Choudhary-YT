var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged IN success");
//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("YOu can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("ALlow user to make a purchase");
} else {
    console.log("NOt allowed to do that");
}
