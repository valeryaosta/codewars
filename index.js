//1. Write a function which converts the input string to uppercase.

function makeUpperCase(string) {
    return string.toUpperCase();
};
console.log(makeUpperCase('lera'));

//2. Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between
//   the input parameters, including them.

function between(a, b) {
    let integers = [];
    for (let i = a; i <= b; i++) {
        integers.push(i);
    }
    return integers;
};
console.log(between(-3, 10));

// 3.