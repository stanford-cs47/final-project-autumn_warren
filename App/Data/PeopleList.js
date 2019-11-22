function addPerson(person) {
    people[person.username] = person;
    users.push(person.username);
}

var people = {};
var users = [];

var person1 = {
    name: "Sam G.",
    username: "samg",
    location: "Mountain View",
    locations: ["24 Hour Fitness"],
    age: "27",
    bio: "I wanna crush the bench like M. Landis!",
    activities: ["Weights", "Running"],
    profileAvatar: "",
    profilePic: "",
    schedule: "High",
    experience: "Intermediate"
}
var person2 = {
    name: "Tina F.",
    username: "tinaf",
    location: "Fremont",
    locations: ["24 Hour Fitness"],
    age: "25",
    bio: "I'm preparing for my first marathon. Join me!",
    activities: ["Running"],
    profileAvatar: "",
    profilePic: "",
    schedule: "High",
    experience: "Beginner"
}
var person3 = {
    name: "Connor B.",
    username: "connorb",
    location: "Palo Alto",
    locations: ["24 Hour Fitness"],
    age: "23",
    bio: "I want to curl 50s in 6 months.",
    activities: ["Weights"],
    profileAvatar: "",
    profilePic: "",
    schedule: "High",
    experience: "Beginner"
}
var person4 = {
    name: "Mary L.",
    username: "maryl",
    location: "Mountain View",
    locations: ["24 Hour Fitness"],
    age: "24",
    bio: "I want to do a triathlon!",
    activities: ["Running", "Swimming", "Cycling"],
    profileAvatar: "",
    profilePic: "",
    schedule: "Med",
    experience: "Beginner"
}
var person5 = {
    name: "Pooja K.",
    username: "poojak",
    location: "Palo Alto",
    locations: ["24 Hour Fitness"],
    age: "26",
    bio: "I'm an avid cyclist looking for someone to cycle with.",
    activities: ["Cycling"],
    profileAvatar: "",
    profilePic: "",
    schedule: "Med",
    experience: "Beginner"
}
var person6 = {
    name: "Colin M.",
    username: "colinm",
    location: "Palo Alto",
    locations: ["Soul Cycle"],
    age: "29",
    bio: "I'm looking for someone to keep me motivated!",
    activities: ["Weights", "Swimming", "Basketball"],
    profileAvatar: "",
    profilePic: "",
    schedule: "Low",
    experience: "Beginner"
}
addPerson(person1);
addPerson(person2);
addPerson(person3);
addPerson(person4);
addPerson(person5);
addPerson(person6);

export default { people, users };
