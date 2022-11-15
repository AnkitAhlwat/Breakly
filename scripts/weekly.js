
var user = firebase.auth().currentUser;


function goalTracker() {
    console.log("ready")
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:


        if (user) {
            db.collection("users").get()

                .then(snap => {
                    snap.forEach(element => {
                        console.log(element.id)
                        console.log(user.uid)
                        if (element.id == user.uid) {
                            const user_name = element.data().name
                            const break_counter = element.data().break_counter
                            const personal_goal = element.data().personal_goal
                            const goal = (break_counter / personal_goal) * 100
                            $("#name").html(user_name)
                            // Learn how to get data from a time span
                            // $("#c_weekly").html(break_counter)
                            // $("#p_weekly").html(personal_goal)
                            // $("#goal_progress").html(goal)
                            console.log(element)
                            console.log(goal)

                        }
                    });

                }
                )


        }

    }
    );
}

goalTracker();