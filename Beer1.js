$(document).ready(function () {
  //VAR Declarations

  //FUNCTIONS

  //EVENT HANDLERS
  $("#buttonbrew").on("click", function (event) {
    event.preventDefault();

    // console.log("i am clicked");

    //Need to grab value of input field for user

    var userInput = $("#searchbrew").val();

    // console.log(userInput);

    // Make API call to breweryAPI

    var requestURL = "string";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
    });
  });
});
