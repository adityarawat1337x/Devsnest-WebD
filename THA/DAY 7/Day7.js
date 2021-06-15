var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student))

/////////////////////

console.log(student)

delete student.rollno

console.log(student)

///////////////////////

console.log(Object.entries(student).length);
console.log(Object.keys(student).length);
console.log(Object.values(student).length);

//////////////////////////

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead',readingStatus: true},
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

library.forEach(book => {
    console.log(book.title,book.nameauthor,book.readingStatus);
});

//////////////////////////

const cylinder = {
    rad: 0,
    height: 0,
    volume() {
        return ((22 / 7) * this.rad * this.rad * this.height).toFixed(4);
    }
}

cylinder.rad = 5
cylinder.height = 25

console.log(cylinder.volume())

////////////////////////////

console.log(library2)
var library2 = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log(library2)

library2.sort((a,b)=>a.libraryID>b.libraryID?1:b.libraryID>a.libraryID?-1:0)

console.log(library2)