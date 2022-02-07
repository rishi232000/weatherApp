const search=document.querySelector("#search");
const country=document.querySelector(".country");
const weatherT=document.querySelector(".weatherT");
const weatherD=document.querySelector(".weatherD");
const oTemp=document.querySelector(".oTemp");
const cityName=document.querySelector(".location");

apik ="48ddfe8c9cf29f95b7d0e54d6e171008";

function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid='+apik)
        .then(res => res.json())

         //.then(data => console.log(data))

        .then(data => {

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var oT=data['main']['temp'];
//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
            cityName.innerHTML=`Weather of <span>${nameval}<span>`
            country.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            weatherT.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            weatherD.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
            oTemp.innerHTML=`Original Temperature is : ${oT}`

        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))
    })

