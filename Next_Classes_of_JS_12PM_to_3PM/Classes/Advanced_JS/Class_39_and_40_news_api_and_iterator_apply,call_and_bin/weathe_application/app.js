const apikey = "9e43c36c41314c899ce746232506122";
// // const openWeatherApiKey = "237697a6e0152984a6d0eb0e2c8f66daa";
// // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Karachi&appid=${openWeatherApiKey}`;



// fetch(apiKey)
// .then(data => data.json())
// .then(data => console.log("Data ==>", data)
// ).catch(err => console.log("err ==> ", err)
// )




const searchBtn = document.getElementById("searchBtn");
const cityNameInp = document.getElementById("cityNameInp");
const main = document.querySelector(".main")

searchBtn.addEventListener("click", ()=>{
    getWeather(cityNameInp.value)
})


const getWeather = async (cityName) =>{
    console.log("City name ==> ", cityName);
      // fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=Karachi&aqi=no`)
  // .then(res => res.json())
  // .then(data => console.log("data ==>", data))
  // .catch(err => console.log("err ==>", err));

  try {
    main.innerHTML = "";

    main.innerHTML = `
       <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `

    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&aqi=no`);
    const data = await res.json();
    console.log("data ==> ", data);
    main.innerHTML ="";

    const timestamp = data.location.localtime;
     const icon = data.current.condition.icon;
    const text = data.current.condition.text;
    const temperature = data.current.temp_c;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
 
    // main.innerHTML = `
    //   <div class="result">
    //     <h4>${timestamp}</h4>
    //     <div class='d-flex gap-2'>
    //       <img src='${icon}' />
    //       <h1>${temperature}</h1>
    //     </div>
    //     <p>${text}</p>
    //     <div class='d-flex gap-2'>
    //       <div>
    //         <p>Humidity</p>
    //         <p>${humidity}%</p>
    //       </div>
    //       <div>
    //         <p>Wind Speed</p>
    //         <p>${windSpeed} kmh</p>
    //       </div>
    //     </div>
    //   </div>
    // `
    
      main.innerHTML = `
      <div class="result p-3 border rounded shadow">
        <h4>${timestamp}</h4>
        <div class='d-flex align-items-center justify-content-center gap-3 my-2'>
          <img src='${icon}' alt='Weather icon' />
          <h1>${temperature}°C</h1>
        </div>
        <p class="text-capitalize">${text}</p>
        <div class='d-flex justify-content-around mt-3'>
          <div>
            <p>Humidity</p>
            <p>${humidity}%</p>
          </div>
          <div>
            <p>Wind Speed</p>
            <p>${windSpeed} km/h</p>
          </div>
        </div>
      </div>
    `;


  } catch (error) {
        console.log("error ==>", error)

  }
    
}