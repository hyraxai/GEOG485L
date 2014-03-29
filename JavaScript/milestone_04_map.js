function initialize() {
    var ReservationWaterTower = new google.maps.LatLng(35.244414,-106.567711)
    var myOptions = {
     		zoom: 11,
    		center: ReservationWaterTower,
        mapTypeId: google.maps.MapTypeId.ROAD,
      styles:[
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#808080" },
      { "weight": 2 }
    ]
  },{
    "featureType": "poi.school",
    "stylers": [
      { "visibility": "on" },
      { "hue": "#ff0000" },
      { "weight": 8 },
      { "saturation": 100 }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "weight": 4 }
    ]
  },{
  }
]
    };
    var map = new google.maps.Map(document.getElementById("milestone_04_map"), myOptions); }
