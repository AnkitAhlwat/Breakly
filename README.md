## My Web Application Breakly

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info

This browser based web application is to remind users to take breaks throughout the day.

* Hi I'm Ankit, I am really excited for this project because I would like to see how to resolve important issues.
* Hi I'm Patty, I'm excited for this project because I care about the issue we are trying to tackle!
* Hi I'm Cassidy, i am excited for this project as we will explore mental health.

## Technologies

Technologies used for this project:

* HTML, CSS
* JavaScript
* Bootstrap
* Firebase

=======

## Content

Content of the project folder:

```
 Top level of project folder:  
├── .gitignore               # Git ignore file  
├── contact_us.html          # Contact us form should users have any questions  
├── edit_profile.html        # Allows users to modify their information  
├── faq.html                 # FAQ page of our site that gives users relevant info  
├── login_homepage.html      # Landing HTML file, this is what users see when you come to url  
├── main.html                # After user login, what they will see to prompt them to set reminder  
├── profile.html             # Displays user profile  
├── setreminder.html         # Set reminder form for users to input data for when they want  
├── user_page.html           # User homepage
├── weekly.html              # Displays users weekly summary of breaks taken  
└── README.md  

It has the following subfolders and files:  
├── .git                     # Folder for git repo  
├── images                   # Folder for images  
    /img.jpg                 # Sample profile image for users who don't have an image uploaded  
    /plant_1.img             # Image that shows when users are 0-24% to goal  
    /plant_2.img             # Image that shows when users are 25-49% to goal  
    /plant_3.img             # Image that shows when users are 50-74% to goal  
    /plant_4.img             # Image that shows when users are 75-100% to goal  

├── scripts                  # Folder for scripts  
    /authentication.js       # Script for user login  
    /calculateinterval.js    # Script to determine when user gets their next break reminder  
    /check_login.js          # Script to make sure user is logged in before they can access user relevant pages  
    /contact_us.js           # Script that writes user contact_us form data into firestore  
    /editProfile.js          # Script which takes user information and updates their user info fields in firestore  
    /firebaseAPI_TEAM10.js   # Script which links to firebase firestore  
    /getUserData.js          # Script which gets the user data from firestore and populates edit_profile.html page  
    /load_skeleton.js        # Script that loads the top and bottom nav bars to each webpage  
    /logout.js               # Script which allows users to logout  
    /main.js                 # Script which gets the user name to populate in span  
    /setreminder.js          # Script gets data from setreminder form and writes in firestore under user document
    /user_homepage.js        # Script that reads the data from firestore to determine user progress towards goal  
    /weekly.js               # Script that reads users progress from firestore to give them an overall weekly summary  

├── styles                   # Folder for styles  
    /style.css               # Sets the icon sizes and colours  
