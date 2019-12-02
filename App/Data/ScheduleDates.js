var dates = [];
var date1 = {
    month: 12,
    day: [],
    key: "1"
}
var date2 = {
    month: 12,
    day: [],
    key: "2"
}
var date3 = {
    month: 12,
    day: [],
    key: "3"
}

//var day = [];
var key = "";
var day = [{time: "8:00a", num: 8, end: "8:30a"}, {time: "8:30a", num: 8.5, end: "9:00a"}, {time: "9:00a", num: 9, end: "9:30a"}, {time:"9:30a", num:9.5,  end: "10:00a"}, {time:"10:00a", num:10, end: "10:30a"}, {time:"10:30a", num:10.5, end: "11:00a"}, {time:"11:00a", num:11, end: "11:30a"},
{time:"11:30a", num:11.5, end: "12:00p"}, {time:"12:00p", num:12, end: "12:30p"}, {time:"12:30p", num:12.5, end: "1:00p"}, {time:"1:00p", num:13, end: "1:30p"}, {time:"1:30p", num:13.5, end: "2:00p"}, {time:"2:00p", num:14, end: "2:30p"}, {time:"2:30p", num:14.5, end: "3:00p"}, {time:"3:00p", num:15, end: "3:30p"}, {time:"3:30p", num:15.5, end: "4:00p"},
{time: "4:00p", num:16, end: "4:30p"}, {time:"4:30p", num:16.5, end: "5:00p"}, {time:"5:00p", num:17, end: "5:30p"}, {time:"5:30p", num:17.5, end: "6:00p"}, {time:"6:00p", num:18, end: "6:30p"}, {time:"6:30p", num:18.5, end: "7:00p"}, {time:"7:00p", num:19, end: "7:30p"}, {time:"7:30p", num:19.5, end: "8:00p"}, {time:"8:00p", num:20, end: "8:30p"}, {time:"8:30p", num:20.5, end: "9:00p"},
                {time: "9:00p", num:21, end: "9:30p"}, {time:"9:30p", num:21.5, end: "10:00p"}, {time:"10:00p", num:22, end: "10:30p"},{ time:"10:30p", num:22.5, end: "11:00p"}, {time:"11:00p", num:23, end: "11:30p"}, {time:"11:30p", num:23.5, end: "12:00a"}];
/*for(i = 0; i < 15; i += .5) {
    var hour = i + 8;
    var time = {hour: hour, key: "" + i};
    day.push(time);
}*/
    //past = hour;
date1.day.push(day);
date2.day.push(day);
date3.day.push(day);
console.log(date1)
export default { dates, day};