console.log("Start of the execution queue");

setTimeout(() => {
    console.log("Final code block o be executed");
},
    0);
for (var i = 0; i < 100; i++) {
    console.log(i);
}
console.log("End of the loop printing");