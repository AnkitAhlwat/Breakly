//will insert specific username into spans in the html to allow personalized greeting
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log("This user's id is", user.uid);
            console.log("The user's name is", user.displayName);
            user_Name = user.displayName;

            //insert users name into the welcome message
            $("#name-goes-here").text(user_Name);
        }
    });
}
insertName(); //run the function