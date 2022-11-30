// this function will allow the user to edit/ save the users data and display the users current information under respectively named forms
const storage = firebase.storage() // global constant variable to get access to the storage section of firebase
var ImageFile;      //global variable to store the File Object reference

function chooseFileListener() {
    const fileInput = document.getElementById("mypic-input");   // pointer #1
    const image = document.getElementById("mypic-goes-here");   // pointer #2

    //attach listener to input file
    //when this file changes, do something
    fileInput.addEventListener('change', function (e) {

        //the change event returns a file "e.target.files[0]"
        ImageFile = e.target.files[0];
        var blob = URL.createObjectURL(ImageFile);

        //change the DOM img element source to point to this file
        image.src = blob;    //assign the "src" property of the "img" tag
    })
}
chooseFileListener();

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
                    let userAboutMe = userDoc.data().aboutme;
                    console.log(userAboutMe)
                    let picUrl = userDoc.data().profilePic;
                    console.log(picUrl)
                    // assign the user info into the appropriate id's
                    document.getElementById("currentName").innerHTML = userName;
            
                    document.getElementById("currentSchool").innerHTML = userSchool;
                
                    console.log(userCountry)
                    document.getElementById("currentCountry").innerHTML = userCountry;

                    console.log(userEmail)
                    document.getElementById("currentEmail").innerHTML = userEmail;
            
                    console.log(userAboutMe)
                    document.getElementById("currentAboutme").innerHTML = userAboutMe;

                    // show the users profile picture on the page
                    $("#mypic-goes-here").attr("src", picUrl);

                })

        } else {
            console.log("no user is logged in")
        }
    });


}
populateInfo();

function saveUserInfo() {
    firebase.auth().onAuthStateChanged(function (user) {
        //will create a url referencing to the saved image, in the firebases storage
        var storageRef = storage.ref("images/" + user.uid + ".jpg");

        //Asynch call to put File Object (global variable ImageFile) onto Cloud
        storageRef.put(ImageFile)
            .then(function () {
                console.log('Uploaded to Cloud Storage.');

                //Asynch call to get URL from Cloud
                storageRef.getDownloadURL()
                    .then(function (url) { // Get "url" of the uploaded file
                        console.log("Got the download URL.");
                        //get values from the form and store in relevant variables
                        userName = document.getElementById('nameInput').value;
                        userSchool = document.getElementById('schoolInput').value;
                        userCountry = document.getElementById('countryInput').value;
                        userEmail = document.getElementById('emailInput').value;
                        useraboutme = document.getElementById('aboutmeInput').value;

                        //Asynch call to save the form fields into Firestore.
                        db.collection("users").doc(user.uid).update({
                            name: userName,
                            school: userSchool,
                            country: userCountry,
                            email: userEmail,
                            aboutme: useraboutme,
                            profilePic: url // Save the URL into users collection
                        })
                            .then(function () {
                                console.log('Added Profile Pic URL to Firestore.');
                                console.log('Saved user profile info');
                                document.getElementById('personalInfoFields').disabled = true;
                            })
                    })
            })
    })
}

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}



// the functionality of this function is incomplete in the following ways:
// - users data cannot be populated into the appropriate forms
// - the users saved profile picture cannot be used through the firebase URL in the profile.html 
//   (pulled from firebase through getUserData.js) file