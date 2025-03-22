
const button=document.getElementById("button");
const country=document.getElementById("country");
const weather=document.getElementById("weather");
const temperature=document.getElementById("temperature");
const wind_speed=document.getElementById("wind_speed");

let counter=0;

button.onclick = () =>{
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        console.log(response);
        button.textContent="Next";
        weather.textContent="";
        temperature.textContent="";
        wind_speed.textcontent="";
        console.log(response.data[counter].country);
        country.textContent=response.data[counter].country;
        console.log(response.data[counter].temperature);
        temperature.textContent=response.data[counter].temperature;
        console.log(response.data[counter].wind_speed);
        wind_speed.textContent=response.data[counter].wind_speed;
        setTimeout(function(){
            weather.textContent=response.data[counter].weather_description;
        },1500);
        counter++;
    })
    .catch(function(error){
        console.log(error)
    });
}
