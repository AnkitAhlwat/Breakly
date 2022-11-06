var user = firebase.auth().currentUser;

function write_data(event) {
    event.preventDefault();
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            x = $('#start_time').val();
            y = $('#interval').val();
            z = $('#end_time').val();
            p = $('#personal_goal').val();
            p = parseInt(p);
            console.log(x)
            console.log(y)
            console.log(z)
            console.log(user.uid)
            console.log(p)

            db.collection("users").doc(user.uid).update({
                reminders: {
                    start_time: x,
                    interval: y,
                    end_time: z
                },
                personal_goal: p,
            })
                .then(
                    function () {
                        window.location.href = 'user_homepage.html';
                    },
                    function (error) {
                        console.error("Error writing document: ", error);
                    });
        }
    })
}


function setup() {
    $('#log_button').click(write_data);
}

$(document).ready(setup);