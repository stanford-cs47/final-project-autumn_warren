import 'localstorage-polyfill';


var profile = {
    name: "Bob Cunningham",
    username: "bobc",
    location: "Palo Alto",
    age: "25",
    bio: "I want to benchpress!",
    activities: ["Weightlifting", "Running"],
    personality: "Fanatic",
    experience: "Beginner",
    profileAvatar: "",
    profilePic: "",
    //buddies: []
};
var buddyUsernames = ['amys'];

localStorage.buddies = buddyUsernames;

export default { profile, buddyUsernames };
