const findTheOldest = function(people) { 
  let year = 2023
  let oldestPerson = people[0];
  let oldestAge = 0;
  for (let person of people) {
    if (person.yearOfDeath === undefined) {
      person.age = year - person.yearOfBirth;
    }
    else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
    if (person.age > oldestAge) {
      oldestAge = person.age;
      oldestPerson = person;
    }
  }
  return oldestPerson;

};

  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
