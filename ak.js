var geocoder;
function getLocation() {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition, errorFunction);
  } else {
    doocument.getElementById("long").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  showAddress(lat, lon);
  // var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
  // +latlon+"&zoom=14&size=400x300&key=AIzaSyCpK9IgW-KjHgPD2nSJROrJzAx_2epD3eI";
  // document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>"
}
function errorFunction() {
  alert("Geocoder failed");
}
function initialize() {
  geocoder = new google.maps.Geocoder();
 
}
function showAddress(lat, lon) {

  var latlng = new google.maps.LatLng(lat, lon);
  geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      // console.log(results)
      if (results[1]) {
        var address = results[0].formatted_address;
        document.getElementById("long").innerHTML=address;

      } else {
        alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

