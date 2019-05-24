const profile = {
  name: "xyz",
  dateOfBirth: "17/07/1966",
  email: "xyz@gmail.com",
  address: {
    state: "jharkhand",
    city: "ranchi",
    street: "unknown"
  },
  hobbies: ["first", "second", "third"]
};

let { name: n, dateOfBirth: d, email: e, address: a, hobbies: h } = profile;

// console.log(n, d, e, a.city, h[0]);

let { state } = profile.address;

// console.log(state);
