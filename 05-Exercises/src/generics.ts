function ​reverseArr<T>​(arg: Array<T>): Array<T> {
    return arg.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T>{
    private _data: T;
    constructor(data:T){
        this._data = data;
    }

    get data(): T{ return this._data;}
    set data(data: T) {this._data = data;}
}

let d = new DataHolder<string>("Hello");
console.log(d.data);
d.data = 'World';
console.log(d.data);

let d2 = new DataHolder<number>(123);
console.log(d2.data);
d2.data = 500;
console.log(d2.data);
//d2.data = 'Hello';