# Project2_Name
Group Project


Updating readme for demonstration purposes


20190628: DVS: 
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
There aren't enough swear words.
