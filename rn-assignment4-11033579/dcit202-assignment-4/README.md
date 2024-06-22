# Sample Snack app
Overview
This repository contains a React Native application that recreates the design seen in the provided UI mockup. The app consists of a login screen and a home screen, featuring popular and featured job cards.

Components
Login Screen
LoginScreen.js: A functional component that accepts user input (name and email) and passes it to the home screen upon pressing the login button.
Home Screen
HomeScreen.js: A functional component that displays the user's name and email, and features popular and featured job cards.
JobCard.js: A custom component that accepts a props object containing card details (e.g., title, description, image). Used to display job cards in the popular and featured sections.
Job Cards
PopularJobs.js: A functional component that displays at least 8 popular job cards using the JobCard component.
FeaturedJobs.js: A functional component that displays at least 8 featured job cards using the JobCard component.
Usage
Running the App
Clone the repository to your local machine.
Run npm install to install dependencies.
Run npx react-native start to start the development server.
Run npx react-native run-ios or npx react-native run-android to launch the app on a simulator or physical device.
Customizing the App
To customize the app's design, modify the styles in the styles folder.
To add or modify job cards, update the data in the data folder.
Resources
UI Design: [insert link to UI Design]
Figma Resources: [insert link to Figma file]
Commit History
Commit 1: Initial setup and login screen implementation
Commit 2: Home screen implementation and job card component creation
Commit 3: Popular and featured job cards implementation
Commit 4: Final styling and polishing
(!!["alt 20240619_221013.png"]("20240619_221013.png"screenshot of mockup))
