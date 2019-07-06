$(document).ready(function() {
  $("#createUser").on("click", event => {
    event.preventDefault();
    let newUser = {
      email: $("#emailSU")
        .val()
        .trim(),
      password: $("#passwordSU")
        .val()
        .trim(),
      zip: $("#zipcodeSU")
        .val()
        .trim(),
      state: $("#stateCodeSU")
        .val()
        .trim()
    };
    if (!newUser.email || !newUser.password) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "/api/signup",
      data: newUser
    }).then(data => {
      console.log(data);
    });
  });
});
//     setTimeout(makeUserCookie(), 1000);

//     var myVal = getCookie("State");
//     console.log(myVal);
//     setTimeout(window.location.replace("/bills/all"), 1000);
// // emailInput.val();
// // passwordInput.val();
// });
// function makeUserCookie() {
//   $.get("/api/user_data").then(function (data) {
//     console.log(data);
//     delete_cookie("Userid");
//     delete_cookie("State");
//     delete_cookie("Zip");
//     delete_cookie("Username");
//     delete_cookie("Email");

//     var uid = data.id;
//     uid = uid.toString();

//     document.cookie = "Userid=" + uid;
//     document.cookie = "State=" + data.state;
//     document.cookie = "Zip=" + data.zip;
//     document.cookie = "Username=" + data.username;
//     document.cookie = "Email=" + emailInput.val().trim();

// });
// function getCookie(name) {
//   var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//   return v ? v[2] : null;
// };
