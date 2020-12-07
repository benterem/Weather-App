// code for API 

const key = 'RQKXts2GYcogSSwxAmz4nKARaGnRgo3K';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};

getCity('miami')
    .then(data => console.log(data))
    .catch(err => console.log(err));