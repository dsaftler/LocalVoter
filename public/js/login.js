let emailInput = $("#usernameLI");
let passwordInput = $("#passwordLI");
// When the form is submitted, we validate there's an email and password entered
$("#loginUser").on("click", function (event) {
  // loginForm.on(submit, function(event) {
  event.preventDefault();
  var email = emailInput.val().trim()
  var password = passwordInput.val().trim()
  let existingUser = {
    email: email,
    password: password
  };

  if (!existingUser.email || !existingUser.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(email,password);
  makeUserCookie();
  var myVal = getCookie("State");
  console.log(myVal);
  
  window.location.replace("/bills/all");
  // emailInput.val();
  // passwordInput.val();
});

// loginUser does a post to our api/login route and if successful, redirects us the the members page
function loginUser(email,password) {
  $.post("/api/login", {
    email: email,
    password: password
  })
 .then(function () {
});
};
function makeUserCookie() {
  $.get("/api/user_data").then(function(data) {
      // console.log(data);
    delete_cookie("Userid");
    delete_cookie("State");
    delete_cookie("Zip");
    delete_cookie("Username");
    delete_cookie("Email");
    // cookiestr = cookiestr + "; Zip=" + data.zip 
    // cookiestr = cookiestr + "; Username="+data.username
    // cookiestr = cookiestr + "; Email=" + email
    // var d = new Date();
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // var expires = "expires=" + d.toUTCString();
    var uid = data.id;
    uid = uid.toString();
    // document.cookie = "Userid=" + uid + ";State=" + data.state + ";Zip=" + data.zip + ";Username=" + data.username  
    document.cookie = "Userid=" + uid ;
    document.cookie = "State=" + data.state ;
    document.cookie = "Zip=" + data.zip ;
    document.cookie =  "Username=" + data.username ; 
    document.cookie = "Email=" + emailInput.val().trim();
    
    // "Userid="+data.id+"; State="+data.state+"; Zip="+data.zip+"; Username="+data.username+"; Email="+email
    //   id = data.id,
    //  statecode = data.state,
    //  zip = data.zip,
    //  email = data.email,
    //   userStateCode = data.state
    // If there's an error, log the error
  });
};
function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
};
