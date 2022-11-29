function getUserData() {

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            // get access to the current users data from the firestore
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
                .then(userDoc => {
                    let picUrl = userDoc.data().profilePic;

                    console.log("The pic url is", picUrl);
                    // cannot get the image from firebase storage
                    $("#mypic-goes-here").attr("src", picUrl);


                    // populate the users data into the the profile card into profile.html
                    document.getElementById("name").innerHTML = userDoc.data().name
                    console.log("The user's name is:", userDoc.data().name)
                    document.getElementById("school").innerHTML = userDoc.data().school
                    console.log("The user's school is:", userDoc.data().school)
                    document.getElementById("email").innerHTML = userDoc.data().email
                    console.log("The user's email is:", userDoc.data().email)
                    document.getElementById("break_counter").innerHTML = userDoc.data().break_counter
                    console.log("The user's current break counter is at:", userDoc.data().break_counter)


                })
        }
    });
}
getUserData();// invoke the function