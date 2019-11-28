function addEvent(event) {
    events[event.eventId] = event;
    eventIds.push(event.eventId);
}

var events = {};
var eventIds = [];

var event1 = {
    name: "Trail Run",
    eventId: "samg",
    location: "The Dish",
    time: "Sat, Nov 2 - 8pm",
    eventAttendies: ["Sam G."],
    eventImage: "samGPic",
    details: "Join us for a 10 mile run at the dish! All levels welcome",
}

var event2 = {
    name: "Hiking",
    eventId: "thehike",
    location: "Stone Mountain",
    time: "Mon, Dec 5 - 8pm",
    eventAttendies: ["Sam G.","Collin M."],
    eventImage: "collinMPic",
}

var event3 = {
    name: "B- Ball",
    eventId: "bball",
    location: "LA Fitness",
    time: "Mon, Dec 5 - 8pm",
    eventAttendies: ["Sam G.","Collin M."],
    eventImage: "tinaFPic",
}

var event4 = {
    name: "B- Ball",
    eventId: "event4",
    location: "LA Fitness",
    time: "Mon, Dec 5 - 8pm",
    eventAttendies: ["Sam G.","Collin M."],
    eventImage: "tinaFPic",
}

var event5 = {
    name: "B- Ball",
    eventId: "event5",
    location: "LA Fitness",
    time: "Mon, Dec 5 - 8pm",
    eventAttendies: ["Sam G.","Collin M."],
    eventImage: "tinaFPic",
}

var event6 = {
    name: "B- Ball",
    eventId: "event6",
    location: "LA Fitness",
    time: "Mon, Dec 5 - 8pm",
    eventAttendies: ["Sam G.","Collin M."],
    eventImage: "tinaFPic",
}

addEvent(event1);
addEvent(event2);
addEvent(event3);
addEvent(event4);
addEvent(event5);
addEvent(event6);
export default { events, eventIds };