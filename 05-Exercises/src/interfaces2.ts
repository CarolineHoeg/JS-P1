interface myFunc {
    (a:string, b:string, c:string): string[];
}

let f1: myFunc;
f1 = function(a:string, b:string, c:string){
    return [a,b,c];
}

let upperCased: myFunc;
upperCased = function(a:string, b:string, c:string) {
    return[a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
}

let ​f2 ​= ​function ​logger(func: myFunc){
    let ​[ ​a​, ​b​, ​c​] = [​"A"​, ​"B"​, ​"C"​];​
    console​.​log​(func(​a​,​b​,​c​));
}

f2(f1);
f2(upperCased);

let wrongFunc = (num: number) => {console.log(num)}

// Doesn't work
//f2(wrongFunc);