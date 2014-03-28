function initialize() {
    var mylatlng = new google.maps.LatLng(35.244414,-106.567711)
    var myOptions = {
          zoom: 11,
          center: mylatlng,
          mapTypeId: google.maps.MapTypeId.ROAD,
          styles:[
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      { "visibility": "on" },
                      { "color": "#808080" },
                      { "weight": 3 }
                    ]
                  },{
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      { "visibility": "on" },
                      { "weight": 2 },
                    ]
                  },{
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.fill",
                    "stylers": [
                      { "visibility": "on" },
                      { "weight": 6 }
                    ]
                  },{
                  }
                ]
        };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				
<!-- == BOSQUE BREWING CO. == -->
				
    var bosque = new google.maps.LatLng(35.186847,-106.586320); 
		var bosqueMarker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,					
          position: bosque,
					map: map,
					title:'Bosque Brewing Co.'
		});	
		var bosqueContentString =
				'<div id="siteNotice">'+
      	  '</div>'+
      		'<h1 id="firstHeading" class="firstHeading">Bosque Brewing Co.</h1>'+
          '<h2 id="secondHeading" class="secondHeading">Flavor is Boss&reg;</h2>'+
      		'<div id="bodyContent">'+
          '<p><b>Address</b>: 8900 San Mateo Blvd NE, Albuquerque, NM 87113</p>'+
          '<p><b>Phone</b>: (505) 433-3889</p>'+
          '<p><b>Hours</b>:</p>'+
          '<ul><li>Monday - Thursday: 11:00 AM - 10:00PM</li><li> Friday - Saturday: 11:00AM - 12:00AM</li><li>Sunday: 12:00PM - 8:00PM</li></ul>'+
          '<p><b>Beer Menu</b>: <a href="http://www.bosquebrewing.com/beers/"/>Beers</a></p>'+
          '<p><b>Food Menu</b>: <a href="http://www.bosquebrewing.com/menu/"/>Food</a></p>'+
          '<p><b>Website</b>: <a href="http://www.bosquebrewing.com"/>bosquebrewing.com</a></p>'+
      		'</div>'+
      		'</div>';
    var bosqueInfoWindow = new google.maps.InfoWindow({
			  content: bosqueContentString
		});
			  google.maps.event.addListener(bosqueMarker,'click', function() {
			  bosqueInfoWindow.open(map,bosqueMarker);
		});
								
<!-- == BROKEN BOTTLE BREWERY == -->
				
		var broken = new google.maps.LatLng(35.187997,-106.662354);
		var brokenMarker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,					  
          position: broken,
					map: map,
					title:'Broken Bottle Brewery'
		});
		var brokenContentString = 
			  '<div class="infoBox">'+
      	  '</div>'+
      		'<h1 id="firstHeading" class="firstHeading">Broken Bottle Brewery</h1>'+
          '<h2 id="secondHeading" class="secondHeading">Albuquerque&#39;s 1st westside brewery.</h2>'+
      		'<div id="bodyContent">'+
          '<p><b>Address</b>: Suite K, 9421 Coors Blvd NW, Albuquerque, NM 87114</p>'+
          '<p><b>Phone</b>: (505) 890-8777</p>'+
          '<p><b>Hours</b>:</p>'+
          '<ul><li>Monday - Wednesday: 4:00PM - 11:00PM</li><li>Thursday: 4:00PM - 12:00AM</li><li>Friday: 2:00PM - 12:00AM</li><li>Saturday: 12:00PM - 12:00AM</li><li>Sunday: 12:00AM - 10:00PM</li></ul>'+
          '<p><b>Beer Menu</b>: <a href="http://www.brokenbottlebrewery.com/food.html/"/>Beers</a></p>'+
          '<p><b>Food Menu</b>: <a href="http://www.brokenbottlebrewery.com/beer.html/">Food</a></p>'+
          '<p><b>Website</b>: <a href="http://www.brokenbottlebrewery.com/index.html/"/>brokenbottlebrewery.com</a></p>'+
      		'</div>'+
      		'</div>';					
		var brokenInfoWindow = new google.maps.InfoWindow({
			  content: brokenContentString
		});
			  google.maps.event.addListener(brokenMarker,'click', function() {
			  brokenInfoWindow.open(map,brokenMarker);
		});
								
