function contact_us() {
    var user_name = document.getElementById("user_name").value;
    var user_email = document.getElementById("user_email").value;
    var user_message = document.getElementById("user_message").value;

    db.collection("Support").add({
        name: user_name,
        email: user_email,
        message: user_message
    })
        .then(function () {
            document.getElementById("user_name").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("user_message").value = "";


        })
}