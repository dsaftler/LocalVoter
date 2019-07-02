# Project2_Local Voter

Local Voter Created by:
* Diana Saftler
* Sharon Wong
* Paul Davis
* & Suzanne Alidina

-------------

### About ###

This app is for users who want to take more of a role in their local government and track bills in a state of interest.

-------------

### Summary ###
This Project is designed for the user who wants to get more involved with their lcoal governement bills. The app has the user create an account, or log in if they already have an account and use the Bills 50 API to search for bills in their state or other states. After searching the user can view different bills data such as their summary, whether it's inactive or active, who the sponsers are, what was the last action on the bill and a link to access more information on the bill.The user can track bills that they're interested in or find out who is in their local representatives are and contact them.

### APIs Used ###
Bills 50, Pro Publica, & Google Civics


### Hosted on Heroku ###
Link: --->

<!-- 20190628: DVS: 
1.  added /public/login.js
2.  added form & autocomplete to login & signup handlebars
3.  broke out login.js from account.js for <script>
4.  added requires for express-session, cookie-parser
5. removed models/example.js & models/Project2_LocalVoter - Shortcut.lnk
6. added db = require("../../models") to api/../billsJson.js and tried to get access to cookies
------
Got localStorage, but that was not available outside of apiRoutes,
Switched to cookies, but they aren't available from API either
Net Net is there is a cookie object with {passport} object with Id, State, & Zip, but can't get to it.
EITHER:
I have to find a way to get the cookie, or I have to pass the User ID in the URL and figure out how to do a sql call from the api sites.
There aren't enough swear words. -->
