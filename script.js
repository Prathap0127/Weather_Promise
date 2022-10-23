var countryDetail1 = document.getElementById('country_1')
var countryDetail2 = document.getElementById('country_2')
var countryDetail3 = document.getElementById('country_3')

//first country
var requestData = fetch('https://restcountries.com/v2/all')
    .then((res) => { return res.json() }).then((data) => {
        console.log(data[0].flag)
        var lat=data[0].latlng[0]
        var lng=data[0].latlng[1]

    var countyAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6427220c270a3cc276a1f10311138b0c`)
        .then((res) => { return res.json() }).then((data1) => {
            console.log(data1)
         countryDetail1.innerHTML=`
         <div class="col-md-4 col-sm-12 pb-5">
         <div class="card" style="width: 18rem;">
             <h3 class="text-center" id="title_1">${data[1].name}</h3>
             <img class="card-img-top" src="${data[1].flag}" alt="Card image cap">
             <div class="card-body text-center">
               <p class="card-text"><b>Capital: ${data[1].capital}</b></p>
               <p class="card-text">Region:${data[1].region}</p>
               <p id="code_1" class="card-text">Country Code: ${data[1].alpha3Code}</p>
               <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModal">
               Click for Weather
             </button>
             </div>
           </div>
         </div>
         <!-- Modal -->
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog" role="document">
             <div class="modal-content bg-dark text-white">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-globe" aria-hidden="true"></i> Weather of ${data[1].name}</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 </div>
                 <div class="modal-body text-center">
                 <p><i class="fa fa-map-marker" aria-hidden="true"></i> Latitude: ${data1.coord.lat}  & longitude: ${data1.coord.lon} </p>
                 <p><i class="fa fa-thermometer-full" aria-hidden="true"></i> Temperature: ${data1.main.temp}</p>
                 <p><i class="fa fa-cloud" aria-hidden="true"></i> Humidity : ${data1.main.humidity}</p>
                 <p><i class="fa fa-rocket" aria-hidden="true"></i> Pressure : ${data1.main.pressure}</p>

                 
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
               </div>
             </div>
           </div>
         </div>`

        }).catch((err) => { console.log(err) })

    })


  //second country
  var requestData = fetch('https://restcountries.com/v2/all')
    .then((res) => { return res.json() }).then((data) => {
        var lat=data[2].latlng[0]
        var lng=data[2].latlng[1]

    var countyAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6427220c270a3cc276a1f10311138b0c`)
        .then((res) => { return res.json() }).then((data1) => {
            console.log(data1)
         countryDetail2.innerHTML=`
         <div class="col-md-4 col-sm-12 pb-5">
         <div class="card" style="width: 18rem;">
             <h3 class="text-center" id="title_1">${data[2].name}</h3>
             <img class="card-img-top" src="${data[2].flag}" alt="Card image cap">
             <div class="card-body text-center">
               <p class="card-text"><b>Capital: ${data[2].capital}</b></p>
               <p class="card-text">Region:${data[2].region}</p>
               <p id="code_1" class="card-text">Country Code: ${data[2].alpha3Code}</p>
               <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModal1">
               Click for Weather
             </button>
             </div>
           </div>
         </div>
         <!-- Modal -->
         <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog" role="document">
             <div class="modal-content bg-dark text-white">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-globe" aria-hidden="true"></i> Weather of ${data[2].name}</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 </div>
                 <div class="modal-body text-center">
                 <p><i class="fa fa-map-marker" aria-hidden="true"></i> Latitude: ${data1.coord.lat}  & longitude: ${data1.coord.lon} </p>
                 <p><i class="fa fa-thermometer-full" aria-hidden="true"></i> Temperature: ${data1.main.temp}</p>
                 <p><i class="fa fa-cloud" aria-hidden="true"></i> Humidity : ${data1.main.humidity}</p>
                 <p><i class="fa fa-rocket" aria-hidden="true"></i> Pressure : ${data1.main.pressure}</p>

                 
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
               </div>
             </div>
           </div>
         </div>`

        }).catch((err) => { console.log(err) })

    })

  //third country
  var requestData = fetch('https://restcountries.com/v2/all')
    .then((res) => { return res.json() }).then((data) => {
        var lat=data[3].latlng[0]
        var lng=data[3].latlng[1]

    var countyAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6427220c270a3cc276a1f10311138b0c`)
        .then((res) => { return res.json() }).then((data1) => {
            console.log(data1)
         countryDetail3.innerHTML=`
         <div class="col-md-4 col-sm-12 pb-5">
         <div class="card" style="width: 18rem;">
             <h3 class="text-center" id="title_1">${data[3].name}</h3>
             <img class="card-img-top" src="${data[3].flag}" alt="Card image cap">
             <div class="card-body text-center">
               <p class="card-text"><b>Capital: ${data[3].capital}</b></p>
               <p class="card-text">Region:${data[3].region}</p>
               <p id="code_1" class="card-text">Country Code: ${data[3].alpha3Code}</p>
               <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModal2">
               Click for Weather
             </button>
             </div>
           </div>
         </div>
         <!-- Modal -->
         <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog" role="document">
             <div class="modal-content bg-dark text-white">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-globe" aria-hidden="true"></i> Weather of ${data[3].name}</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 </div>
                 <div class="modal-body text-center">
                 <p><i class="fa fa-map-marker" aria-hidden="true"></i> Latitude: ${data1.coord.lat}  & longitude: ${data1.coord.lon} </p>
                 <p><i class="fa fa-thermometer-full" aria-hidden="true"></i> Temperature: ${data1.main.temp}</p>
                 <p><i class="fa fa-cloud" aria-hidden="true"></i> Humidity : ${data1.main.humidity}</p>
                 <p><i class="fa fa-rocket" aria-hidden="true"></i> Pressure : ${data1.main.pressure}</p>

                 
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
               </div>
             </div>
           </div>
         </div>`

        }).catch((err) => { console.log(err) })

    })
  