var user = firebase.auth().currentUser;

function goalTracker() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            db.collection("users").doc(user.uid).onSnapshot(function (doc) {
                var today = new Date().getDay();
                var array_of_personal_goals = doc.data().days_personal_goal;
                var array_of_breaks_taken = doc.data().days_breaks_taken;
                var goal_total = 0
                for (var key in array_of_personal_goals) {
                    goal_total += array_of_personal_goals[key];
                };
                var break_total = 0
                for (var key in array_of_breaks_taken) {
                    break_total += array_of_breaks_taken[key];

                };
                var progress = (break_total / goal_total) * 100;
                for (i = 1; i <= Object.keys(array_of_breaks_taken).length; i++) {
                    console.log(i)
                    width = (array_of_breaks_taken[i] / array_of_personal_goals[i]) * 100
                    $(".container").append(
                        `

                        <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${width}% ;" aria-valuenow="${width}" aria-valuemin="0" aria-valuemax="100]">${width}%</div>
                        </div>
                        <br>
                        `
                    )
                }
                $("#breaks").html(break_total);
                $("#personal_goal").html(goal_total);
                $("#progress").html(progress.toFixed());


            })
        }
    })

}
goalTracker();