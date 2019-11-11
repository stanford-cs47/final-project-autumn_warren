var buddy1 = {
    name: "Sam G.",
    username: "samg",
    location: "Mountain View",
    age: "27",
    bio: "I wanna crush the bench like M. Landis!",
    }
    var buddy2 = {
      name: "Tina F.",
      username: "tinaf",
      location: "Fremont",
      age: "25",
      bio: "I'm preparing for my first marathon. Join me!",
      }
    var buddies = [];
    buddies.push(buddy1);
    buddies.push(buddy2);
    export default buddies;
    export function getBuddyData(username) {
        var result = buddies.find(obj.username === username);
        return result;
    };