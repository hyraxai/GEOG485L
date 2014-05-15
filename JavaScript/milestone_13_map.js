function initialize(){
        var lon = -106.109520;
        var lat = 34.507944;
        var zoom = 4;
        var myProjection = new OpenLayers.Projection("EPSG:4326")
        var map;
        var Layers = new Object();
        var baseControls = [
            new OpenLayers.Control.Navigation({}),
     	      new OpenLayers.Control.PanZoomBar({}),
		        new OpenLayers.Control.LayerSwitcher({}),
		        new OpenLayers.Control.Permalink(),
		        new OpenLayers.Control.MousePosition({})
            ];


            map = new OpenLayers.Map('milestone_13_map', {
                      controls: baseControls
           	});

            Layers.usImagery = new OpenLayers.Layer.WMS( 
              "US Imagery Tile Service - USGS", 
            	"http://basemap.nationalmap.gov/arcgis/services/USGSImageryTopo/MapServer/WmsServer?",
            	{layers: "0", version: '1.3.0', transparent: 'TRUE'},
            	{isBaseLayer: true}
            );
            map.addLayer(Layers.usImagery)

            Layers.nmeoc = new OpenLayers.Layer.WMS( 
              "New Mexico Emergency Operation Centers", 
            	"http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
            	{layers: "2007_07_26_nm_eoc", styles: 'EOC_Diamond', version: '1.1.1', transparent: 'true'},
            	{isBaseLayer: false, visibility: true}
            );
            map.addLayer(Layers.nmeoc)

            Layers.nmfirestations = new OpenLayers.Layer.WMS( 
            	"New Mexico Firestations", 
            	"http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
            	{layers: "2008_09_19_nm_firestations", styles: 'FireStation_Triangle', version: '1.1.1', transparent: 'true'},
            	{isBaseLayer: false, visibility: true}
            );
            map.addLayer(Layers.nmfirestations)

            Layers.nmhospitals = new OpenLayers.Layer.WMS( 
              "New Mexico Hospitals", 
            	"http://geog485.unm.edu:8080/geoserver/s_alder117/ows?",
            	{layers: "2008_09_20_nm_hospitals", styles: 'Hospital_Polygon', version: '1.1.1', transparent: 'true'},
            	{isBaseLayer: false, visibility: true}
            );
            map.addLayer(Layers.nmhospitals)

        }
