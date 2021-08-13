// $(function () {
//   var availableTags = [
//     "Bitcoin",
//     "Ethereum",
//     "Binance Coin",
//     "Tether",
//     "Cardano",
//     "Xrp",
//     "Dogecoin",
//     "USD Coin",
//     "Polkadot",
//     "Uniswap",
//     "Binance USD",
//     "Chainlink",
//     "Bitcoin Cash",
//     "Solana",
//     "Litecoin",
//     "Internet Computer",
//     "Wrapped Bitcoin",
//     "Polygon",
//     "Ethereum Classic",
//     "Stellar",
//     "VeChain",
//     "THETA",
//     "Terra",
//     "Filecoin",
//     "TRON",
//     "Dai",
//     "Aave",
//     "Monero",
//     "FTX Token",
//     "EOS",
//     "PancakeSwap",
//     "Axie Infinity",
//     "The Graph",
//     "Crypto.com Coin",
//     "Bitcoin BEP2",
//     "Klaytn",
//     "Neo",
//     "Maker",
//     "Cosmos",
//     "SHIBA INU",
//     "Bitcoin SV",
//     "Tezos",
//     "BitTorrent",
//     "Avalanche",
//     "Algorand",
//     "IOTA",
//     "UNUS SED LEO",
//     "Elrond",
//     "Amp",
//     "Compound",
//     "Kusama",
//     "Huobi Token",
//     "Hedera Hashgraph",
//     "TerraUSD",
//     "Decred",
//     "Waves",
//     "Holo",
//     "Chiliz",
//     "Quant",
//     "Dash",
//     "Theta Fuel",
//     "NEM",
//     "Stacks",
//     "Zcash",
//     "THORChain",
//     "Helium",
//     "Celsius",
//     "Ravencoin",
//     "SushiSwap",
//     "OKB",
//     "Decentraland",
//     "Enjin Coin",
//     "Flow",
//     "yearn.finance",
//     "Synthetix",
//     "TrueUSD",
//     "NEAR Protocol",
//     "Zilliqa",
//     "XinFin Network",
//     "Nexo",
//     "Basic Attention Token",
//     "Qtum",
//     "Bitcoin Gold",
//     "Telcoin",
//     "Harmony",
//     "Bancor",
//     "KuCoin Token",
//     "Paxos Standard",
//     "DigiByte",
//     "Siacoin",
//     "Ontology",
//     "Celo",
//     "Voyager Token",
//     "Ox",
//     "Mdex",
//     "Curve DAO Token",
//     "Horizen",
//     "Fantom",
//     "IoTeX",
//     "ICON",
//   ];
//   $("#tags").autocomplete({
//     source: availableTags,
//   });
// });

$(document).ready(function () {
  var searchValue = "";
  $("#cryptoButton").on("click", function (event) {
    console.log(event);
    searchValue = $("#tags").val();
    console.log(searchValue);

    var requestURL = `https://api.coinstats.app/public/v1/markets?coinId=${searchValue}`;
    console.log(requestURL);

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      var results = $("#cryptoResultsList");
      data.forEach(function (crypto) {
        saveToStorage(crypto);
        var cryptoItem = $(`
          <li>Price: ${crypto.price} </li>
          <li>Exchange: ${crypto.exchange} </li>
          <li>Volume: ${crypto.volume} </li>
          <br>
        `);
        results.append(cryptoItem);
      });
    });
  });

  function saveToStorage(crypto) {
    var itemsFromStorage = localStorage.getItem("crypto");
    if (itemsFromStorage) {
      console.log("crypto Items Exist");
      var stuffFromStorage = JSON.parse(itemsFromStorage);
      stuffFromStorage.push(crypto);
      localStorage.setItem("crypto", JSON.stringify(stuffFromStorage));
    } else {
      console.log("no items exist!");
      localStorage.setItem("crypto", JSON.stringify([crypto]));
    }
  }
});

// DANS TOP 100 CRYPTO JS

const inpkey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function () {
  const key = inpkey.value;
  const valueOne = inpValue.value;

  console.log(key);
  console.log(valueOne);

  if (key && valueOne) {
    localStorage.setItem(key, valueOne);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `${key}: ${value}<br/>`;
}
