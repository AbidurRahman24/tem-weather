const apiKey = '37d08686ad5d21d90860d55d854859e6'
const apiBase = '';

// const searchWeather = (city) =>{
//    const valueCity = document.getElementById('city').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => updateUI(data))
// }
// const dataUpdate = (data) =>{
//     console.log(data);
//     const weatherDiv = document.getElementById('weatherContainer')
//     weatherDiv.className = 'weather-status text-white text-center'
//     // <img id="icon" src="${data.weather[0].icon}@2x.png" alt="">
    
//     document.getElementById('city').value = "";
// }


// searchWeather('Dhaka')

const getWeatherData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

getWeatherData('Dhaka');