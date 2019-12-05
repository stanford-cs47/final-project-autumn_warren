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
    time: "Sat, Nov 2.  8am",
    eventAttendies: ["samGPic", "tinaFPic", "connorBPic"],
    eventImage: "TrailRun1",
    details: "Join us for a 10-mile run at the Dish! All levels welcome!",
    activity: "Running",
}
var event2 = {
    name: "Soul Cycle",
    eventId: "event2",
    location: "24-Hour Fitness",
    time: "Sun, Nov 3.  1pm",
    eventAttendies: ["Steve N.", "Kristen S.", "Ron L."],
    eventImage: "SoulCycle2",
    details: "Sammy is leading a 60-minute Soul Cycle workout this Sunday. Join us for an intense afternoon spin.",
    activity: "Cycling",
}

var event3 = {
    name: "Crossfit",
    eventId: "event3",
    location: "Training Space",
    time: "Sun, Nov 3.  1pm",
    eventAttendies: ["Sean P.", "Blake M."],
    eventImage: "CoupleCrossfit3",
    details: "Couple’s Crossfit gives partners the opportunity to get in shape together with partner crossfit exercises. We meet every Sunday afternoon!",
    activity: "Crossfit",
}

var event4 = {
    name: "Turkey Trot",
    eventId: "event4",
    location: "Angell Field",
    time: "Mon, Nov 4.  6am",
    eventAttendies: ["Sean P.", "Blake M."],
    eventImage: "TurkeyTrot4",
    details: "Prepping for the Stanford 5k Turkey Trot for Thanksgiving? Join other beginner runners at the Stanford Track to get that cardio up before your big day!",
    activity: "Running",
}

var event5 = {
    name: "Drop Sets",
    eventId: "event5",
    location: "ACSR",
    time: "Mon, Nov 4.  8pm",
    eventAttendies: ["Ron L.", "Blake M."],
    eventImage: "DropSets5",
    details: "One hour of all drop sets with arms. Blake leads this workout at the ACSR on Stanford’s campus.",
    activity: "Weightlifting",
}

var event6 = {
    name: "Cycle Circuit",
    eventId: "event6",
    location: "Foothill 16",
    time: "Tues, Nov 4.  6am",
    eventAttendies: ["Jane R.", "Ron L."],
    eventImage: "LosAltosCycling6",
    details: "We do a 90-minute cycling circuit along the Atrastradero Foothills in Los Altos before work every Tuesday. We go rain or shine! Join us if you think life is better in lycra!",
    activity: "Cycling",
}

var event7 = {
    name: "Yoga",
    eventId: "event7",
    location: "Yoga Studio",
    time: "Wed, Nov 5.  5pm",
    eventAttendies: ["Yolanda P.", "Kristen S."],
    eventImage: "YogaWithYolanda7",
    details: "Bikram Yoga in San Bruno is a 60-minute yoga session with advanced yoga students who are eager to find peace and balance through establishing a mind-body connection. There is a $5 fee to enter the studio.",
    activity: "Yoga",
}

var event8 = {
    name: "Bodyattack",
    eventId: "event8",
    location: "YMCA",
    time: "Wed, Nov 5.  6pm",
    eventAttendies: ["Henry C.", "Blake M."],
    eventImage: "BodyattackWithHenry8",
    details: "Bodyattack is a dance fitness workout that happens all around the country. I’ve been teaching Bodyattack for 2 years here in San Mateo and I love dance fitness with all my heart. Join me and my students for a great group workout.",
    activity: "Dance",
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