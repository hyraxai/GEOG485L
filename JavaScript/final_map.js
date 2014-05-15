function initialize(){
    var lon = -106.5;
    var lat = 36;
    var zoom = 3;
    var myProjection = new OpenLayers.Projection("EPSG:4326")
    var bmngLayer, countiesLayer, indlandLayer, federallandsLayer;
    var map = new OpenLayers.Map('milestone_13_map',
            	{projection:myProjection}
    );

		usImagery = new OpenLayers.Layer.WMS( 
      "US Imagery Tile Service - USGS", 
      "http://basemap.nationalmap.gov/arcgis/services/USGSImageryTopo/MapServer/WmsServer?",
      {layers: "0", version: '1.3.0', transparent: 'TRUE'},
      {isBaseLayer: true}
    );
    map.addLayer(usImagery)

    nmeocLayer = new OpenLayers.Layer.WMS( 
      "New Mexico Emergency Operation Centers", 
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "2007_07_26_nm_eoc", styles: 'EOC_Diamond', version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(nmeocLayer)

	  nmfirestations = new OpenLayers.Layer.WMS( 
      "New Mexico Firestations", 
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "2008_09_19_nm_firestations", styles: 'FireStation_Triangle', version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(nmfirestations)
		
    nmhospitals = new OpenLayers.Layer.WMS( 
      "New Mexico Hospitals", 
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "2008_09_20_nm_hospitals", styles: 'Hospital_Polygon', version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(nmhospitals)

    countiesLayer = new OpenLayers.Layer.WMS( 
      "US Counties", 
      "http://webservices.nationalatlas.gov/wms?",
      {layers: "counties", version: '1.3.0', transparent: 'TRUE'},
      {isBaseLayer: false, visibility: false, opacity: .8}
    );

    map.addLayer(countiesLayer);
									
		map.setCenter(
        new OpenLayers.LonLat(lon, lat), zoom
    );

    map.addControl(new OpenLayers.Control.LayerSwitcher() );
    map.addControl(new OpenLayers.Control.Scale() );
}
