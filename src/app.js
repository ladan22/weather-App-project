function showTemprature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temprature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = "5ba48f3fa9a06o73t826ba624a30b504";

let city = "Shiraz";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemprature);
