// Dependancies
// Grabbing the new User model
// var ajax = require("../../models/user");

// ================= Reset Modal Logic Below =================
// Once modal is closed, all fields reset.
$("#nav_login").on("click", function() {
  var loginForm = document.getElementById("login-form");
  loginForm.reset();
  $("#log-in").modal("show");
});
$("#nav_signup").on("click", function() {
  var signupForm = document.getElementById("signup-form");
  signupForm.reset();
  $("#sign-up").modal("show");
});
// ================= Reset Modal Logic Above =================

// ================= Show Password Logic Below =================
$("#signup-show").on("click", function() {
  if ($("#password")[0].type == "password") {
    $("#password")[0].type = "text";
  } else {
    $("#password")[0].type = "password";
  }
  if ($("#password-confirm")[0].type == "password") {
    $("#password-confirm")[0].type = "text";
  } else {
    $("#password-confirm")[0].type = "password";
  }
});
$("#login-show").on("click", function() {
  if ($("#password")[0].type == "password") {
    $("#password")[0].type = "text";
  } else {
    $("#password")[0].type = "password";
  }
});
// ================= Show Password Logic Above =================

$("#login-submit").on("click", function() {
  $;
});

$("#signup-submit").on("click", function() {
  var newUserData = {
    pass: $("#password")
      .val()
      .trim(),
    first_name: $("#firstname").val(),
    last_name: $("#lastname").val(),
    email_address: $("#email")
      .val()
      .trim()
  };
  console.log(newUserData);

  // Checking to see if the passwords match before sending to database
  if (
    $("#password")
      .val()
      .trim() ===
      $("#password-confirm")
        .val()
        .trim() &&
    // Validation of the first name length
    newUserData.first_name.length < 50 &&
    newUserData.first_name.length > 2 &&
    // Validation of the last name length
    newUserData.last_name.length < 50 &&
    newUserData.last_name.length > 2 &&
    // Validation of the email address length
    newUserData.email_address.length < 50 &&
    newUserData.email_address.length > 10
  ) {
    console.log("pass");
    $.ajax({
      type: "POST",
      url: "/api/signup",
      data: newUserData
    }).then(function(data) {
      console.log(data);
      $("#nav_login").addClass("d-none");
      $("#nav_signup").addClass("d-none");
      $("#nav_signout").removeClass("d-none");
      $("#composeLnk").removeClass("d-none");
      $("#composeDiv").removeClass("d-none");
      $("#sign-up").modal("hide");
    });
  }
});
// ================= Sign Up Logic Below =================

// ================= Google Signup/Login Logic Below =================

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}
// ================= Google Signup/Login Logic Above =================
