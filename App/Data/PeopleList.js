function addPerson(person) {
    people[person.username] = person;
}

var people = {};
var person1 = {
    name: "Sam G.",
    username: "samg",
    location: "Mountain View",
    age: "27",
    bio: "I wanna crush the bench like M. Landis!",
    activities: ["Weights", "Running"],
    profileAvatar: "",
    profilePic: "",
}
var person2 = {
    name: "Tina F.",
    username: "tinaf",
    location: "Fremont",
    age: "25",
    bio: "I'm preparing for my first marathon. Join me!",
    activities: ["Running"],
    profileAvatar: "",
    profilePic: "",
}

addPerson(person1);
addPerson(person2);

export default people;
