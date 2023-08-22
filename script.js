let search = document.querySelector(".search")
let input = search.children[0]
let button = search.children[1];
let weather = document.querySelector(".weather")
let title = document.querySelector(".title");
let time = title.children[1]

const hour = new Date().getHours();
const minute = new Date().getMinutes();
const times = `${hour}:${minute}`
time.innerHTML = times


let app = () =>{
    weather.innerHTML= '';
    let value = input.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=%20a19659f5c65f4b8ba2593628232108&q=${value}`)
    .then((res)=>res.json())
    .then((data)=> {myFunction(data)})
    .catch(err=> console.log(err));

    function myFunction(data){
        const h3 = document.createElement('h3');
        const text = document.createTextNode(data.location.name);
        h3.appendChild(text);
        weather.appendChild(h3);
        const img = document.createElement('img');
        img.src = `https://${data.current.condition.icon}`
        weather.appendChild(img);
        const temp = document.createElement('h3');
        const tempText = document.createTextNode("Temperature : " + data.current.temp_c + '°C');
        temp.appendChild(tempText);
        weather.appendChild(temp);
        const feel = document.createElement('h3');
        const feelText = document.createTextNode("FeelsLike : " + data.current.feelslike_c + '°C');
        feel.appendChild(feelText);
        weather.appendChild(feel)
        const country = document.createElement('h3');
        const countryText = document.createTextNode('Country: ' + data.location.country);
        country.appendChild(countryText);
        weather.appendChild(country);
        const weatherTag = document.createElement('h3');
        const weatherText = document.createTextNode(data.current.condition.text);
        weatherTag.appendChild(weatherText);
        weather.appendChild(weatherTag);

    }
}


document.addEventListener('keypress',(event) =>{
  if(event.key=="Enter"){
    app();
  }
})
