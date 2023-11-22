function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var nameRegex = /^[a-zA-Z\s]{2,}$/;
  var emailRegex = /^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{2,}$/;
  var messageRegex = /^[a-zA-Z0-9\s]{2,}/;

  if (
    name.match(nameRegex) &&
    email.match(emailRegex) &&
    message.match(messageRegex)
  ) {
    alert("Message Delivered");
  } else {
    alert("Something Went Wrong");
  }
}
