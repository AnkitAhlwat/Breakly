var user = firebase.auth().currentUser;

function goalTracker() {
    console.log("ready")
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:


        if (user) {
            currentUser = db.collection("users").doc(user.uid)
            db.collection("users").get()

                .then(snap => {
                    snap.forEach(element => {

                        if (element.id == user.uid) {
                            var today = new Date().getDay();
                            var break_counter = Number(element.data().break_counter)
                            var personal_goal = Number(element.data().personal_goal)
                            currentUser = db.collection("users").doc(user.uid)
                            currentUser.set({
                                days_breaks_taken: { [today]: break_counter }
                            }, {
                                merge: true
                            })
                            currentUser.set({
                                days_personal_goal: { [today]: personal_goal }
                            }, {
                                merge: true
                            })



                        }
                    });

                }

                )


        }

    }
    );

}
goalTracker();