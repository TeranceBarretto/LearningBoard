The Learning Board Application consists of 2 parts - Frontend and Backend.

Steps to run the application:
1. To start backend,
	a. In commandline, go the backend directory and run the command "gradle bootRun" 
Note: Do not close this cmd promt window.
2. To start frontend,
	a. In commandline, go the frontend directory and run the command "npm start"
Note: If it doesn't recognise react-scripts, run "npm install"
3. Run baseScript.sh to create a user with username - gilford and password - fernandes.
4. Login to http://localhost:8081/login with the above credentials.

Assumptions:
1) Gradle is pre-installed.
If not refer: https://gradle.org/install/
2) JDK is pre-installed.
If not refer: https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
3) npm and NodeJS is pre-installed
if not refer: https://nodejs.org/en/

Note: 
bootRun will stop at 75% with the last step as "Started LearaningBoardApplication" 
