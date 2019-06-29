// $(document).ready(function() {
//   // Getting references to our form and inputs
//   var loginForm = $("form.login");
let emailInput = $("#usernameLI");
let passwordInput = $("#passwordLI");

// When the form is submitted, we validate there's an email and password entered
$("#loginUser").on("click", function(event) {
  // loginForm.on("submit", function(event) {
  // event.preventDefault();
  let existingUser = {
    email: emailInput.val().trim(),
    password: passwordInput.val().trim()
  };

  if (!existingUser.email || !existingUser.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(existingUser.email, existingUser.password);
  emailInput.val("");
  passwordInput.val("");
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
  $.post("/api/login", {
    email: email,
    password: password
  });
  $.get("/api/user_data")
    .then(function(data) {
      console.log(data);
      
    //   id = data.id,
    //  statecode = data.state,
    //  zip = data.zip,
    //  email = data.email,
    //   userStateCode = data.state
    // If there's an error, log the error
  })
    .catch(function(err) {
      console.log(err);
    });
}
