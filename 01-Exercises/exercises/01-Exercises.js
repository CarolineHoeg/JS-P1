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

var all = ["Lars", "Peter", "Jan", "Bo"];

// default is comma-seperated
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

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
console.log(votes.reduce((data, amount) => {
    data[amount] = (data[amount] || 0) + 1 ;
    return data;
  } , {}));

