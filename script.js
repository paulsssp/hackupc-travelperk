document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchBar").addEventListener("click", function() {
        var CountryCode = document.getElementById('searchInput').value;
        $.ajax({
            type:"GET",
            url:"https://app.ticketmaster.com/discovery/v2/events.json",
            data: {
              size: 1,
              countryCode: CountryCode, // Specify the country code here
              apikey: "HIrr1jzsqA2pryPnqqLHiv1frlceKf87"
            },
            async: true,
            dataType: "json",
            success: function(json) {
              console.log(json);
              //json interpretation
              alert("json received");
            },
            error: function(xhr, status, err) {
                alert("FATAL ERROR: An error ocurred during the api usage");
            }
          });
          
    });
});
