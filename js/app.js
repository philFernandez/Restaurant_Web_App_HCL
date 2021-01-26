/**
 * Use javascript to obtain form data from user
 */
const getUserMessageInfo = () => {
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
}

/**
 * Navbar search
 */
const searchMenu = () => {
  let searchBtn = document.querySelector('button[type="submit"]');
  let inputBox = document.querySelector('input[placeholder="Search"]');
  searchBtn.addEventListener("click", (e) => {
    let searchTerm = inputBox.value;
    let searchResult = window.open("", "SearchWindow", "width=500, height=400");
    searchResult.document.write(
      '<head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>'
    );
    searchResult.document.write('<link rel="stylesheet" href="../style/style2.css" /><title>Search Result</title></head>');
    searchResult.document.write("<div id='in-script 'class='container'>");
    searchResult.document.write( 
      "<div class='text-center'>" +
      "<h1 class='display-5'>Search Results</h1>" +
      "</div>"
    );
    let chickReg = new RegExp('\w*chicken\w*', 'i');
    let riceReg = new RegExp('\w*rice\w*', 'i');
    if(chickReg.test(searchTerm)) {
      searchResult.document.write("<table class='table'>");
      searchResult.document.write("<tr><td>Chicken Fried Rice</td><td>$4.00</td></tr>");
      searchResult.document.write("<tr><td>Foil Chicken</td><td>$7.00</td></tr>");
      searchResult.document.write("<tr><td>Lemon Chicken</td><td>$8.00</td></tr>");
      searchResult.document.write("</table>");
    } else if(riceReg.test(searchTerm)) {
      searchResult.document.write("<table class='table'>");
      searchResult.document.write("<tr><td>Chicken Fried Rice</td><td>$4.00</td></tr>");
      searchResult.document.write("<tr><td>Pork Fried Rice</td><td>$4.00</td></tr>");
      searchResult.document.write("</table>");

    }
    searchResult.document.write("</div>");
  });
}
document.addEventListener("DOMContentLoaded", (e) => {
  // getUserMessageInfo();
  searchMenu();
});
