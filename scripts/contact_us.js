//function reads the user inputted data from the contact us form and writes the data on to the firebase
function contact_us() {
    console.log('Submit button has been clicked!')
    var user_name = document.getElementById("user_name").value;
    var user_email = document.getElementById("user_email").value;
    var user_message = document.getElementById("user_message").value;

    //creates a new document in the contact us collection in the database with the user inputted data
    db.collection("Support").add({
        name: user_name,
        email: user_email,
        message: user_message
    })
        //clears the form so the user can input new data
        .then(function () {
            document.getElementById("user_name").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("user_message").value = "";


        })
}