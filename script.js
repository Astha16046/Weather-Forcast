/*const apiKey="36c37351e4378056c5b40262ef8877fc";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=";


    const searchBox=document.querySelector(".search input");
    
    const searchBtn=document.querySelector(".search button");

   async function checkWeather(city){
      
      const response  =  await fetch( apiUrl + city + `&appid=${apiKey}`);
      var data =await response.json() ;

      

      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=data.main.temp + "°c";
      document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
      document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
    } 

    


   searchBtn.addEventListener("click" , ()=>{
       checkWeather(searchBox.value);
   })*/

   const apiKey = "36c37351e4378056c5b40262ef8877fc";
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
   
   const searchBox = document.querySelector(".search input");
   const searchBtn = document.querySelector(".search button");
   const cityElement = document.querySelector(".city");
   const tempElement = document.querySelector(".temp");
   const humidityElement = document.querySelector(".humidity");
   const windElement = document.querySelector(".wind");
   
   async function checkWeather(city) {
     try {
       const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
       const data = await response.json();
   
       if (data.cod === "404") {
         throw new Error(data.message);
       }
   
       if (cityElement) {
         cityElement.innerHTML = data.name;
       }
       if (tempElement) {
         tempElement.innerHTML = Math.round(data.main.temp) + "°C";
       }
       if (humidityElement) {
         humidityElement.innerHTML = data.main.humidity + "%";
       }
       if (windElement) {
         windElement.innerHTML = data.wind.speed + "km/hr";
       }
     } catch (error) {
       console.error("Error fetching weather data:", error);
       // Display an error message to the user
       if (cityElement) {
         cityElement.innerHTML = "City";
       }
       if (tempElement) {
         tempElement.innerHTML = "";
       }
       if (humidityElement) {
         humidityElement.innerHTML = "";
       }
       if (windElement) {
         windElement.innerHTML = "";
       }
     }
   }
   
   searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value);
   });
   
   // Initial weather check for Delhi
   checkWeather("");
   