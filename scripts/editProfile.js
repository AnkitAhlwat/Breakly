var ImageFile;      //global variable to store the File Object reference

function chooseFileListener(){
    const fileInput = document.getElementById("mypic-input");   // pointer #1
    const image = document.getElementById("mypic-goes-here");   // pointer #2

    //attach listener to input file
    //when this file changes, do something
    fileInput.addEventListener('change', function(e){

        //the change event returns a file "e.target.files[0]"
	      ImageFile = e.target.files[0];
        var blob = URL.createObjectURL(ImageFile);

        //change the DOM img element source to point to this file
        image.src = blob;    //assign the "src" property of the "img" tag
    })
}
chooseFileListener();

function saveUserInfo() {
    firebase.auth().onAuthStateChanged(function (user) {
        var storageRef = storage.ref("images/" + user.uid + ".jpg");

        //Asynch call to put File Object (global variable ImageFile) onto Cloud
        storageRef.put(ImageFile)
            .then(function () {
                console.log('Uploaded to Cloud Storage.');

                //Asynch call to get URL from Cloud
                storageRef.getDownloadURL()
                    .then(function (url) { // Get "url" of the uploaded file
                        console.log("Got the download URL.");
												//get values from the from
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
                                console.log('Saved use profile info');
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

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // go and get the current user info from firestore
                currentUser = db.collection("users").doc(user.uid);

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

                        if (userName != null){
                            document.getElementById("nameInput").value = userName;
                        }
                        if (userSchool != null){
                            document.getElementById("schoolInput").value = userSchool;
                        }
                        if (userCountry != null){
                            console.log(userCountry)
                            document.getElementById("countryInput").value = userCountry;
                        }
                        if (userEmailer != null){
                            console.log(userEmail)
                            document.getElementById("emailInput").value = userEmail;
                        }
                        if (userAboutMe != null){
                            console.log(userAboutMe)
                            document.getElementById("aboutmeInput").value = userAboutMe;
                    
                        }
                        if (picUrl != null){
                            console.log(picUrl);
								        
                            $("#mypic-goes-here").attr("src", picUrl);
                        }
                        else
                        console.log("picURL is null");
                    })

            } else {
                console.log("no user is logged in")
            }
        }

    )

}
populateInfo();