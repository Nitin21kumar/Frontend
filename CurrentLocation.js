
// -------------------------------------------------------------------------GEO LOCATION JAVA SCRIPT-------------------------------------------------------------------------------------------
var latt =0;
var long =0;
var x = document.getElementById('output');
x.innerHTML = 'Here you get your location';
function getYourLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = 'You Can Not Reach';
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude = " + position.coords.latitude;
    x.innerHTML += "<br/>"
    x.innerHTML += "Longitude = " + position.coords.longitude;
    latt =position.coords.latitude;
    long =position.coords.latitude;
}



// -------------------------------------------------------------------------GEO LOCATION JAVA SCRIPT END-------------------------------------------------------------------------------------------










//#------------------------------------------------

