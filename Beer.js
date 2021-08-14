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

// Get the modal
var modal = document.getElementById("myModalsubscribe");

// Get the button that opens the modal
var btn = document.getElementById("modalbuttonsubscribe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("myModallogin");

// Get the button that opens the modal
var btn2 = document.getElementById("modalbuttonlogin");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal) {
    modal.style.display = "none";
  }
};
