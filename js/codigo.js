const KEYAPI="ee32530e73fc2971189dfad326e208ff"
const apiCountryFlags="https://countryflagsapi.com/png/";
const API="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

const cityInput=document.querySelector('.city-input');
const btnSearch=document.querySelector('.search');
const weatherContainer=document.querySelector('.weather-data')
const messageError=document.querySelector('.error');
const cityData={
    cityElement:document.querySelector('.city'),
    temperaturaElement:document.querySelector('.temperature span'),
    descriptionElement:document.querySelector('.description'),
    weatherIconElement:document.querySelector('.weather-icon'),
    countryElement:document.querySelector('.country'),
    humidityElement:document.querySelector('.humidity span'),
    windElement:document.querySelector('.wind span')
}


const getWeatherData= async(city)=>{
    const apiWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEYAPI}&lang=pt`;
    const response= await fetch(apiWeatherUrl);
    const error=response.status===404;
    if(error){
        messageError.style.display="block"
        return
    }else{
        const data=await response.json();
        messageError.style.display="none"
        return data;
    }
}


const showWeatheData= async(city)=>{
    const data= await getWeatherData(city)
    cityData.cityElement.innerText=data.name;
    cityData.temperaturaElement.innerText=parseInt(data.main.temp);
    let description=data.weather[0].description;
    // Aqui fiz uma formatação para a primeira letra ficar maiuscula
    cityData.descriptionElement.innerText=description.replace(description[0],description[0].toUpperCase())
    cityData.weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    cityData.countryElement.setAttribute("src",apiCountryFlags+data.sys.country)
    cityData.humidityElement.innerText=`${data.main.humidity}%`;
    cityData.windElement.innerText=`${data.wind.speed}km/h`;
    weatherContainer.style.display="block";
}


btnSearch.addEventListener('click',(event)=>{
    event.preventDefault();
    const city=cityInput.value.toLowerCase()
    showWeatheData(city)
})
cityInput.addEventListener('keyup',(event)=>{
    if(event.code==="Enter"){
        const city=event.target.value;
        showWeatheData(city);
    }
})