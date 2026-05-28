//API
//Application Programming Interface
//Proramming interface that allows two applications to communicate with each other

//Fetch API
//The Fetch API provides an interface for fetching resources (including across the network).
//It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
//Interface


//  <p>Currency: ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</p>

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

const contriesContainer = document.getElementById("countriesContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let allCountries = [];

async function getAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region,symbols,languages",
  );

  const countriesData = await response.json();
  allCountries = countriesData;
  console.log(countriesData);

  displayCountries(countriesData);
}

function displayCountries(countries) {
  let htmlContent = "";
  countries.forEach((country) => {

    htmlContent += `
            <div class="country-card">
                <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population.toLocaleString()}</p>
                <p>Region: ${country.region}</p>
                <p>Languages: ${Object.values(country.languages).join(", ")}</p>

            </div>
        `;
  });

  contriesContainer.innerHTML = htmlContent;

}

getAllCountries();


