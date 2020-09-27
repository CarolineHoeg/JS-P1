// Filter and map

const myFilter = (array, callback) => {
    let filteredArr = [];
    for (var i = 0; i < array.length; i++) {
        let obj = array[i];
        if (callback(obj)) {
            filteredArr.push(obj);
        }
    }
    return filteredArr;
}

const myMap = (array, callback) => {
    let mappedArr = [];
    for (var i = 0; i < array.length; i++) {
        let obj = array[i];
        mappedArr.push(callback(obj));
    }
    return mappedArr;
}

Array.prototype.myNewFilter = (callback) => {
    let filteredArr = [];
    for (var i = 0; i < this.length; i++) {
        let obj = this[i];
        if (callback(obj)) {
            filteredArr.push(obj);
        }
    }
    return filteredArr;
}

Array.prototype.myNewMap = (callback) => {
    let mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        let obj = this[i];
        mappedArr.push(callback(obj));
    }
    return mappedArr;
}

// Reduce methods
var all = ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join());
console.log(all.join(" "));
console.log(all.join("#"));

var numbers = [2, 3, 67, 33];
console.log(numbers.reduce((total, num) => total + num));

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
console.log(members.reduce((total, obj, index, arr) => total + obj.age / arr.length, 0));

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
console.log(votes.reduce((data, amount) => {
    data[amount] = (data[amount] || 0) + 1;
    return data;
}, {}));

// Hoisting
if (typeof (aVar) === 'undefined') {
    console.log('The variable aVar is not defined, but is hoisted');
}
var aVar = "I'm defined";
console.log('The variable aVar has now been defined and is: ' + aVar);


function f1() {
    console.log("We're inside a function and the function it calls is hoisted, but not yet defined");
    f2();
}

function f2() {
    console.log('Now this function is defined');
}

f1();

// This
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.printBook = () => {
        console.log(this);
    }
}

var b1 = new Book('Moby Dick', 'Someone', 100);
b1.printBook();

// Closures
let counter = (() => {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        inc: () => { changeBy(1) },
        dec: () => { changeBy(-1) },
        value: () => { return privateCounter },
    }
})();

console.log(counter.value());
counter.inc();
counter.inc();
console.log(counter.value());
counter.dec();
console.log(counter.value());

let person = (() => {
    var privateAge = 45;
    var privateName = 'Peter';

    return{
        setAge: (val) => {privateAge = val;},
        setName: (val) => {privateName = val;},
        getInfo: () => {return `${privateName}, ${privateAge}`}
    };
})();

console.log(person.getInfo());
person.setName('Caroline');
person.setAge(23);
console.log(person.getInfo());

class Person {
    constructor(name, age) {
        this.name = name ? name: 'No name yet';
        this.age = age ? age: 0;
    }

    getInfo() {
        return(`${this.name}, ${this.age}`)
    }
}

let p1 = new Person();
console.log(p1.getInfo());
let p2 = new Person('Caroline', 23);
console.log(p2.getInfo());
