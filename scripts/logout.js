//function allows user to logout of the system when they click the logout button
function logout() {
    console.log("logging out user");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login_homepage.html";
    }).catch((error) => {
        console.log(error)
    });
}