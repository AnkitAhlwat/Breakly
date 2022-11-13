///initial set time get data from database for user start time 

///right after pressing the submit button on set reminder page
function calculateIntervals() {
  
  firebase.auth().onAuthStateChanged(user => {

    if (user) {
      currentUser = db.collection("users").doc(user.uid)
      currentUser.get()
        .then(userDoc => {

          var break_intervals = [];
          var next_break = ""
          var reminders = userDoc.data().reminders;
          var start_time = reminders.start_time;
          var end_time = reminders.end_time;
          var interval = reminders.interval;
          var startDate = new Date("1/1/2022 " + start_time);
          var endDate = new Date("1/1/2022 " + end_time);
          var offset = interval * 1000 * 60;
          var current_time = new Date();
          var current_time = current_time.getHours() + ":" + current_time.getMinutes();
          current_time = new Date("1/1/2022 " + current_time);
          console.log(current_time)

          do {
            startDate = new Date(startDate.getTime() + offset);
                
            break_intervals.push(startDate);
          } while (startDate < endDate);
          for (i = 0; i < break_intervals.length; i++) {
            if (break_intervals[i] > current_time) {

              next_break = Math.abs(break_intervals[i] - current_time);
              next_break = Math.floor((next_break / (1000 * 60)) % 60);//showing the next break in x minutes
              document.getElementById("break_time").innerHTML = next_break // put it in the next break time into the user_homepage
              break
                  
            }

          }
            document.getElementById("my_personal_goal").innerHTML = userDoc.data().personal_goal
        })
    }
  });
  // this should create an array of time intervals, then will compare the compare to the next closest interval and then calculate the remaining until the next reminder
}

calculateIntervals();

//     you essentially need to pull their start time
// and then everytime they log a break
// add their increment value to their start time
// store it as their new start time
// until start time == end time

    
    
