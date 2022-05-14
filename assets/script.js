var currentTimeEl = $("#currentDay");
var timeSlotsEl = $(".time-slots");
var timeBlockEl = document.querySelectorAll(".time-block");
var hourSlotEl = $(".hour");
var taskSlotEl = $(".task");
var saveBtnEl = $(".saveBtn");

var i = 0;
var now = moment();
console.log(timeBlockEl);
setInterval(() => {
    now = moment();
    currentTimeEl.text(now.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);
for (var i = 0; i < timeBlockEl.length; i++) {
    console.log(timeBlockEl[i])
    if (timeBlockEl[i].id < now.format("HH")) {
        console.log("here");
        timeBlockEl[i].addClass("past");
        timeBlockEl[i].removeClass("present")
    }
    else if (timeBlockEl[i].id == now.format("HH")) {
        timeBlockEl[i].addClass("present");
        timeBlockEl[i].removeClass("future");
    }
    else {
        timeBlockEl[i].addClass("future");
    }
}