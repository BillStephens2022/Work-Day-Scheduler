// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Declare global variables

var timeBlockElements = document.querySelectorAll(".time-block");
var saveButtons = document.getElementsByClassName("saveBtn");
var hourlyEvents = [];
var hourlyEvent;
var currentDay = dayjs().format('MMMM DD, YYYY');
var hour = parseInt(dayjs().format('H'));

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //Add function here
    $('#currentDay').text(currentDay);
    
    for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener("click", function () {
      
          var idClicked = this.parentNode.id;
          var parentClicked = this.parentNode;
          console.log(idClicked);
          console.log(parentClicked);
          var textArea = $(this.parentNode).children('textarea');
          eventItem = (textArea.val());
          console.log(eventItem);
          localStorage.setItem(idClicked.slice(5), eventItem);
        });
    };

    for (var i = 0; i < timeBlockElements.length; i++) {
        if ((i + 9) < hour) {
            timeBlockElements[i].classList.add('past');
        } else if ((i + 9) === hour) {
            timeBlockElements[i].classList.add('present');
        } else {
            timeBlockElements[i].classList.add('future');
        };
    };
   });

   for (var i = 0; i < timeBlockElements.length; i++) {
        if (i < 4) {
            var x = i + 9; 
            hourlyEvent = localStorage.getItem(x);
            hourlyEvents.push(hourlyEvent);
    } else {
        var x = i - 3;
        hourlyEvent = localStorage.getItem(x);
        hourlyEvents.push(hourlyEvent);
    }; 
   };


   for (var i = 0; i < timeBlockElements.length; i++) {
    if (i < 4) {
        var y = i + 9;
        $("div#hour-"+ y).children('textarea').text(localStorage.getItem(y));
    } else {
        var y = i - 3;
        $("div#hour-"+ y).children('textarea').text(localStorage.getItem(y));
    };
   };
  
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.