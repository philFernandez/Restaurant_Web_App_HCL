/**
 * Use javascript to obtain form data from user
 */
document.addEventListener("DOMContentLoaded", (e) => {
  let submitBtn = document.querySelector("button#contact");
  let emailField = document.querySelector("#emailInput");
  let nameField = document.querySelector("#nameInput");
  let messageField = document.querySelector("#textInput");
  submitBtn.addEventListener("click", (e) => {
    let email = emailField.value;
    let name = nameField.value;
    let message = messageField.value;
    let msgWindow = window.open("", "MsgWindow", "width=300, height=200");

    // Open confirmation window ----------------
    msgWindow.document.write(
      '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>'
    );
    msgWindow.document.write("<div class='container'>");
    msgWindow.document.write("<h2>Message Sent!</h2>");
    msgWindow.document.write("<p>Email: " + email + "</p>");
    msgWindow.document.write("<p>From: " + name + "</p>");
    msgWindow.document.write("<p>" + message + "</p>");
    msgWindow.document.write(
      "<div class='text-center'><button class='btn btn-primary' type='button' onclick='window.close();'>Close</button</div>"
    );
    msgWindow.document.write("</div>");
    // -----------------------------------------
  });
});
