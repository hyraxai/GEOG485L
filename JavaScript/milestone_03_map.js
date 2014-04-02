function initialize(){
		var ReservationWaterTower = new google.maps.LatLng(35.244414,-106.567711)
    var mapOptions = {
     		zoom: 11,
        center: ReservationWaterTower,
        mapTypeId: google.maps.MapTypeId.ROAD};
    var map = new google.maps.Map(document.getElementById("milestone_03_map"), mapOptions);
    var WiFiLayer = new google.maps.KmlLayer({
        url: 'http://lpa2.github.io/GEOG485L/XML/milestone_03.kml'
    });
        WiFiLayer.setMap(milestone_03_map);
}

google.maps.event.addDomListener(window, 'load', initialize);
