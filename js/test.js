'use strict'


// const pow = (n, power) => {
//     if (power === 1) {
//         return n;
//     } else {
//         return pow(n, power - 1) * n;
//     }
// };
// console.log(pow(2, 3))

// function thisFoo (a, b, c) {
//     console.log(a, b, c);
//     console.log(this);
// }

const obj = {

    a: 5,

    bar() {
        console.log(this);
    }
}


// thisFoo.call(obj, 1, 2, 3);

// thisFoo.apply(obj, [1, 2, 3]);

// const bar = thisFoo.bind(obj,1, 2);
// bar(5);

const arr = [1, 2, 3];

arr.forEach(function(item) {
    console.log(item, this);
}, obj)