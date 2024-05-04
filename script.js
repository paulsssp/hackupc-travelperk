const events = [];
let iterator = 0;
function writeNext(){
  // editar el valor de la variable variable jaja amb les dades de events[iterator+1] i incrementar iterator en 1
  document.getElementById("changingEvent").innerText = events[iterator].name;
  document.getElementById("changingDate").innerText = events[iterator].date;
  document.getElementById("changingUrl").innerText = events[iterator].url;
  ++iterator;
  if (iterator === 10) {
    iterator = 0;
  }
}

function search() {
  document.getElementById("searchBar").addEventListener("click", function() {
    var CountryCode = document.getElementById('searchInput').value.toUpperCase();
    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json",
      data: {
        size: 10,
        countryCode: CountryCode, 
        apikey: "TICKETMASTER_API_KEY"
      },
      async: true,
      dataType: "json",
      success: function(json) {
        //console.log(json);
        //json interpretation
        //const obj = JSON.parse(json);
        //const events = [];
        for (let i = 0; i < 10; i++) {
        const event = {
          name: json._embedded.events[i].name,
          date: json._embedded.events[i].dates.start.localDate,
          url: json._embedded.events[i].url
        };
        events.push(event);
        writeNext();
        //console.log(event);
        }

        //alert(json.page.size);
      },
      error: function(xhr, status, err) {
        alert("FATAL ERROR: An error ocurred during the api usage");
      }
      });
      
  });
}

document.addEventListener("DOMContentLoaded", search);
