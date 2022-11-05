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