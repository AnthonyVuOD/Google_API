function initMap() {
    var target = {lat:27.773056, lng: -82.639999};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 11,
      center: target
    });
    var marker = new google.maps.Marker({
      position: target,
      map: map
    });
}
