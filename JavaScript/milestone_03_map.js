function initialize(){
		var ReservationWaterTower = new google.maps.LatLng(35.244414,-106.567711)
    var mapOptions = {
     		zoom: 11,
        center: ReservationWaterTower,
        mapTypeId: google.maps.MapTypeId.ROAD};
    var map = new google.maps.Map(document.getElementById("milestone_03_map"), mapOptions);
    var georssLayer = new google.maps.KmlLayer('http://lpa2.github.io/GEOG485L/XML/WigleWifi_20140207085042.kml');
        georssLayer.setMap(map);
}
