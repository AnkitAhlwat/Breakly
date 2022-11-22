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
<<<<<<< HEAD
* Bootstrap
* Firebase

=======

* Bootstrap
* ...
<<<<<<< HEAD

=======

>>>>>>> 37d196a4e1ee0d8a1e63315f42fd317dd7e7a251

>>>>>>> 7a8306939df73dfbee025894e918bb8ff95619ea

## Content

Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── login_homepage.html      # landing HTML file, this is what users see when you come to url
├── main.html                # after user login, what they will see to prompt them to set reminder
├── setreminder.html         # set reminder form for users to input data for when they want 
├── user_homepage.html       # after user sets reminder, will redirect to this page which tells them when their next break is
├── weekly.html              # displays users weekly summary of breaks taken
├── profile.html             # displays user profile
├── faq.html                 # faq page of our site that gives users relevant info
├── contact_us.html          # contact us form should users have any questions
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /img.jpg                 # sample profile image for users who don't have an image uploaded
    /plant_1.img             # image that shows when users are 0-24% to goal
    /plant_2.img             # image that shows when users are 25-49% to goal
    /plant_3.img             # image that shows when users are 50-74% to goal
    /plant_4.img             # image that shows when users are 75-100% to goal                    
├── scripts                  # Folder for scripts
    /authentication.js       # script for user login
    /calculateinterval.js    # script to determine when user gets their next break reminder
    /contact_us.js           # script that writes user contact_us form data into firestore
    /firebaseAPI_TEAM10.js   # script which links to firebase firestore 
    /getUserData.js          # gets the user data
    /load_skeleton.js        # loads the top and bottom nav bars to each webpage
    /logout.js               # allows users to logout
    /main.js                 # gets the user name to populate in span
    /setreminder.js          # grabs the data from the setreminder form and writes it into firestore under user document
    /user_homepage.js        # reads the data from firestore to determine user progress towards their goal
    /weekly.js               # reads users progress daily from firestore to give them an overall weekly summary
├── styles                   # Folder for styles
    /style.css               # sets the icon sizes and colours

Firebase hosting files: 
├── .firebaserc...


```

Tips for file naming files and folders:

* use lowercase with no spaces
* use dashes (not underscore) for word separation
