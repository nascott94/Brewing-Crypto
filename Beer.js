//VAR Declarations
var by_postal = "";
var searchValue = "";

$(document).ready(function () {
  //FUNCTIONS

  //EVENT HANDLERS
  $("#buttonbrew").on("click", function (event) {
    event.preventDefault();
    // console.log("i am clicked");
    //Need to grab value of input field for user
    var searchValue = $("#searchbrew").val();

    // console.log(userInput);

    // Make API call to breweryAPI

    var requestURL = `https://api.openbrewerydb.org/breweries?by_postal=${searchValue}`;

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      var results = $("#beerresults");
      $(data).each(function (i) {
        var listBeer = $(`
          <ul>
          <li>City: ${data.by_postal}</li>
          <li>Brewery: ${data.brewery_type}</li>
          </ul>
        `);
        $("#beerresults").append(listBeer);
      });
      //   $("#beerresults").append("<div>", "</div>");
      //   console.log(data);
    });
  });
});
