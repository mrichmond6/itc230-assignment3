'use strict'

let books = [
    { 
        title: "Harry"
    },
    { 
        title: "Harry Potter and the Chamber of Secrets"
    },
    { 
        title: "Harry Potter and the Prisoner of Azkaban"
    },
    { 
        title: "Harry Potter and the Goblet of Fire"
    }, 
    { 
        title: "Harry Potter and the Order of the Pheonix"
    },
    { 
        title: "Harry Potter and the Half-Blood Prince"
    },
    { 
        title: "Harry Potter and the Deathly Hallows"
    },
    ]

exports.get = (title)  => {
    return books.find((item) => {
        return item.title == title;
    });
};

exports.delete = (title) => {
    var newBooks = book.filter((item) => {
        return item.title !== title;
    });
    console.log(newBooks)
    return true;
    };