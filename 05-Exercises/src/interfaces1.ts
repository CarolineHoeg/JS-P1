interface IBook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

let book:IBook = {
    title: 'Moby Dick',
    author: 'Someone',
    published: new Date(2012),
    pages: 350,
}

// Can't change readonly 
// book.author = 'Someone Else';
console.log(book);

class Book implements IBook{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
    constructor(title:string,author:string) {
        this.title = title;
        this.author = author;
    }
}