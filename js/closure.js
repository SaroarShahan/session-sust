// function add(a) {
//     return function cb(b) {
//         return a + b;
//     }
// }

// var addTen = add(10);
// var addSeven = addTen(7);
// var addThirty = addTen(30);

// console.log(addSeven);
// console.log(addThirty);

// function Counter() {
//     let counter = 0;


//     return {
//         get: () => counter,
//         increment: () => {
//             counter += 1;
//         },
//         decrement: () => {
//             counter -= 1;
//         }
//     }
// }

// const count = Counter();

// console.log(count.get())
// console.log(count.increment())
// console.log(count.increment())
// console.log(count.get())
// console.log(count.decrement())
// console.log(count.get())


for(var i = 1; i <= 5; i++) {
    ((val) => {
        setTimeout(() => console.log(val), 1000);
    })(i)
}