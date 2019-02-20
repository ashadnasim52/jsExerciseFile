// const books = {
//     title: 'Book One',
//     author: 'ashad',
//     published: 1993,
//     intro: function () {
//         return `Book titled ${this.title} is written by ${this.author} and published on ${this.published}`;
//     }
// }



// function Book(titlevar, authorvalue, date) {
//     this.title = titlevar;
//     this.author = authorvalue;
//     this.published = date;
// }

// Book.prototype.summary = function () {
//     return `this book is written by ${this.author} and its title is ${this.title} and published at ${this.published}`;
// }


// let whomovedmyCheese = new Book('Who Moved my Cheese', 'ashad', 1990);

// console.log(whomovedmyCheese.summary());



// console.log(books.intro());


// function Apps(name, date, download, activedownload) {
//     this.name = name;
//     this.date = date;
//     this.download = download;
//     this.activedownload = activedownload;
// }


// const videoSplitter = new Apps('Video Status Splitter', 2018, 5900, 2100);
// console.log(videoSplitter);


// const weather = new Apps('my Weater App', 2017, 300, 30);

// console.log(weather.date);


// function UnpublishedApps(name, date, download, activedownload, reason) {
//     Apps.call(this, name, date, download, activedownload);
//     this.reason = reason;
// }

// const newsApp = new UnpublishedApps('NEWS app', 2018, 50, 3, 'forget my own password');

// console.log(newsApp);

function Movies(name, watched, rating) {
    this.name = name;
    this.watched = watched;
    this.rating = rating;
    this.getSummary = function () {
        return `${this.name}  had been watched by me ${this.watched} and I had given rating of ${this.rating}`
    }
}

function Anime(name, watched, rating, year) {
    Movies.call(this, name, watched, rating);
    this.year = year;
}


const avengerEnd = new Movies('AVENGER ENDGAME', true, 5);
const dbs = new Anime('Dragon Ball Super', true, 5, 2010);

console.log(dbs.getSummary());

// console.log(avengerEnd.getSummary());