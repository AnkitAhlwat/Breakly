var user = firebase.auth().currentUser;

function write_data() {

    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            window.location.href = "weekly.html";
            console.log("yo")
        }
        else {
            window.location.href = "no_user.html"
        }
    })
}


function setup() {
    $('#weekly').on("click", function () {
        write_data()
    });
}

$(document).ready(setup);