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

    Layers.EastBeach = new OpenLayers.Layer.Vector('East Beach Park');
    map.addLayer(Layers.EastBeach);
    Layers.LeadbetterBeach = new OpenLayers.Layer.Vector('Leadbetter Beach Park');
    map.addLayer(Layers.LeadbetterBeach);
    Layers.MesaLaneSteps = new OpenLayers.Layer.Vector('Mesa Lane Steps Park');
    map.addLayer(Layers.MesaLaneSteps);
    Layers.ThousandSteps = new OpenLayers.Layer.Vector('Thousand Steps Park');
    map.addLayer(Layers.ThousandSteps);
    Layers.WestBeach = new OpenLayers.Layer.Vector('West Beach Park');
    map.addLayer(Layers.WestBeach);


// ===== Styles =====

    EastBeach_style = {
      pointRadius: 12,
      strokeColor: "#4da6ff",
      fillOpacity: 1,
      strokeOpacity: 1
    }
    LeadbetterBeach_style = {
      pointRadius: 12,
      fillColor: "#4dffa6",
      fillOpacity: 1,
      strokeOpacity: 1
    }
    MesaLaneSteps_style = {
      pointRadius: 12,
      fillColor: "#ff4da6",
      fillOpacity: 1,
      strokeOpacity: 1
    }
    ThousandSteps_style = {
      pointRadius: 12,
      fillColor: "#ffa64d",
      fillOpacity: 1,
      strokeOpacity: 1
    }
    WestBeach_style = {
      pointRadius: 12,
      fillColor: "#ff4da6",
      fillOpacity: 1,
      strokeOpacity: 1
    }
    Harbor_style = {
		  fillColor: "#4da6ff",
		  fillOpacity: .2,
		  strokeOpacity: .5,
		  strokeColor: "#0080ff"
    }
    SBC_style = {
      fillColor: "#80ff00",
    	fillOpacity: 1,
    	strokeOpacity: 1,
    	strokeColor: "#80ff00"
    }
    SBHM_style = {
      fillColor: "#7f00ff",
    	fillOpacity: 1,
    	strokeOpacity: 1,
    	strokeColor: "#7f00ff"
    }

// ===== Beach Parks =====

    var Coord_EastBeachPark = new OpenLayers.Geometry.Point(-119.661723, 34.419577).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Coord_LeadbetterBeachPark = new OpenLayers.Geometry.Point(-119.698047, 34.402341).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Coord_MesaLaneSteps = new OpenLayers.Geometry.Point(-119.730702, 34.398399).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Coord_ThousandSteps = new OpenLayers.Geometry.Point(-119.713646, 34.396243).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);
    var Coord_WestBeachPark = new OpenLayers.Geometry.Point(-119.690929, 34.410744).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
				);

    var Point_EastBeachPark = new OpenLayers.Feature.Vector(Coord_EastBeachPark,null,EastBeach_style);
    var Point_LeadbetterBeachPark = new OpenLayers.Feature.Vector(Coord_LeadbetterBeachPark,null,LeadbetterBeach_style);
    var Point_MesaLaneSteps = new  OpenLayers.Feature.Vector(Coord_MesaLaneSteps,null,MesaLaneSteps_style);
    var Point_ThousandSteps = new  OpenLayers.Feature.Vector(Coord_ThousandSteps,null,ThousandSteps_style);
    var Point_WestBeachPark = new  OpenLayers.Feature.Vector(Coord_WestBeachPark,null,WestBeach_style);

    Layers ["EastBeach"].addFeatures([Point_EastBeachPark]);
    Layers ["LeadbetterBeach"].addFeatures([Point_LeadbetterBeachPark]);
    Layers ["MesaLaneSteps"].addFeatures([Point_MesaLaneSteps]);
    Layers ["ThousandSteps"].addFeatures([Point_ThousandSteps]);
    Layers ["WestBeach"].addFeatures([Point_WestBeachPark]);

// ===== Santa Barbara Harbor =====

    Layers.Harbor = new OpenLayers.Layer.Vector('Santa Barbara Harbor');
    map.addLayer(Layers.Harbor);

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
    var LinearRing_SantaBarbaraHarbor = new OpenLayers.Feature.Vector(Coord_SantaBarbaraHarbor, null, Harbor_style);

    Layers["Harbor"].addFeatures([LinearRing_SantaBarbaraHarbor]);

// ===== KML Layers =====

    Layers.SantaBarbaraChannel = new OpenLayers.Layer.Vector("KML - Santa Barbara Channel", {
                projection: map.displayProjection,
                visibility: true,
                style: SBC_style,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "http://lpa2.github.io/GEOG485L/XML/milestone_09_SBC.kml",
                    format: new OpenLayers.Format.KML({
                        extractAttributes: false
                    })
                })
            });
           	map.addLayer(Layers.SantaBarbaraChannel)

    Layers.SantaBarbaraHalfMarathon = new OpenLayers.Layer.Vector("KML - Santa Barbara Half Marathon", {
                projection: map.displayProjection,
                visibility: true,
                style: SBHM_style,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "http://lpa2.github.io/GEOG485L/XML/milestone_09_SBHM.kml",
                    format: new OpenLayers.Format.KML({
                        extractAttributes: true
                    })
                })
            });
           	map.addLayer(Layers.SantaBarbaraHalfMarathon)

    }

