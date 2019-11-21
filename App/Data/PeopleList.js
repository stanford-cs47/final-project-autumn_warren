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
    age: "27",
    bio: "I wanna crush the bench like M. Landis!",
    activities: ["Weights", "Running"],
    profileAvatar: "weightlifting",
    profilePic: "",
    schedule: "High",
    experience: "Beginner"
}
var person2 = {
    name: "Tina F.",
    username: "tinaf",
    location: "Fremont",
    age: "25",
    bio: "I'm preparing for my first marathon. Join me!",
    activities: ["Running"],
    profileAvatar: "running",
    profilePic: "",
    schedule: "High",
    experience: "Intermediate"
}
var person3 = {
    name: "Connor B.",
    username: "connorb",
    location: "Palo Alto",
    age: "23",
    bio: "I want to curl 50s in 6 months.",
    activities: ["Weights"],
    profileAvatar: "weightlifting",
    profilePic: "",
    schedule: "High",
    experience: "Expert"
}
var person4 = {
    name: "Mary L.",
    username: "maryl",
    location: "Mountain View",
    age: "24",
    bio: "I want to do a triathlon!",
    activities: ["Running", "Swimming", "Cycling"],
    profileAvatar: "running",
    profilePic: "",
    schedule: "Med",
    experience: "Beginner"
}
var person5 = {
    name: "Pooja K.",
    username: "poojak",
    location: "Palo Alto",
    age: "26",
    bio: "I'm an avid cyclist looking for someone to cycle with.",
    activities: ["Cycling"],
    profileAvatar: "cycling",
    profilePic: "",
    schedule: "Med",
    experience: "Beginner"
}
var person6 = {
    name: "Colin M.",
    username: "colinm",
    location: "Palo Alto",
    age: "29",
    bio: "I'm looking for someone to keep me motivated!",
    activities: ["Weights", "Swimming", "Basketball"],
    profileAvatar: "swimming",
    profilePic: "",
    schedule: "Low",
    experience: "Expert"
}
addPerson(person1);
addPerson(person2);
addPerson(person3);
addPerson(person4);
addPerson(person5);
addPerson(person6);

export default { people, users };
