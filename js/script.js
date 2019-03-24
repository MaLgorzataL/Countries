var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
        //.catch(function(error) {
            // code that will be executed in the case of an incorrect response 
        //    countriesList.innerHTML = 'No found';
        //});
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.name+ ', capital ' + item.capital+ ', region '+ item.region+', subregion '+ item.subregion + ', population '+ item.population + ', area '+ item.area + ', timezones '+ item.timezones +', numericCode ' + item.numericCode + ', currencies ' + item.currencies + ', languages ' + item.languages;
        countriesList.appendChild(liEl);
    })
}  
