//VAR Declarations

$(document).ready(function () {
  //FUNCTIONS
  var searchValue = "";

  //EVENT HANDLERS
  $("#buttonbrew").on("click", function (event) {
    // event.preventDefault();
    console.log(event);
    // console.log("i am clicked");
    //Need to grab value of input field for user
    searchValue = $("#searchbrew").val();

    // console.log(userInput);

    // Make API call to breweryAPI

    var requestURL = `https://api.openbrewerydb.org/breweries?by_postal=${searchValue}`;

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      var results = $("#beerResultsList");
      data.forEach(function (brewery) {
        saveToStorage(brewery);
        var beerItem = $(`
          <br
          <li>Address: ${brewery.street}</li>
          <li>Brewery: ${brewery.name}</li>
          <li>Website: ${brewery.website_url}</li>
          <br>
        `);
        results.append(beerItem);
      });
    });
  });

  function saveToStorage(brewery) {
    var itemsFromStorage = localStorage.getItem("breweries");
    if (itemsFromStorage) {
      console.log("items exist!");
      var stuffFromStorage = JSON.parse(itemsFromStorage);
      stuffFromStorage.push(brewery);
      localStorage.setItem("breweries", JSON.stringify(stuffFromStorage));
    } else {
      console.log("no items exist!");
      localStorage.setItem("breweries", JSON.stringify([brewery]));
    }
  }
});
