var user = firebase.auth().currentUser;

function write_data(event) {
    event.preventDefault();
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            //pulls the data from the set reminder form and stores it in variables
            user_start_time = $('#start_time').val();
            user_interval = $('#interval').val();
            user_interval = parseInt(user_interval);
            user_end_time = $('#end_time').val();
            user_goal = $('#personal_goal').val();
            user_goal = parseInt(user_goal);

            //updates the data in the corresponding users database with the value they inputted
            db.collection("users").doc(user.uid).update({
                reminders: {
                    start_time: user_start_time,
                    interval: user_end_time,
                    end_time: user_end_time,
                },
                personal_goal: user_goal,
            })
                //after updating, redirect to the users homepage
                .then(
                    function () {
                        window.location.href = 'user_homepage.html';
                    },
                    //if unable to update, will log error
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