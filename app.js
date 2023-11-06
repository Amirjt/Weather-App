const apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?";
const apikey = "55b90680b4aec1c59c68bd5512eb7f03";

const input = document.querySelector(".input");
const search = document.querySelector(".search");
const weatherImg = document.querySelector(".weather-img");
async function weather(city) {
  const apiurl = `${apiBaseURL}q=${city}&units=metric&appid=${apikey}`;
  const response = await fetch(apiurl);
  if(response.status == 404){
    swal({
        title: "Error",
        text: "Invalid city name",
        icon: "error",
      });
  }else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind-speed").innerHTML = Math.floor(data.wind.speed) + " km/h";
    if(data.weather[0].main == "Clouds"){
      weatherImg.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
      weatherImg.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
      weatherImg.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
      weatherImg.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
      weatherImg.src = "images/mist.png"
    }
  }
}

search.addEventListener("click", () => {
  weather(input.value);
});
