function initialize(){
    var lon = -106.567711;
    var lat = 35.244414;
    var zoom = 10;
    var myProjection = new OpenLayers.Projection("EPSG:4326")
    var map = new OpenLayers.Map('final_map',
            	{projection:myProjection}
    );

    //===== Unstyled Layers ======

		usImagery = new OpenLayers.Layer.WMS(
      "US Imagery Tile Service - USGS", 
      "http://basemap.nationalmap.gov/arcgis/services/USGSImageryTopo/MapServer/WmsServer?",
      {layers: "0", version: '1.3.0', transparent: 'TRUE'},
      {isBaseLayer: true}
    );
    map.addLayer(usImagery)

    a5contLayer = new OpenLayers.Layer.WMS(
      "35106-A5_CONT",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "35106-A5_CONT", version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(a5contLayer)

	  a6contLayer = new OpenLayers.Layer.WMS(
      "35106-A6_CONT",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "35106-A6_CONT", version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(a6contLayer)
		
    a5tifLayer = new OpenLayers.Layer.WMS(
      "35106-A5",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "35106-A5", styles: 'dem', version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(a5tifLayer)

    a6tifLayer = new OpenLayers.Layer.WMS(
      "35106-A5",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "35106-A6", styles: 'dem', version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(a6tifLayer)

    bernLayer = new OpenLayers.Layer.WMS(
      "tgr2006se_bern_lka",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "tgr2006se_bern_lka", version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(bernLayer)

    //===== Unstyled Layers ======

    style1Layer = new OpenLayers.Layer.WMS(
      "tgr2006se_bern_lka",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "tgr2006se_bern_lka", version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(style1Layer)

    style2Layer = new OpenLayers.Layer.WMS(
      "tgr2006se_bern_lka",
      "http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
      {layers: "tgr2006se_bern_lka", version: '1.1.1', transparent: 'true'},
      {isBaseLayer: false, visibility: true}
    );
    map.addLayer(style2Layer)

								
		map.setCenter(
        new OpenLayers.LonLat(lon, lat), zoom
    );

    map.addControl(new OpenLayers.Control.LayerSwitcher() );
    map.addControl(new OpenLayers.Control.Scale() );
}
