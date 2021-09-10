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

// 3. This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

let a = "code";
let b = "wa.rs";
let name = `${a + b}`;
console.log(name);

// 4. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0) return false;
    return true;
};

function lovefunc2(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(2, 7));
console.log(lovefunc2(2, 7));

// 5.Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer,
// and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'.
//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the
// nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed).

function usdcny(usd) {
    let money = (usd * 6.75).toFixed(2);
    return `${money} Chinese Yuan`;
};
console.log(usdcny(15));