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
    activities: ["Weightlifting", "Running"],
    profileAvatar: "weightlifting",
    profilePic: "samGPic",
    schedule: "High",
    experience: "Beginner",
    longBio: "I’m new to the game, but I’m a passionate weightlifter and runner! I’m looking for a buddy that can push me to go a little farther than before. I like to work out 3 days a week!"
}
var person2 = {
    name: "Tina F.",
    username: "tinaf",
    location: "Fremont",
    locations: ["24 Hour Fitness"],
    age: "25",
    bio: "I'm preparing for my first marathon. Join me!",
    activities: ["Running"],
    profileAvatar: "running",
    profilePic: "tinaFPic",
    schedule: "High",
    experience: "Intermediate",
    longBio: "I need an accountability buddy who can help me train for the SF Marathon by November. I’m really easy going and I love talking about dogs and babies! I usually like to run in the East Bay parks. I also like sewing and crochet!"
}
var person3 = {
    name: "Connor B.",
    username: "connorb",
    location: "Palo Alto",
    locations: ["24 Hour Fitness"],
    age: "23",
    bio: "I want to curl 50s in 6 months.",
    activities: ["Weightlifting"],
    profileAvatar: "weightlifting",
    profilePic: "connorBPic",
    schedule: "High",
    experience: "Expert",
    longBio: "I’ve been exercising for four years, but I’ve found my best workouts come when I’m with a partner. My passion is cycling, but I’ve been doing a lot of weights recently to help build more strength. Really need to find someone for Tuesdays and Thursdays at 24 Hour Fitness!"
}
var person4 = {
    name: "Mary L.",
    username: "maryl",
    location: "Mountain View",
    locations: ["24 Hour Fitness"],
    age: "24",
    bio: "I want to do a triathlon!",
    activities: ["Running", "Swimming", "Cycling"],
    profileAvatar: "running",
    profilePic: "maryLPic",
    schedule: "Med",
    experience: "Beginner",
    longBio:"New to the area and the platform! I love dogs – I watch all the national dog competitions and I can name 102 different breeds. I’d love to meet someone my age in the area who like to talk as much as I do, and it wouldn’t hurt to get into a little better shape along the way."
}
var person5 = {
    name: "Pooja K.",
    username: "poojak",
    location: "Palo Alto",
    locations: ["24 Hour Fitness"],
    age: "26",
    bio: "I'm an avid cyclist looking for someone to cycle with.",
    activities: ["Cycling"],
    profileAvatar: "cycling",
    profilePic: "poojaKPic",
    schedule: "Med",
    experience: "Expert",
    longBio: "I’m looking for a partner who exercises to be calm and focused like me! Fun fact: I have gone cave spelunking in 6 different continents. And I love frozen yogurt, I can eat that stuff all day!"
}
var person6 = {
    name: "Colin M.",
    username: "colinm",
    location: "Palo Alto",
    locations: ["Soul Cycle"],
    age: "29",
    bio: "I'm looking for someone to keep me motivated!",
    activities: ["Weightlifting", "Swimming", "Basketball"],
    profileAvatar: "swimming",
    profilePic: "collinMPic",
    schedule: "Low",
    experience: "Expert",
    longBio: "It’s all business for me – keep moving if you’re looking for a pal. I’m deadest on getting a six-pack for beach week and I don’t need any distractions. I lift weights and do high intensity interval training, but I’ll also do some volleyball in my off hours."
}
addPerson(person1);
addPerson(person2);
addPerson(person3);
addPerson(person4);
addPerson(person5);
addPerson(person6);

export default { people, users };
