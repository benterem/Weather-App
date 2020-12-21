// DOM manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    
    // const cityDets = data.cityDets; 
    // const weather = data.weather;

    const { cityDets, weather } = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update night / day and icons
    const iconSource = `images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSource);
    
    let timeofDay = weather.IsDayTime ? 'images/day.svg' : 'images/night.svg';
    time.setAttribute('src', timeofDay);


    // show card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');

    }
};


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


    // set local storage
    localStorage.setItem('city', city);

});


if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
    .then( data => updateUI(data))
    .catch(err => console.log(err));
}