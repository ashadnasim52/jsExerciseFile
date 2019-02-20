// // class App {
// //     constructor(name, date, published, activedownload, rating) {
// //         this.name = name;
// //         this.date = date;
// //         this.published = published;
// //         this.activedownload = activedownload;
// //         this.rating = rating;
// //     }

// //     getSummary() {
// //         return `${this.name}  is published on ${this.date} and is actively published ${this.published} with an active download of ${this.activedownload}`;

// //     }

// //     changeRating(rat) {
// //         this.rating = rat;
// //     }
// //     getRating() {
// //         return `rating of ${this.name}   is  ${this.rating}`;
// //     }



// // }

// // const videoSplitter = new App('Video Splitter', 2018, true, 2100, 4.2);
// // console.log(videoSplitter.getSummary());

// // const news = new App('NEWS app', 2017, false, 1, 5);

// // news.changeRating(0);
// // console.log(news.getRating());


// class Movie {

//     constructor(name, viewedornot, rating) {
//         this.name = name;
//         this.viewed = viewedornot;
//         this.rating = rating;
//     }


//     getSummary() {
//         return `I had watched ${this.name} with the rating of ${this.rating}`;
//     }

//     changeRating(rating) {
//         this.rating = rating;
//     }
//     static watchmovie() {
//         return `Sometimes I watch but Marvel and DC movies are my favourite`;
//     }

// }

// const avenger = new Movie('AVENGER: END GAME', false, 5);


// // If i just want to change the rating in future

// avenger.changeRating(4.9);
// //I canoot go below this


// console.log(avenger.rating);



class Movie {
    constructor(name, isWatched, rating) {
        this.name = name;
        this.watched = isWatched;
        this.rating = rating;
    }
    getSummary() {
        return `${this.name} has been watched by and i give the rating of ${this.rating}`;
    }
    static faltu() {
        return 'faltu';
    }

}
class Anime extends Movie {
    constructor(name, isWatched, rating, month) {
        super(name, isWatched, rating);
        this.month = month;
    }
}

const dbs = new Anime('Dragon Ball Super', true, 5, 2100);
console.log(dbs);