const KEYAPI="ee32530e73fc2971189dfad326e208ff"
const apiCountryFlags="https://countryflagsapi.com/png/";



const cityInput=document.querySelector('.city-input');
const btnSearch=document.querySelector('.search');

const cityData={
    cityElement:document.querySelector('.city'),
    temperaturaElement:document.querySelector('.temperature span'),
    descriptionElement:document.querySelector('.description'),
    weatherIconElement:document.querySelector('.weather-icon'),
    countryElement:document.querySelector('.country'),
    umidityElement:document.querySelector('.umidity span'),
    windElement:document.querySelector('.wind span')
}


const showWeatheData=(city)=>{
    console.log(city)
}



btnSearch.addEventListener('click',(event)=>{
    event.preventDefault();

    const city=cityInput.value.toLowerCase()
    console.log(city)
})
