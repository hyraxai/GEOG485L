function initialize(){
    var lon = -106.109520;
    var lat = 34.507944;
    var zoom =7;
    var map;
    var layer;
    var BINGaerial
    var apiKey = "Al7Upsa5olkzThfkrANCiY9awWOrXPn-Up9yd3zFWSIjyzsRgWoafoDWpSyCMegx"
    var baseControls = [
        new OpenLayers.Control.Navigation({}),
     	  new OpenLayers.Control.PanZoomBar({}),
		    new OpenLayers.Control.LayerSwitcher({}),
		    new OpenLayers.Control.Permalink(),
		    new OpenLayers.Control.MousePosition({})
        ];
    var map = new OpenLayers.Map( 'milestone_13_map', {
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
        map.addLayer(BINGaerial);
}

