
let getBtn = document.getElementById("search");

function find() {
    let city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64bcc19248e8aa7dc6ca8ec7854226aa`)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            console.log(data);
            let getDiv = document.getElementById("main");
            getDiv.innerHTML = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" style="color:red">${data.name}</h5>
                    <p class="card-text"><b>Temperature:</b> ${data.main.temp} °C</p>
                    <p class="card-text"><b>Feels Like:</b> ${data.main.feels_like} °C</p>
                    <p class="card-text"><b>Humidity:</b> ${data.main.humidity}%</p>
                </div>
            </div>`;
        })
        .catch(function(err) {
            console.log(err);
        });
}

`h1
1function(sun[0l] ${console.log})`