<!-- == CHAMA RIVER BREWING CO. == -->
				
    var chama = new google.maps.LatLng(35.140193,-106.599930);
		var chamaMarker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
					position: chama,
					map: map,
					title:'Chama River Brewing Co.'
		});
		var chamaContentString = 
				'<div id="siteNotice">'+
    		  '</div>'+
      		'<h1 id="firstHeading" class="firstHeading">Chama River Brewing Co.</h1>'+
          '<h2 id="secondHeading" class="secondHeading">New Mexico&#39;s most award winning micro-brewery.</h2>'+
      		'<div id="bodyContent">'+
          '<p><b>Address</b>: 4939 Pan American Fwy, Albuquerque, NM 87109</p>'+
          '<p><b>Phone</b>: (505) 342-1800</p>'+
          '<p><b>Hours</b>:</p>'+
          '<ul><li>Sunday - Thursday: 11:00AM to 10:00PM</li><li>Friday - Saturday: 11:00AM to 11:00ßPM</li></ul>'+
          '<p><b>Beer Menu</b>: <a href="http://www.chamariverbrewery.com/ontap"/>Beers</a></p>'+
          '<p><b>Food Menu</b>: <a href="http://www.chamariverbrewery.com/menus"/>Food</a></p>'+
          '<p><b>Website</b>: <a href="http://www.chamariverbrewery.com/"/>chamariverbrewery.com</a></p>'+
      		'</div>'+
      		'</div>';				
    var chamaInfoWindow = new google.maps.InfoWindow({
			  content: chamaContentString
		});
			  google.maps.event.addListener(chamaMarker,'click', function() {
			  chamaInfoWindow.open(map,chamaMarker);
		});
								
<!-- == KAKTUS BREWING COMPANY == -->
				
		var kaktus = new google.maps.LatLng(35.308299,-106.538756);
		var kaktusMarker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
					position: kaktus,
					map: map,
					title:'Kaktus Brewing Company'
		});
		var kaktusContentString = 
				'<div class="infoBox">'+
    		  '</div>'+
      		'<h1 id="firstHeading" class="firstHeading">Kaktus Brewing Company Inc.</h1>'+
          '<h2 id="secondHeading" class="secondHeading">The Only Brewery in Bernalillo.</h2>'+
      		'<div id="bodyContent">'+
          '<p><b>Address</b>: 471 S Hill Rd, Bernalillo, NM 87004</p>'+
          '<p><b>Phone</b>: (505) 379-5072</p>'+
          '<p><b>Hours</b>:</p>'+
          '<ul><li>Monday - Thursday: 11:30AM - 8:00PM</li><li>Friday - Saturday: 11:30AM - 10:00PM</li><li>Sunday: 11:30AM - 08:00PM</li></ul>'+
          '<p><b>Beer Menu</b>: <a href="http://www.kaktusbrewery.com/our_beer.html">Beer</a></p>'+
          '<p><b>Food Menu</b>: <a href="http://www.kaktusbrewery.com/menu.html">Food</a></p>'+
          '<p><b>Website</b>: <a href="http://www.kaktusbrewery.com/index.html/"/>kaktusbrewery.com</a></p>'+
      		'</div>'+
      		'</div>';		
    var kaktusInfoWindow = new google.maps.InfoWindow({
			  content: kaktusContentString
		});
			  google.maps.event.addListener(kaktusMarker,'click', function() {
			  kaktusInfoWindow.open(map,kaktusMarker);
		});
							
<!-- == LA CUMBRE BREWING CO. == -->
				
				var lacumbre = new google.maps.LatLng(35.118086,-106.613939);
				var lacumbreMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
					  position: lacumbre,
					  map: map,
					  title:'La Cumbre Brewing Co.'
				});
				var lacumbreContentString = 
						'<div class="infoBox">'+
      					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">La Cumbre Brewing Co.</h1>'+
                '<h2 id="secondHeading" class="secondHeading">New Mexico Beers at their peak.</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 3313 Girard Blvd NE, Albuquerque, NM 87107</p>'+
                '<p><b>Phone</b>: (505)872-0225</p>'+
                '<p><b>Hours</b>:Sunday - Saturday: 12:00PM - "Close"</p>'+
                '<p><b>Beer Menu</b>: <a href="http://www.lacumbrebrewing.com/ourbrews.html">Brews</a></p>'+
                '<p><b>Website</b>: <a href="http://www.lacumbrebrewing.com/aboutus.html"/>lacumbrebrewing.com</a></p>'+
      					'</div>'+
      					'</div>';						
				var lacumbreInfoWindow = new google.maps.InfoWindow({
					  content: lacumbreContentString
				});
					  google.maps.event.addListener(lacumbreMarker,'click', function() {
					  lacumbreInfoWindow.open(map,lacumbreMarker);
				});
								
