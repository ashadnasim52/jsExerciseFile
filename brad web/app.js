// // // alert('ashad')
// // // prompt();
// // // confirm();

// // let val;
// // // val=window.innerHeight;
// // // val=window.scrollX;
// // // val=window.history.go(-2);


// // val = document.querySelector('.collection').children;



// // console.log(val);

// // let li=document.createElement('li');

// // li.className='collection_list';
// // li.setAttribute('title','ashad');
// // li.id='id';
// // li.appendChild(document.createTextNode('Hello wrold!'));
// // document.querySelector('ul.collection').appendChild(li);
// let liToAdd = document.createElement('li');
// // liToAdd.createTextNode('ashad');
// liToAdd.appendChild(document.createTextNode('ashad!!!!!'));
// document.querySelector('ul.collection').appendChild(liToAdd);



const newHeading = document.createElement('h3');
const oldHeading = document.querySelector('h2');
newHeading.appendChild(document.createTextNode('some awesomeheading with js       '));
const father = document.querySelector('ul.collection');
// father.replaceChild(newHeading, oldHeading);
father.replaceChild(newHeading, oldHeading);