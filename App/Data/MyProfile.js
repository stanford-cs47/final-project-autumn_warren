
var profile = {
    name: "Bob Cunningham",
    username: "bobc",
    location: "Palo Alto",
    age: "25",
    bio: "I want to benchpress!",
    activities: ["Weights", "Running"],
    personality: "Fanatic",
    experience: "Beginner",
    profileAvatar: "",
    profilePic: "",
    //buddies: []
};
var buddyUsernames = [];
var buddies= {};
var myBuddy= 
    {
        name: "Amy S.",
        username: "amys",
        location: "San Jose",
        age: "31",
        bio: "Wqant a partner I can trust",
        activities: ["Weights","Yoga", "Swimming"],
        personality: "Fanatic",
        experience: "Beginner",
        profileAvatar: "",
        profilePic: "amys",
        message: "Sorry I am running late, I will be there in five. See you Soon!"
    };

    function addPerson(person) {
        buddies[person.username] = person;
        buddyUsernames.push(person.username);
    };

addPerson(myBuddy);

export default { buddies, profile, buddyUsernames };
