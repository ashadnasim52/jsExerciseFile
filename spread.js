const arr1 = [1, 25, 3, 154, 1, 241, 2];
const arr2 = [45, 45, 4, 5, 74, 87, 8, 7, 4, 5];

//lets make the array3 with the element of above two array nad exclude 3 and 45
const arr3 = [...arr1.filter(ele => ele != 3), ...arr2.filter(e => e != 45)];

const arr4 = [...arr3.filter(e => e != 1)];

// console.log(arr4);

const person1 = {
  name: "ashad",
  email: "ashadnasim"
};

const person2 = {
  ...person1,
  lastName: "Nasim"
};

console.log(person2);
