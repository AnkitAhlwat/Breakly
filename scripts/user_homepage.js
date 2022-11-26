var user = firebase.auth().currentUser;

//if user is signed in, redirect them to set reminder page
function change_break() {
    window.location.href = "./setreminder.html";
}

function log_break_counter() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            //if user is signed in, update and increment the break counter by 1 in the database
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

function picture_setting() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            //reads the data from fire-store and stores it in a variable to update user homepage with this data
            db.collection("users").doc(user.uid).onSnapshot(function (doc) {
                var today = new Date().getDay();
                var break_counter = doc.data().break_counter;
                var personal_goal = doc.data().personal_goal;
                var progress = (break_counter / personal_goal)
                $("#breaks").html(break_counter);
                $("#personal_goal").html(personal_goal);
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

                //calculates the user progress towards their goal, and sets different plant image depending on progress
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

function setup() {
    $('#break_counter').click(log_break_counter);
    $('#break_counter').click(picture_setting);
    $("#change_break").click(change_break)
}
$(document).ready(setup);
picture_setting()