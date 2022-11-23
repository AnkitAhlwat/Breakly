function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid);
            console.log(user.displayName);
            user_Name = user.displayName;

            //insert users name into the welcome message
            $("#name-goes-here").text(user_Name);
        }
    });
}
insertName(); //run the function