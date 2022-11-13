function getUserData(){
            
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
            .then(userDoc => {

                document.getElementById("name").innerHTML = userDoc.data().name
                document.getElementById("school").innerHTML = userDoc.data().school
                document.getElementById("email").innerHTML = userDoc.data().email
                document.getElementById("break_counter").innerHTML = userDoc.data().break_counter

            })
        }
    });
}
getUserData();