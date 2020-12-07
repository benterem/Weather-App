// code for API 

const key = ;

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apiKey=${key}&q=${city}`
};
