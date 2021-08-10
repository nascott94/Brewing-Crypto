var getCrypto = (searchValue) => {
  fetch(`https://api.coinstats.app/public/v1/markets?coinId=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

    .catch((err) => console.log(err));
};

getCrypto("bitcoin");


// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// fetch(
//   "https://api.coinstats.app/public/v1/markets?coinId=bitcoin",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));