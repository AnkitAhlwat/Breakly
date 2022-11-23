function getUserData(){
            
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
                .then(userDoc => {
                    let picUrl = userDoc.data().profilePic;
                    
                    console.log(picUrl);
                                
                    $("#mypic-goes-here").attr("src", picUrl);
                        
                    
                    
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