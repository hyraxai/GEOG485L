function initialize(){
    var lon = -119.714167;
    var lat = 34.425833;
    var zoom = 13;
    var Layers = new Object();
    var apiKey = "Al7Upsa5olkzThfkrANCiY9awWOrXPn-Up9yd3zFWSIjyzsRgWoafoDWpSyCMegx"
    var baseControls = [
        new OpenLayers.Control.Navigation({}),
     	  new OpenLayers.Control.PanZoomBar({}),
		    new OpenLayers.Control.LayerSwitcher({}),
		    new OpenLayers.Control.Permalink(),
		    new OpenLayers.Control.MousePosition({})
        ];
    var map = new OpenLayers.Map('milestone_09_map', {
		              controls: baseControls
		});	
    var OSMlayer = new OpenLayers.Layer.OSM("Open Street Map");
				               map.addLayer(OSMlayer);
				               map.setCenter(
					         new OpenLayers.LonLat(lon, lat).transform(
					         new OpenLayers.Projection("EPSG:4326"),
				               map.getProjectionObject()
						           ), zoom
    );
    var BINGaerial = new OpenLayers.Layer.Bing({
				                 name: "Bing Aerial Imagery",
			                   key: apiKey,
			                   type: "Aerial"
    });
    map.addLayer(BINGaerial)

    Layers.BeachParks = new OpenLayers.Layer.Vector('Beach Parks');
    map.addLayer(Layers.BeachParks);

    myOSMPointStyle = {
      pointRadius: 12,
      fillColor: "CC0000",
      fillOpacity: 1,
      strokeOpacity: 1
    }

    var Coord_EastBeachPark = new OpenLayers.Geometry.Point(-119.661723, 34.419577).transform(
					new OpenLayers.Projection("EPSG:4326"),
				  map.getProjectionObject()
					);
    var Point_EastBeachPark = new OpenLayers.Feature.Vector(Coord_EastBeachPark,myOSMPointStyle);
    var Coord_LeadbetterBeachPark = new OpenLayers.Geometry.Point(-119.698047, 34.402341).transform(
					new OpenLayers.Projection("EPSG:4326"),
				  map.getProjectionObject()
					);
    var Point_LeadbetterBeachPark = new OpenLayers.Feature.Vector(Coord_LeadbetterBeachPark,myOSMPointStyle);
    var Coord_MesaLaneSteps = new OpenLayers.Geometry.Point(-119.730702, 34.398399).transform(
					new OpenLayers.Projection("EPSG:4326"),
				  map.getProjectionObject()
					);
    var Point_MesaLaneSteps = new  OpenLayers.Feature.Vector(Coord_MesaLaneSteps,myOSMPointStyle);
    var Coord_ThousandSteps = new OpenLayers.Geometry.Point(-119.713646, 34.396243).transform(
					new OpenLayers.Projection("EPSG:4326"),
				  map.getProjectionObject()
					);
    var Point_ThousandSteps = new  OpenLayers.Feature.Vector(Coord_ThousandSteps,myOSMPointStyle);
    var Coord_WestBeachPark = new OpenLayers.Geometry.Point(-119.690929, 34.410744).transform(
					new OpenLayers.Projection("EPSG:4326"),
				  map.getProjectionObject()
					);
    var Point_WestBeachPark = new  OpenLayers.Feature.Vector(Coord_WestBeachPark,myOSMPointStyle);
        Layers ["BeachParks"].addFeatures([Point_EastBeachPark, Point_LeadbetterBeachPark, Point_MesaLaneSteps, Point_ThousandSteps, Point_WestBeachPark]);
}
