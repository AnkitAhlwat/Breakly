///initial set time get data from database for user start time 

///right after pressing the submit button on set reminder page
var time = db.collections('users').doc('user.uid')
time.get(reminders['start_time']).then(function (doc) {
  
  $('#break_time').html(doc.data().start_time);

  var break_intervals = [];
  var next_break = ""
  var start_time = "8:30 PM"
  var end_time = "23:30"
  var interval = 30
  var startDate = new Date("1/1/2015 " + start_time);
  var endDate = new Date("1/1/2015 " + end_time);
  var offset = interval * 1000 * 60;
  var current_time = new Date();
  var current_time = current_time.getHours() + ":" + current_time.getMinutes();
  current_time = new Date("1/1/2015 " + current_time);
  console.log(current_time) // test current actual with manufactured date

  do {
      startDate = new Date(startDate.getTime() + offset);
      
          break_intervals.push(startDate);
  } while (startDate < endDate);
  // console.log(break_intervals); checking arrray 
  // console.log(break_intervals[4]) test values

  for(i = 0; i < break_intervals.length; i++) {
      if (break_intervals[i] > current_time) {

        next_break = Math.abs(break_intervals[i] - current_time);
        console.log(next_break = Math.floor((next_break / (1000 * 60)) % 60));//showing the next break in x minutes
        document.getElementById("break_time").innerHTML = next_break // put it in the next break time into the user_homepage
        break
       
      }


  }
  // this should create an array of time intervals, then will compare the compare to the next closest interval and then calculate the remaining until the next reminder
})

//     you essentially need to pull their start time
// and then everytime they log a break
// add their increment value to their start time
// store it as their new start time
// until start time == end time

    
    

