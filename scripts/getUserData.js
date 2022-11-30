//
function populateInfo() {

    firebase.auth().onAuthStateChanged(user => {
        console.log("on")
        if (user) {
            // go and get the logged in user's info from firestore
            currentUser = db.collection("users").doc(user.uid);
            console.log(user.uid)
            currentUser.get()
                .then(userDoc => {
                    let userName = userDoc.data().name;
                    console.log(userName)
                    let userSchool = userDoc.data().school;
                    console.log(userSchool)
                    let userCountry = userDoc.data().country;
                    console.log(userCountry)
                    let userEmail = userDoc.data().email;
                    console.log(userEmail)
                    let breakCounter = userDoc.data().break_counter
                    console.log(breakCounter)
                    let userAboutMe = userDoc.data().aboutme;
                    console.log(userAboutMe)
                    let picUrl = userDoc.data().profilePic;
                    console.log(picUrl)
                    // assign the user info into the appropriate id's
                    document.getElementById("name").innerHTML = userName;

                    document.getElementById("break_counter").innerHTML = breakCounter;

                    document.getElementById("school").innerHTML = userSchool;

                    document.getElementById("country").innerHTML = userCountry;

                    document.getElementById("email").innerHTML = userEmail;

                    document.getElementById("aboutme").innerHTML = userAboutMe;

                    $("#mypic-goes-here").attr("src", picUrl);

                })

        } else {
            console.log("no user is logged in")
        }
    });


}
populateInfo();

