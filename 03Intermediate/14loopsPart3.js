const names = ["YT", "FB", "Insta", "FLix", "Zon"];

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt : "YT",
    ig : "Insta",
    fb : "FB",
};

for(const n in symbols) {
    console.log(symbols[n]);
}