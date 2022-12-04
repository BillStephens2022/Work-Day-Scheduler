// Declare gobal variables

var timeBlockElements = $(".time-block"); 
var saveButtons = $(".saveBtn");
var hourlyEvents = [];
var hourlyEvent;
var currentDay = dayjs().format('MMMM DD, YYYY');
var hour = parseInt(dayjs().format('H'));


/* wrapping all code that interacts with the DOM in a call to jQuery to ensure that
the code isn't run until the browser has finished rendering all the elements
in the html. */

$(function () {
    
    // displays current date in header
    $('#currentDay').text(currentDay);
    
    /* for loop to iterate through array of save buttons to add an event listener.
    Saves any item entered into a time block (time blocks are parent elements 
    to the button) into local storage based on id of the time block.  */

    for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener("click", function () {
          var idClicked = this.parentNode.id;
          var textArea = $(this.parentNode).children('textarea');
          eventItem = (textArea.val());
          localStorage.setItem(idClicked.slice(5), eventItem);
        });
    };

    /* for loop to iterate through the time blocks to determine if the time block
    is in the past, present, or future.  A class of 'past', 'present', or 'future'
    is then added to the time block element based on the current hour which is 
    retrieved using dayJS in the variable declarations above. */

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

   /* for loop to retrieve all items in local storage and pull them 
   into an array */

//    for (var i = 0; i < timeBlockElements.length; i++) {
//         if (i < 4) {
//             var x = i + 9; 
//             hourlyEvent = localStorage.getItem(x);
//             hourlyEvents.push(hourlyEvent);
//     } else {
//         var x = i - 3;
//         hourlyEvent = localStorage.getItem(x);
//         hourlyEvents.push(hourlyEvent);
//     }; 
//    };

   /* for loop to place all the items in local storage back into its respective
   time block when page is launched/refreshed */

   for (var i = 0; i < timeBlockElements.length; i++) {
    if (i < 4) {
        var y = i + 9;
        $("div#hour-"+ y).children('textarea').text(localStorage.getItem(y));
    } else {
        var y = i - 3;
        $("div#hour-"+ y).children('textarea').text(localStorage.getItem(y));
    };
   };
  
    