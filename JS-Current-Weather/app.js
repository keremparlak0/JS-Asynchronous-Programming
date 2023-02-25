const url = "https://api.openweathermap.org/data/2.5/"
const key = "6479012cd8449335875cc254881fb965"

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(response => response.json())
        .then(displayResult)
        .catch(err => console.error("Bir hata oluştu!", "Şehir ismini kontrol ediniz."))
    
}

const displayResult = (result) => {
    // City, Country
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    // Temprature
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`
    // Description
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keypress', setQuery)

