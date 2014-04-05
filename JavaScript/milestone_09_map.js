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

    BeachPark = {
      pointRadius: 12,
      fillColor: "FFFF00",
      fillOpacity: .5,
      strokeOpacity: .5
    }

    var Coord_EastBeachPark = new OpenLayers.Geometry.Point(-119.661723, 34.419577).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Point_EastBeachPark = new OpenLayers.Feature.Vector(Coord_EastBeachPark,BeachPark);
    var Coord_LeadbetterBeachPark = new OpenLayers.Geometry.Point(-119.698047, 34.402341).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Point_LeadbetterBeachPark = new OpenLayers.Feature.Vector(Coord_LeadbetterBeachPark,BeachPark);
    var Coord_MesaLaneSteps = new OpenLayers.Geometry.Point(-119.730702, 34.398399).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Point_MesaLaneSteps = new  OpenLayers.Feature.Vector(Coord_MesaLaneSteps,BeachPark);
    var Coord_ThousandSteps = new OpenLayers.Geometry.Point(-119.713646, 34.396243).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Point_ThousandSteps = new  OpenLayers.Feature.Vector(Coord_ThousandSteps,BeachPark);
    var Coord_WestBeachPark = new OpenLayers.Geometry.Point(-119.690929, 34.410744).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Point_WestBeachPark = new  OpenLayers.Feature.Vector(Coord_WestBeachPark,BeachPark);

    Layers ["BeachParks"].addFeatures([Point_EastBeachPark, Point_LeadbetterBeachPark, Point_MesaLaneSteps, Point_ThousandSteps, Point_WestBeachPark]);

    Layers.Harbor = new OpenLayers.Layer.Vector('Santa Barbara Harbor');
    map.addLayer(Layers.Harbor);

 		HarborOutline = {
		  fillColor: "#CD00CD",
		  fillOpacity: .2,
		  strokeOpacity: .5,
		  strokeColor: "#CD00CD"
    }

    var Coord_SantaBarbaraHarbor = new OpenLayers.Geometry.LinearRing([
    		new OpenLayers.Geometry.Point(-119.694208, 34.404775).transform(
				new OpenLayers.Projection("EPSG:4326"),
			  map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.692133, 34.403253).transform(
				new OpenLayers.Projection("EPSG:4326"),
			  map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.691850, 34.403156).transform(
				new OpenLayers.Projection("EPSG:4326"),
			  map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.687556, 34.404958).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.685103, 34.408036).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.685964, 34.409789).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.688297, 34.411161).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.690569, 34.408494).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.690831, 34.406414).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.691075, 34.407100).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.691261, 34.408094).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
        new OpenLayers.Geometry.Point(-119.691881, 34.408478).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.693339, 34.405983).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.693742, 34.405511).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    		new OpenLayers.Geometry.Point(-119.694208, 34.404775).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				),
    ]);
    var LinearRing_SantaBarbaraHarbor = new OpenLayers.Feature.Vector(Coord_SantaBarbaraHarbor, null, HarborOutline);

    Layers["Harbor"].addFeatures([LinearRing_SantaBarbaraHarbor]);

    
    myKMLstyle = {
      fillColor: "#0000ff",
    	fillOpacity: 1,
    	strokeOpacity: 1,
    	strokeColor: "#0000ff"
    }

    Layers.SantaBarbaraChannel = new OpenLayers.Layer.Vector("Santa Barbara Channel", {
                projection: map.displayProjection,
                visibility: true,
                style: myKMLstyle,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "http://lpa2.github.io/GEOG485L/XML/milestone_09_SBC.kml",
                    format: new OpenLayers.Format.KML({
                        extractAttributes: true
                    })
                })
            });
           	map.addLayer(Layers.SantaBarbaraChannel)

    Layers.SBHM = new OpenLayers.Layer.Vector("Santa Barbara Half Marathon", {
                projection: map.displayProjection,
                visibility: true,
                style: myKMLstyle,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "http://lpa2.github.io/GEOG485L/XML/milestone_09_SBHM.kml",
                    format: new OpenLayers.Format.KML({
                        extractAttributes: true
                    })
                })
            });
           	map.addLayer(Layers.SBHM)

    }

