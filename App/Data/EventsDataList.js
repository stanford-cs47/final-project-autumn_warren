function addEvent(event) {
    events[event.eventId] = event;
    eventIds.push(event.eventId);
}

var events = {};
var eventIds = [];

var event1 = {
    name: "Trail Run",
    eventId: "event1",
    location: "The Dish",
    time: "Fri, Dec 6.  8am",
    eventAttendies: ["samGPic", "tinaFPic", "connorBPic"],
    eventImage: "TrailRun1",
    details: "Join us for a 10-mile run at the Dish! All levels welcome!",
    activity: "Running",
    dayDistance: 0
}
var event2 = {
    name: "Soul Cycle",
    eventId: "event2",
    location: "24-Hour Fitness",
    time: "Sat, Dec 7.  1pm",
    eventAttendies: ["poojaKPic","connorBPic", "maryLPic"],
    eventImage: "SoulCycle2",
    details: "Sammy is leading a 60-minute Soul Cycle workout this Sunday. Join us for an intense afternoon spin.",
    activity: "Cycling",
    dayDistance: 1
}

var event3 = {
    name: "Crossfit",
    eventId: "event3",
    location: "Training Space",
    time: "Sun, Dec 8.  1pm",
    eventAttendies: ["connorBPic", "maryLPic"],
    eventImage: "CoupleCrossfit3",
    details: "Couple’s Crossfit gives partners the opportunity to get in shape together with partner crossfit exercises. We meet every Sunday afternoon!",
    activity: "Crossfit",
    dayDistance: 2
}

var event4 = {
    name: "Turkey Trot",
    eventId: "event4",
    location: "Angell Field",
    time: "Mon, Dec 9.  6am",
    eventAttendies: ["maryLPic"],
    eventImage: "TurkeyTrot4",
    details: "Prepping for the Stanford 5k Turkey Trot for Thanksgiving? Join other beginner runners at the Stanford Track to get that cardio up before your big day!",
    activity: "Running",
    dayDistance: 3
}

var event5 = {
    name: "Drop Sets",
    eventId: "event5",
    location: "ACSR",
    time: "Mon, Dec 9.  8pm",
    eventAttendies: ["maryLPic", "sameGPic"],
    eventImage: "DropSets5",
    details: "One hour of all drop sets with arms. Blake leads this workout at the ACSR on Stanford’s campus.",
    activity: "Weightlifting",
    dayDistance: 3
}

var event6 = {
    name: "Cycle Circuit",
    eventId: "event6",
    location: "Foothill 16",
    time: "Tues, Dec 10.  6am",
    eventAttendies: ["collinMPic", "connorBPic"],
    eventImage: "LosAltosCycling6",
    details: "We do a 90-minute cycling circuit along the Atrastradero Foothills in Los Altos before work every Tuesday. We go rain or shine! Join us if you think life is better in lycra!",
    activity: "Cycling",
    dayDistance: 4
}

var event7 = {
    name: "Yoga",
    eventId: "event7",
    location: "Yoga Studio",
    time: "Wed, Dec 11.  5pm",
    eventAttendies: ["tinaFPic", "connorBPic"],
    eventImage: "YogaWithYolanda7",
    details: "Bikram Yoga in San Bruno is a 60-minute yoga session with advanced yoga students who are eager to find peace and balance through establishing a mind-body connection. There is a $5 fee to enter the studio.",
    activity: "Yoga",
    dayDistance: 5
}

var event8 = {
    name: "Bodyattack",
    eventId: "event8",
    location: "YMCA",
    time: "Wed, Dec 11.  6pm",
    eventAttendies: ["tinaFPic", "poojaKPic"],
    eventImage: "BodyattackWithHenry8",
    details: "Bodyattack is a dance fitness workout that happens all around the country. I’ve been teaching Bodyattack for 2 years here in San Mateo and I love dance fitness with all my heart. Join me and my students for a great group workout.",
    activity: "Dance",
    dayDistance: 5
}

addEvent(event1);
addEvent(event2);
addEvent(event3);
addEvent(event4);
addEvent(event5);
addEvent(event6);
addEvent(event7);
addEvent(event8);
export default { events, eventIds };