function getUserData(){
            
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
                .then(userDoc => {
                
                
                    document.getElementById("name").innerHTML = userDoc.data().name
                    console.log(userDoc.data().name)
                    document.getElementById("school").innerHTML = userDoc.data().school
                    console.log(userDoc.data().school)
                    document.getElementById("email").innerHTML = userDoc.data().email
                    console.log(userDoc.data().email)
                    document.getElementById("break_counter").innerHTML = userDoc.data().break_counter
                    console.log(userDoc.data().break_counter)

            })
        }
    });
}
getUserData();

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
                        console.log()
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
                        let userSchool = userDoc.data().school;
                        let userCountry = userDoc.data().country;
                        let userEmail = userDoc.data().email;
                        let picUrl = userDoc.data().profilePic; 

                        if (userName != null) {
                            document.getElementById("nameInput").value = userName;
                        }
                        if (userSchool != null) {
                            document.getElementById("schoolInput").value = userSchool;
                        }
                        if (userCity != null) {
                            console.log(userCity)
                            document.getElementById("countryInput").value = userCountry;
                        }
                        if (userCity != null) {
                            console.log(userCity)
                            document.getElementById("emailInput").value = userEmail;
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