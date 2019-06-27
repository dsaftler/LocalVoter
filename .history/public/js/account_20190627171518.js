$("#loginUser").on("click", event => {
  console.log("logged in");
  let existingUser = {
    email: $("#usernameLI")
      .val()
      .trim(),
    password: $("#passwordLI")
      .val()
      .trim()
  };

  $.ajax({
    type: "POST",
    url: "/api/login",
    data: existingUser
  }).then(data => {
    console.log(data);
  });;
});;

$("#createUser").on("click", event => {
  console.log("user created");
  let newUser = {
    email: $("#usernameSU")
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
