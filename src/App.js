import './App.css';

function App() {
  var currentWeather;
  var dataUnavaliable = 0;
  const searchWeather = (e) =>{
    let component = document.getElementById("zipCode");
    let zipCode = component.value;
    console.log(zipCode);
    if(zipCode.length !== 5)
      return;
    //https://api.openweathermap.org/data/2.5/weather?zip=94582,us&appid=21bfdd504f45debea0b72f9bd2da4862
    let req = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=21bfdd504f45debea0b72f9bd2da4862';
    fetch(req).then(req => req.json()).then((res) => {
      console.log(res);
      currentWeather = res;
      console.log(currentWeather.name);
      console.log(currentWeather.weather[0].main);
      console.log(currentWeather.weather[0].description);
      dataUnavaliable = 1;
    }).catch((e) =>{
      console.log(e);
      dataUnavaliable = 0;
      let element = document.getElementById("information");
      element.innerHTML = "Not a valid zip code";
      element.hidden = false;
      let element1 = document.getElementById("weatherDisplay");
      element1.hidden = true;
    });
  }

  const searchCity = (e) =>{
    let component = document.getElementById("cityName");
    let cityName = component.value;
    console.log(cityName);
    //https://api.openweathermap.org/data/2.5/weather?zip=94582,us&appid=21bfdd504f45debea0b72f9bd2da4862
    let req = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',us&appid=21bfdd504f45debea0b72f9bd2da4862';
    fetch(req).then(req => req.json()).then((res) => {
      console.log(res);
      currentWeather = res;
      console.log(currentWeather.name);
      console.log(currentWeather.weather[0].main);
      console.log(currentWeather.weather[0].description);
      dataUnavaliable = 1;
      displayWeather();
    }).catch((e) =>{
      console.log(e);
      dataUnavaliable = 0;
      let element = document.getElementById("information");
      element.innerHTML = "Not a valid city name";
      element.hidden = false;
      let element1 = document.getElementById("weatherDisplay");
      element1.hidden = true;
    });
  }
  const displayWeather = () =>{
    let element = document.getElementById("weatherDisplay");
    element.hidden = false;
    let elementCityName = document.getElementById("displayCityName");
    let elementCurrentWeather = document.getElementById("displayCurrentWeather");
    let elementWeatherDescription = document.getElementById("displayWeatherDescription");
    elementCityName.innerHTML = currentWeather.name;
    elementCurrentWeather.innerHTML = currentWeather.weather[0].main;
    elementWeatherDescription.innerHTML = currentWeather.weather[0].description;
  }
  return (
    <div className="App">
      <head>
        <meta name="keywords" content="HTML, CSS, JS"/>
        <meta name="description" content="weather thing"/>
      </head>
      <body>
        <label>zip code</label>
        <input type="text" name="zipCode" id="zipCode"></input>
        <button onClick={searchWeather}>search weather</button>
        <label>city name</label>
        <input type="text" name="cityName" id="cityName"></input>
        <button onClick={searchCity}>search city</button>
        <h2 id="information" hidden>data unavaliable</h2>
        <div id="weatherDisplay" hidden>
          <div id="displayCityName"></div>
          <div id="displayCurrentWeather"></div>
          <div id="displayWeatherDescription"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
