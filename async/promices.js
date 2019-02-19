// const Posts = [{
//     title: 'Post One',
//     content: 'Content from post One'
// }, {
//     title: 'Post Two',
//     content: 'Content from post Two'
// }];

// let output = '';

// function getPost() {
//     setTimeout(() => {
//         Posts.forEach(post => {
//             output += `<li>${post.content}</li>`;
//             document.body.innerHTML = output;
//         })
//     }, 1000)
// }

// function createPost(post) {


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Posts.push(post);


//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error : Something wents wrong');

//             }


//         }, 2000);
//     });

// }

// createPost({
//     title: 'Post Three',
//     content: 'This is content from post Three'
// }).then(getPost).catch(err => console.log(err));


const Posts = [{
        title: 'Post One',
        content: 'content form post one'
    },
    {
        title: 'Post Two',
        content: 'content from post two'
    }
];

let output = '';

function getPost() {
    setTimeout(() => {
        Posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        });
    }, 1000);
}

function createPost(post) {
    Posts.push(post)
}

// createPost
//     ({
//         title: 'post Three',
//         content: 'Psot Three Content'
//     })
//     .then(getPost)
//     .catch(err => {
//         console.log(err);

//     });



// function createPost(post) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             Posts.push(post);
//             let error = true;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something wents Wrong');
//             }
//         }, 2000);

//     });
// }

// createPost({
//     title: 'Conetent Title',
//     content: 'contnet is this'
// }).then(getPost).catch(err => {
//     console.log(err);

// });


// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((res, rej) => {
//     setTimeout(res, 1000, 'GoodBye');
// });

// Promise.all([promise1, promise2, promise3]).then(value => {
//     console.log(value);

// });

async function ininit() {
     createPost({
        title: 'This is title',
        content: 'This is content'
    });

    getPost();
}