<!-- == IL VICINO BREWING CANTEEN == -->
				
				var ilvicino = new google.maps.LatLng(35.120605,-106.617938);
				var ilvicinoMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,					
            position: ilvicino,
					  map: map,
					  title:'Il Vicino Brewing Canteen'
				});
				var ilvicinoContentString = 
						'<div class="infoBox">'+
     					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">I.V.B. (Il Vicino Brewing) Canteen</h1>'+
                '<h2 id="secondHeading" class="secondHeading">Believe in Beer...</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 2381 Aztec Albuquerque, NM 87107</p>'+
                '<p><b>Phone</b>: (505) 881-2737</p>'+
                '<p><b>Hours</b>:</p>'+
                '<ul><li>Sunday - Thursday: 12:00PM - 10:00PM</li><li>Friday - Saturday: 12:00PM - 12:00AM</li></ul>'+
                '<p><b>Beer Menu</b>: <a href="http://www.brewery.ilvicino.com/the-beer/">Beers</a></p>'+
                '<p><b>Food Menu</b>: <a href="http://www.brewery.ilvicino.com/the-menu/">Food</a></p>'+
                '<p><b>Website</b>: <a href="http://www.brewery.ilvicino.com"/>brewery.ilvicino.com</a></p>'+
      					'</div>'+
      					'</div>';				
				var ilvicinoInfoWindow = new google.maps.InfoWindow({
					  content: ilvicinoContentString
				});
				  	google.maps.event.addListener(ilvicinoMarker,'click', function() {
					  ilvicinoInfoWindow.open(map,ilvicinoMarker);
				});
							
<!-- == MARBLE BREWERY == -->
				
				var marble = new google.maps.LatLng(35.093019,-106.646654);
				var marbleMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
					  position: marble,
					  map: map,
					  title:'Marble Brewery'
					});
				var marbleContentString = 
						'<div class="infoBox">'+
      					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">Marble Brewery</h1>'+
                '<h2 id="secondHeading" class="secondHeading">Rock. Solid. Beer.</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 111 Marble Ave NW, Albuquerque, NM 87102</p>'+
                '<p><b>Phone</b>: (505) 243-2739</p>'+
                '<p><b>Hours</b>:</p>'+
                '<ul><li>Sunday - Thursday: 12:00PM - 10:00PM</li><li>Friday - Saturday: 12:00PM - 12:00AM</li></ul>'+
                '<p><b>Beer Menu</b>: <a href="http://www.marblebrewery.com/the-beers/">Beers</a></p>'+
                '<p><b>Food Menu</b>: <a href="http://www.marblebrewery.com/food-menu/">Food</a></p>'+
                '<p><b>Food Trucks (availability may vary)</b>: <a href="http://www.marblebrewery.com/food-trucks/">Food Trucks</a></p>'+
                '<ul><li>Soo Bak Foods</li><li>Sebastiano&#39;s</li><li>TFK Smokehouse</li><li>The Supper Truck</li><li>Chicharroneria Don Choche</li><li>Rustic Food Truck</li></ul>'+
                '<p><b>Website</b>: <a href="http://www.marblebrewery.com"/>marblebrewery.com</a></p>'+
      					'</div>'+
      					'</div>';					
				var marbleInfoWindow = new google.maps.InfoWindow({
					  content: marbleContentString
				});
					  google.maps.event.addListener(marbleMarker,'click', function() {
					  marbleInfoWindow.open(map,marbleMarker);
				});
							
