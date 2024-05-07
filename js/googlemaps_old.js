
function initMap() {
    var myLatLng =  {lat: 45.120, lng: 25.735};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Arhitecturim'
      });
}