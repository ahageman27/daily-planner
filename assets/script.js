var currentTimeEl = $("#currentDay");
var timeSlotsEl = $(".time-slots");
var timeBlockEl = $(".time-block");
var hourSlotEl = $(".hour");
var taskSlotEl = $(".task");
var saveBtnEl = $(".saveBtn");

var now = moment();

setInterval(() => {
    now = moment();
    currentTimeEl.text(now.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

timeBlockEl.each(function () {
    if (this.id < now.format("HH")) {
        $(this).children().eq(1).addClass("past");
        $(this).children().eq(1).removeClass("future present")
    }
    else if (this.id === now.format("HH")) {
        $(this).children().eq(1).addClass("present");
        $(this).children().eq(1).removeClass("future past");
    }
    else if (this.id > now.format("HH")) {
        $(this).children().eq(1).addClass("future");
        $(this).children().eq(1).removeClass("present past");
    }
});

function writeTasks() {
    taskSlotEl.each(function () {
        var task = localStorage.getItem($(this).attr("id"));
        $(this).val(task);
    })
}
writeTasks();

function saveTask(event) {
    event.preventDefault();
    var taskSlot = $(event.target).siblings().eq(1);
    var task = taskSlot.val();
    localStorage.setItem(taskSlot.attr("id"), task);
}

saveBtnEl.on("click", saveTask);
