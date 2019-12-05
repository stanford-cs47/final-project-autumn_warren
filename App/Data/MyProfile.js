import 'localstorage-polyfill';


var profile = {
    name: "Bob Cunningham",
    username: "bobc",
    location: "Palo Alto",
    age: "25",
    bio: "I want to benchpress!",
    longBio: "Want a partner I can trust. I’ve talked to a few personal trainers over the last few weeks and I can’t help but feel like they’re just in it for a quick buck. I’m looking for someone else who wants an accountability buddy and is in it for the long haul. I’ve been a Bay Area resident my whole life, and I fly planes on the side for fun!",
    activities: ["Weightlifting", "Running"],
    personality: "Fanatic",
    experience: "Beginner",
    profileAvatar: "",
    profilePic: "",
};
var buddyUsernames = ['amys'];

localStorage.buddies = buddyUsernames;

export default { profile, buddyUsernames };
