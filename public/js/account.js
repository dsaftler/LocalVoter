// $("#loginUser").on("click", event => {
//   console.log("logged in");
//   var existingUser = {
//     email: $("#usernameLI")
//       .val()
//       .trim(),
//     password: $("#passwordLI")
//       .val()
//       .trim()
//   };
//   if (!existingUser.email || !existingUser.password) {
//     return;
//   }
//   function loginUser(email, password) {
//     $.post("/api/login", {
//       email: email,
//       password: password
//     })
//       .then(function () {
//         window.location.replace("/bills/all");
//         // If there's an error, log the error
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
//   // $.ajax({
//   //   type: "POST",
//   //   url: "/api/login",
//   //   data: existingUser
//   // }).then(data => {
//   //   console.log(data);
//   // });
// });

$("#createUser").on("click", event => {
  console.log("user created");
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

  $.ajax({
    type: "POST",
    url: "/api/signup",
    data: newUser
  }).then(data => {
    console.log(data);
  });
});
