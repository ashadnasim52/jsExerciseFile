const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//forEach
// companies.forEach(company => console.log(company.name));

//ForEach as Filter
// ages.forEach(age => {
//   if (age >= 18) console.log(age);
// });

//filter

// const adult = ages.filter(age => age >= 18);
// console.log(adult);
// console.log(...adult);

// companies.forEach(company => {
//   if (company.category === "Retail") console.log(company.name);
// });

// same with filter

// const reatilCompany = companies.filter(
//   company => company.category === "Retail"
// );
// let [{ name }] = reatilCompany;
// console.log(name);

// const afterEighty = companies.filter(company => company.start >= 1990);
// console.log(afterEighty);

// stated 80s and  90s

// const eightyCompanies = companies.filter(company => {
//   company.start >= 1980 && company.start <= 1990;
// });
// console.log(eightyCompanies);
// const companyName = companies.forEach(company => company.name);
// console.log(companyName);
// const doubleAge = ages.map(age => age * 2);
// for (let i = 0; i < ages.length; i++) {
//   console.log(`old age is ${ages[i]} and new one is ${doubleAge[i]}`);
// }
// const sqrAge = ages.map(age => Math.sqrt(age));
// console.log(sqrAge);

// mapping two times
// const twoMapped = ages.map(age => age * 2).map(age => age * 2);
// console.log(twoMapped);
