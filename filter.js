const peoples = [
  { id: 1, name: "Ashad" },
  { id: 2, name: "ASh" },
  { id: 3, name: "AD" }
];

//filtering people with id 2
const people2 = peoples.filter(people => people.id != 2);

console.log(people2);
