'use strict'

var books = [
    { 
        title: "Harry", author: "JK Rowling"
    },
    { 
        title: "Potter", author: "JK Rowling"
    },
    { 
        title: "Prisoner", author: "JK Rowling"
    },
    { 
        title: "Goblet", author: "JK Rowling"
    }, 
    { 
        title: "Pheonix", author: "JK Rowling"
    },
    { 
        title: "Prince", author: "JK Rowling"
    },
    { 
        title: "Hallows", author: "JK Rowling"
    },
    ]

exports.get = (title)  => {
    return books.find((item) => {
        return item.title == title;
    });
};

exports.delete = (title) => {
    console.log(books);
    let newBooks = books.filter((item) => {
        return item.title !== title;
    });
    books = newBooks;
    return books.length;
};