<!-- == NEXUS BREWERY == -->
				
				var nexus = new google.maps.LatLng(35.133891,-106.606019);
				var nexusMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
					  position: nexus,
					  map: map,
					  title:'Nexus Brewery'
				});
				var nexusContentString = 
						'<div class="infoBox">'+
					      '<h1 id="firstHeading" class="firstHeading">Nexus Brewery & Restaurant</h1>'+
                '<h2 id="secondHeading" class="secondHeading">Albuquerque&#39;s Craft Beer & Soul Food Connection.</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 4730 Pan American Freeway East, NE, Suite D, Albuquerque, NM 87104</p>'+
                '<p><b>Phone</b>: (505) 242-4100</p>'+
                '<p><b>Hours</b>:</p>'+
                '<ul><li>Sunday - Thursday: 11:00AM - 10:00PM</li><li>Friday - Saturday: 11:00AM - 11:00PM</li></ul>'+
                '<p><b>Beer Menu</b>: <a href="http://www.nexusbrewery.com/beerandwine/beer-list"/>Beer List</a></p>'+
                '<p><b>Food Menu</b>: <a href="http://www.nexusbrewery.com/food/">Food</a></p>'+
                '<p><b>Website</b>: <a href="http://www.nexusbrewery.com/"/>nexusbrewery.com</a></p>'+
      					'</div>'+
      					'</div>';				
				var nexusInfoWindow = new google.maps.InfoWindow({
					  content: nexusContentString
				});
					  google.maps.event.addListener(nexusMarker,'click', function() {
					  nexusInfoWindow.open(map,nexusMarker);
				});
							
<!-- == TRACTOR BREWING CO. == -->
			
				var tractor = new google.maps.LatLng(35.079709,-106.606914);
				var tractorMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
					  position: tractor,
					  map: map,
					  title:'Tractor Brewing Co.'
				});
				var tractorContentString = 
						'<div class="infoBox">'+
      					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">Tractor Brewing Company</h1>'+
                '<h2 id="secondHeading" class="secondHeading">Get Plowed!</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 118 Tulane Dr SE, Albuquerque, NM 87106</p>'+
                '<p><b>Phone</b>: (505) 433-5654</p>'+
                '<p><b>Hours</b>:</p>'+
                '<ul><li>Monday - Wednesday: 3:00PM - 12:00AM</li><li>Thursday: 3:00PM - 2:00AM</li><li>Friday - Saturday: 1:00PM - 2:00AM</li><li>Sunday: 1:00PM - 12:00PM</li></ul>'+
                '<p><b>Classic Beer Menu</b>: <a href="http://www.getplowed.com/site/beers-2/classic-beers/">Classic Beers</a></p>'+
                '<p><b>Seasonal Beer Menu</b>: <a href="http://www.getplowed.com/site/beers-2/nob-hill-seasonals/">Seasonal Beers</a></p>'+
                '<p><b>Website</b>: <a href="http://www.getplowed.com"/>getplowed.com</a></p>'+
      					'</div>'+
      					'</div>';
					
				var tractorInfoWindow = new google.maps.InfoWindow({
					  content: tractorContentString
				});
					  google.maps.event.addListener(tractorMarker,'click', function() {
					  tractorInfoWindow.open(map,tractorMarker);
				});
								
<!-- == TURTLE MOUNTAIN BREWING COMPANY == -->
				
				var turtle = new google.maps.LatLng(35.243125,-106.664711);
				var turtleMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
					  position: turtle,
					  map: map,
					  title:'Turtle Mountain Brewing Company'
				});
				var turtleContentString = 
						'<div class="infoBox">'+
      					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">Turtle Mountain Brewing Company</h1>'+
                '<h2 id="secondHeading" class="secondHeading">Rio Rancho&#39;s Neighborhood Brewpub Since 1999.</h2>'+
      					'<div id="bodyContent">'+
                '<p><b>Address</b>: 905 36th Place SE, Rio Rancho, NM 87124</p>'+
                '<p><b>Phone</b>: (505) 994-9497</p>'+
                '<p><b>Hours</b>:</p>'+
                '<ul><li>Sunday - Tuesday: 11:00AM - 8:30PM</li><li>Wednesday - Thursday: 11:00AM - 9:00PM</li><li>Friday - Saturday: 11:00AM - 9:30PM</li></ul>'+
                '<p><b>Beer Menu</b>: <a href="http://www.turtlemountainbrewing.com/beers-on-tap/"/>Beers on Tap</a></p>'+
                '<p><b>Food Menu</b>: <a href="http://www.turtlemountainbrewing.com/menu/">Food</a></p>'+
                '<p><b>Website</b>: <a href="http://www.turtlemountainbrewing.com"/>turtlemountainbrewing.com</a></p>'+
      					'</div>'+
      					'</div>';					
				var turtleInfoWindow = new google.maps.InfoWindow({
					  content: turtleContentString
				});
					  google.maps.event.addListener(turtleMarker,'click', function() {
				  	turtleInfoWindow.open(map,turtleMarker);
				});
						
    }
