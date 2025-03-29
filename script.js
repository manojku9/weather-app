const options = {
    method: 'GET',
    headers: {
       'x-rapidapi-key': '6232896af1msh9d887455c479f4ep1860a1jsna8ce00e7d399',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

document.getElementById("city").addEventListener("blur", function () {
    if (this.value.trim() === "") {
        this.value = "tokyo"; // Default city
    }
});

const  getweather = (city) => {
fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city, options)
    .then(response => response.json())
    .then(response => {
       city_name.innerHTML = response.location.name;
        temp.innerHTML = response.current.temp_c;
        temp1.innerHTML = response.current.temp_c;
        condition.innerHTML = response.current.condition.text ;
        wind.innerHTML = response.current.wind_kph;
        wind1.innerHTML = response.current.wind_kph;
        wind_deg.innerHTML = response.current.wind_degree;
        humidity.innerHTML = response.current.humidity;
        humidity1.innerHTML = response.current.humidity;
        cloud.innerHTML = response.current.cloud;
        feels_like.innerHTML = response.current.feelslike_c;
        heat_index.innerHTML  = response.current.heatindex_c;
        uv.innerHTML = response.current.uv;
        pressure.innerHTML = response.current.pressure_in
        wind_chill.innerHTML = response.current.windchill_c; 
        gust.innerHTML = response.current.gust_kph;
        
        
    })
    .catch(err => console.error(err));

}



submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getweather(city.value)
})

getweather("Tokyo");

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=london', options)
    .then(response => response.json())
    .then(response => {
       
        cloudl.innerHTML = response.current.cloud;
        conditionl.innerHTML = response.current.condition.text ;
        humidityl.innerHTML = response.current.humidity;
        feels_likel.innerHTML = response.current.feelslike_c;
        uvl.innerHTML = response.current.uv;
        templ.innerHTML = response.current.temp_c;  
        wind_degl.innerHTML = response.current.wind_degree;      
    })
    .catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=sydney', options)
    .then(response => response.json())
    .then(response => {
       
        clouds.innerHTML = response.current.cloud;
        conditions.innerHTML = response.current.condition.text ;
        humiditys.innerHTML = response.current.humidity;
        feels_likes.innerHTML = response.current.feelslike_c;
        uvs.innerHTML = response.current.uv;
        temps.innerHTML = response.current.temp_c;   
        wind_degs.innerHTML = response.current.wind_degree;     
    })
    .catch(err => console.error(err));


    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=New York', options)
    .then(response => response.json())
    .then(response => {
       
        cloudn.innerHTML = response.current.cloud;
        conditionn.innerHTML = response.current.condition.text ;
        humidityn.innerHTML = response.current.humidity;
        feels_liken.innerHTML = response.current.feelslike_c;
        uvn.innerHTML = response.current.uv;
        tempn.innerHTML = response.current.temp_c;   
        wind_degn.innerHTML = response.current.wind_degree;     
    })
    .catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=california', options)
    .then(response => response.json())
    .then(response => {
       
        cloudc.innerHTML = response.current.cloud;
        conditionc.innerHTML = response.current.condition.text ;
        humidityc.innerHTML = response.current.humidity;
        feels_likec.innerHTML = response.current.feelslike_c;
        uvc.innerHTML = response.current.uv;
        tempc.innerHTML = response.current.temp_c;   
        wind_degc.innerHTML = response.current.wind_degree;     
    })
    .catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Las Vegas', options)
    .then(response => response.json())
    .then(response => {
       
        cloudla.innerHTML = response.current.cloud;
        conditionla.innerHTML = response.current.condition.text ;
        humidityla.innerHTML = response.current.humidity;
        feels_likela.innerHTML = response.current.feelslike_c;
        uvla.innerHTML = response.current.uv;
        templa.innerHTML = response.current.temp_c;   
        wind_degla.innerHTML = response.current.wind_degree;     
    })
    .catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=washington', options)
    .then(response => response.json())
    .then(response => {
       
        cloudwa.innerHTML = response.current.cloud;
        conditionwa.innerHTML = response.current.condition.text ;
        humiditywa.innerHTML = response.current.humidity;
        feels_likewa.innerHTML = response.current.feelslike_c;
        uvwa.innerHTML = response.current.uv;
        tempwa.innerHTML = response.current.temp_c;   
        wind_degwa.innerHTML = response.current.wind_degree;     
    })
    .catch(err => console.error(err));

    


