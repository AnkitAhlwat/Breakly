var user = firebase.auth().currentUser;

// The function goal tracker will read data from firebase and populate it to the html
function goalTracker() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            db.collection("users").doc(user.uid).onSnapshot(function (doc) {

                // Reading from firebase
                var name = doc.data().name
                var array_of_breaks_taken = doc.data().days_breaks_taken;
                console.log("The array for breaks taken is", array_of_breaks_taken)
                var array_of_personal_goals = doc.data().days_personal_goal;
                console.log("The array for personal goals is", array_of_personal_goals)

                // Adding up both arrays to determine breaks taken to goal set
                var break_total = 0
                for (var key in array_of_breaks_taken) {
                    break_total += array_of_breaks_taken[key];

                };
                var goal_total = 0
                for (var key in array_of_personal_goals) {
                    goal_total += array_of_personal_goals[key];
                };


                // Setting up array for weekly progress 
                days = {
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday",
                    7: "Sunday",

                }

                // Iterating through each day in the breaks_taken array from firebase
                Object.keys(days).forEach(day => {
                    width = (array_of_breaks_taken[day] / array_of_personal_goals[day]) * 100

                    // To hide NAN values
                    if (width == width) {
                        $("#weekly_progress").append(
                            `
                        <h4>${days[day]}</h4>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${width}% ;" aria-valuenow="${width}" aria-valuemin="0" aria-valuemax="100]">${Math.ceil(width)}%</div>
                        </div>
                        <br>
                        `
                        )
                    }
                })

                // Displaying on weekly.html page
                $("#breaks").html(break_total);
                $("#personal_goal").html(goal_total);
                $("#name").html(name);

            });
        }
    })

}
goalTracker();