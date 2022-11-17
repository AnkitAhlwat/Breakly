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
                        // console.log(element.id)
                        // console.log(user.uid)
                        if (element.id == user.uid) {
                            var today = new Date().getDay();
                            const user_name = element.data().name
                            var break_counter = Number(element.data().break_counter)
                            var personal_goal = Number(element.data().personal_goal)
                            const goal = Number((break_counter / personal_goal) * 100)
                            $("#name").html(user_name)
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
// goalTracker();
// setDailyGoal();

var today = new Date().getDay();
// console.log(today)
// console.log(currentUser)
// function setDailyGoal(breaks_taken) {
//     if (today == 1)
//         currentUser.set({
//             days: [{ breaks_taken: break_counter }]
//         }, {
//             merge: true
//         })
//     if (today == 2)
//         currentUser.set({
//             days: [{ breaks_taken: break_counter }]
//         }, {
//             merge: true
//         })
//     if (today == 3)
//         currentUser.set({
//             monday: [{ breaks_taken: break_counter }]

//         }, {
//             merge: true
//         })
//     if (today == 4)
//         currentUser.set({
//             tuesday: 7
//         }, {
//             merge: true
//         })
//     if (today == 5)
//         currentUser.set({
//             days: [{ breaks_taken: break_counter }]
//         }, {
//             merge: true
//         })
//     if (today == 6)
//         currentUser.set({
//             days: [{ breaks_taken: break_counter }]
//         }, {
//             merge: true
//         })
//     if (today == 7)
//         currentUser.set({
//             days: [{ breaks_taken: break_counter }]
//         }, {
//             merge: true
//         })

// }

//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "bookmark" icon.
// It adds the hike to the "bookmarks" array
// Then it will change the bookmark icon from the hollow to the solid version. 
//-----------------------------------------------------------------------------
function saveBookmark() {
    currentUser.set({
        bookmarks: 7
    }, {
        merge: true
    })
        .then(function () {
            console.log("bookmark has been saved for: " + currentUser);
            var iconID = 'save-' + hikeID;
            //console.log(iconID);
            //this is to change the icon of the hike that was saved to "filled"
            document.getElementById(iconID).innerText = 'bookmark';
        });
}
// console.log(break_counter)
// saveBookmark();

// function goalTracker() {
//     console.log("ready")
//     firebase.auth().onAuthStateChanged(user => {
//         // Check if a user is signed in:


//         if (user) {
//             currentUser = db.collection("users").doc(user.uid)
//             currentUser.set({
//                 tuesday: [{ breaks_taken: break_counter }]
//             }, {
//                 merge: true
//             })



//         }
//     }
//     )
// }
goalTracker();