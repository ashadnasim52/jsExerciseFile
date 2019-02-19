// let Posts = [{
//     title: 'post One',
//     content: 'This content is from post one'
// }, {
//     title: 'Post Two',
//     content: 'This content is from post two'
// }];

// function getPost() {

//     setTimeout(() => {
//         let output = '';

//         Posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);

// }



// function createPost(post, callback) {

//     setTimeout(() => {
//         Posts.push(post);
//         callback();
//     }, 2000)


// }

// createPost({
//     title: 'third post',
//     content: 'This contnet is from thuird post,yo'
// }, getPost);


let Posts = [{
        title: 'Post One',
        content: 'Post One Content'
    },
    {
        title: 'Post Two',
        content: 'Post Two Content'
    }
];
let output = '';

function getPost() {
    setTimeout(() => {
        Posts.forEach((post) => {

            output += `<li>${post.content}</li>`;
            document.body.innerHTML = output;
        })
    }, 1000)
}

// function createPost(post, callback) {
//     setTimeout(() => {
//         Posts.push(post);
//         callback();
//     }, 2000)
// }



function createPost(post, callback) {
    setTimeout(() => {
        Posts.push(post);
        callback();
    }, 2000)
}


createPost({
    title: 'Post Three',
    content: 'This is contnet from post three yo'
}, getPost);