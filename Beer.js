var getBeer = (searchValue, brewtype) => {
  fetch(
    `https://api.openbrewerydb.org/breweries?by_postal=${searchValue}&by_type=${brewtype}`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })

    .catch((err) => console.log(err))
}

getBeer('49503', 'brewpub')

// // From Review

// $(document).ready(function() {

// //API ENDPOINT
// var requestURL = "https://api.openbrewerydb.org";

// }
// //fetch function - built into all modern day browsers
// //ajax method in jquery

// //Promis Object - returns us a promise object --Unfulfilled, resolved
// $.ajax({
//   url: requestURL,
//   method: 'GET'
// }).then(function() {
//   console.log(data);
// });
