var user = firebase.auth().currentUser;

function log_break_counter() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            userRef = db.collection("users").doc(user.uid);
            userRef.update({
                break_counter: firebase.firestore.FieldValue.increment(1)
            })
            function setup() {
                $('#break_counter').click(log_break_counter);
            }
        }
    })
}

function setup() {
    console.log('meeeeh');
    $('#break_counter').click(log_break_counter);
}
$(document).ready(setup);

function picture_setting() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            db.collection("users").doc(user.uid).onSnapshot(function (doc) {
                var today = new Date().getDay();
                var break_counter = doc.data().break_counter;
                var personal_goal = doc.data().personal_goal;
                var progress = (break_counter / personal_goal)
                $("#breaks").html(break_counter);
                $("#personal_goal").html(personal_goal);
                currentUser.set({
                    days_breaks_taken: { [today + x]: break_counter }
                }, {
                    merge: true
                })
                currentUser.set({
                    days_personal_goal: { [today + x]: personal_goal }
                }, {
                    merge: true
                })

                if (progress < 0.25) {
                    document.getElementById("picture").src = "./images/plant_1.jpg";
                }
                else if (progress < 0.50) {
                    document.getElementById("picture").src = "./images/plant_2.jpg";
                }
                else if (progress < 0.75) {
                    document.getElementById("picture").src = "./images/plant_3.jpg";
                }
                else {
                    document.getElementById("picture").src = "./images/plant_4.jpg";
                }
            })
        }
    })
}

picture_setting()