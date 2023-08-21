
    const apiKey= "6d98efcc7b5c5431a92b7d633e541b33";
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";
    
    async function checkWeather(){
        const response = await fetch (apiUrl + `&appid=&{apiKey}`);
        var data= await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    }

    checkWeather()
