//1. Model barts (from Foursquare API )
//'https://api.foursquare.com/v2/venues/search?ll=37.773972,-122.431297&query=barts&client_id=xx&client_secret=xx'
var barts = [
    {
        name: "Civic Center/UN Plaza BART Station",
        lat: 37.778643755782504,
        lng: -122.4145475382581,
        fid: "4813bc50f964a520414f1fe3"
    },
    {
        name: "Powell St. BART Station",
        lat: 37.784618117316825,
        lng: -122.40764481898593,
        fid: "455f7871f964a520913d1fe3"
    },
    {
        name: "16th St. Mission BART Station",
        lat: 37.76491704708141,
        lng: -122.4197795857948,
        fid: "4abff08bf964a520219320e3"

    },
    {
        name: "Montgomery St. BART Station",
        lat: 37.78911212565335,
        lng: -122.40201943129196,
        fid: "455f77abf964a520903d1fe3"
    },
    {
        name: "Embarcadero BART Station",
        lat: 37.79331186101807,
        lng: -122.41849095557305,
        fid: "4f274b00e4b0d10db34d5141"
    },
    {
        name: "Glen Park BART Station",
        lat: 37.733307657596974,
        lng: -122.43382628819533,
        fid: "463b2d04f964a52021461fe3"
    },
    {
        name: "Balboa Park BART Station",
        lat: 37.72219163686365,
        lng: -122.44745089785695,
        fid: "455f7a06f964a520933d1fe3"
    },
    {
        name: "Daly City BART Station",
        lat: 37.706198026101035,
        lng: -122.46897350490995,
        fid: "47fe1d03f964a520e54e1fe3"
    },
    {
        name: "MacArthur BART Station",
        lat: 37.82888303382439,
        lng: -122.26700877054357,
        fid: 9649
    },
    {
        name: "Millbrae BART Station",
        lat: 37.60032740472124,
        lng: -122.38674031186648,
        fid: "468ef104f964a52092481fe3"
    },
    {
        name: "Ashby BART Station",
        lat: 37.85279211923512,
        lng: -122.27035400975996,
        fid: "4813c2d1f964a5204a4f1fe3"
    },
    {
        name: "Zynga BART Shuttle (Outgoing)",
        lat: 37.76437330882453,
        lng: -122.40167094604999,
        fid: "4e0bcdc47d8b2313a1269e59"
    },
    {
        name: "Downtown Berkeley BART Station",
        lat: 37.87009586595156,
        lng: -122.26813316345213,
        fid: "4813c27cf964a520494f1fe3"
    }
];


// declare global object to render the map
var map;
 // 2. loading the google map with some map styling
function initMap() {
	// sytling properties
	var mapStyled = {
		center: {
			lat: 37.778643755782504,
			lng: -122.4145475382581
		},
		zoom: 11,
		scrollwheel: false,
		styles: [{
            "elementType": "labels.text.fill",
			"stylers": [{
				"color": "#523735"
		          }]
	      },{
			"elementType": "geometry",
			"stylers": [{
				"color": "#ebe3cd"
			}, {
				"lightness": "23"
			}]
		},{  
			 "elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f1e6"
		          }]
		},{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#c9b2a6"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#dcd2be"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#ae9e90"
			}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#93817c"
			}]
		},{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#447530"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{"color": "#f5f1e6"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}, {
				"lightness": "100"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffd4a5"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fdfcf8"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [{
				"weight": "3.00"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [{
				"weight": "0.30"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#747474"
			}, {
				"lightness": "36"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f8c967"
			}]
		},{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#e9bc62"
			}]
		},{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e98d58"
			}]
		},{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#db8555"
			}]
		},{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "on"
			}, {
				"lightness": "100"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "on"
			}, {
				"lightness": "100"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#d2e7f7"
			}]
		}]
	};


	//map initialization 
	var mapDetails = document.getElementById('map');
	map = new google.maps.Map(mapDetails, mapStyled);

    // databinding- knockout
	ko.applyBindings(new viewModel()); 
}
//google map error function(jquery selector) ,it will be invoked when exists error to provide user with error message  
function googleMapError() {
	    var mapArea = document.getElementById('map');
		var error= '<h2> Sorry, someting wrong through Map Loading , please contact administrator</h1>' ;
		mapArea.innerHTML=error ; 
}


//Knockout- constructor
var bart = function(data) {
	//proper reference to my object bart
	var self = this;
	//bind my Model(barts) attribute 
	self.name = ko.observable(data.name);
	self.lat = ko.observable(data.lat);
	self.lng = ko.observable(data.lng);
	self.fid = ko.observable(data.fid);
	self.marker = ko.observable();
	self.contentString = ko.observable('');
	self.address = ko.observable('');
    self.photoPrefix = ko.observable('');
    self.photoSuffix = ko.observable('');
    
};

//4. ViewModel
var viewModel = function() {
	//proper reference to my object viewModel 
	var self = this;
	// define infowindow
	var infowindow = new google.maps.InfoWindow({
			maxWidth: 300
		});
	
	// declare array of barts into ViewModel
	self.bartItems = ko.observableArray([]); 
	//fill the (bartItems)through iterate over all barts(Model)
	barts.forEach(function(bartItem) {
		self.bartItems.push(new bart(bartItem));
	});


//5.set marker for each bart into VM, call foursquare then show on marker
	self.bartItems().forEach(function(bartItem) {
		//define markers
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(bartItem.lat(), bartItem.lng()),
			map: map,
			animation: google.maps.Animation.DROP
		});
//marker method for each bartItem
bartItem.marker=marker;

// AJAX request  for Foursquare api
        $.ajax({
			url: 'https://api.foursquare.com/v2/venues/' + bartItem.fid() +'?client_id=1QWEF3VIHADQLN5XEPYO4DMG52KL5N0B2V3T0ASKUYDZEBND&client_secret=VUPCAMN1RMI5CP02Z0PKHE3WPIMXXVQVW1HFAVF5YAQ31RL4&v=20130815',
            dataType: "json",
            success: function (data) {
                var result = data.response.venue;

                //  check if required data availabe on Foursquare , if exists, then add  to the info window. 
                var location = result.hasOwnProperty('location') ? result.location : '';
                if (location.hasOwnProperty('address')) {
                    bartItem.address(location.address || '');
                }
   
               //photo response
			   //declare prefix and suffix properties
                //https://developer.foursquare.com/docs/responses/photo
                var bestPhoto = result.hasOwnProperty('bestPhoto') ? result.bestPhoto : '';
                if (bestPhoto.hasOwnProperty('prefix')) {
                    bartItem.photoPrefix(bestPhoto.prefix || '');
                }

                if (bestPhoto.hasOwnProperty('suffix')) {
                    bartItem.photoSuffix(bestPhoto.suffix || '');
                }
                
				// This is all of the contents for each infowindow
                var contentString = '<div ><h4>' +bartItem.name() +'</h4><div >' +
                (
                 bartItem.photoPrefix() ?
                '<img src="' +
                bartItem.photoPrefix() +
                '170x120' +
                bartItem.photoSuffix() +
                '" alt=" pretty responsive Location Image">' : ''
                ) +
                '</div><hr><p>Address:' + bartItem.address() + ', San Francisco</p>';


                    google.maps.event.addListener(bartItem.marker, 'click', function () {
                     infowindow.open(map, this);

                   // Bounce Animation for each marker

                    bartItem.marker.setAnimation(google.maps.Animation.BOUNCE);
                     setTimeout(function () {
                        bartItem.marker.setAnimation(null);
                    }, 500);
                    infowindow.setContent(contentString);
                 map.setCenter(bartItem.marker.getPosition());
                 });

			},
			// error function ,if there is any error in object contentString which coming from Foursquare API
            error: function (e) {
                document.getElementById("error-view").innerHTML = "<h4>Sorry, No data from FourSquare, please Check with your administrator</h4>";
            }
				});
 
// open info window for each marker
    self.showInfo = function (bartItem) {
        google.maps.event.trigger(bartItem.marker, 'click');
        self.hideElements();
    };

    // toggling  info window
    self.toggleNav = ko.observable(false);
    this.navStatus = ko.pureComputed (function () {
        return self.toggleNav() === false ? 'nav' : 'navClosed';
        }, this);

 // binding blocking marker clicks
 //  https://discussions.udacity.com/t/click-binding-blocking-marker-clicks/35398/2
    self.hideElements = function (toggleNav) {
        self.toggleNav(true);
        return true;
    };

    self.showElements = function (toggleNav) {
        self.toggleNav(false);
        return true;
    };


// 8. Observable Array for all Locations
		self.locations = ko.observableArray();
		// push all the barts data  into locations
		self.bartItems().forEach(function(bartItem) {
			self.locations.push(bartItem);
		});

// 9. when user enter data ,Visible Observable Array marker 
		self.visible = ko.observableArray();
		// All markers are visible by default
		self.locations().forEach(function(bartItem) {
			self.visible.push(bartItem);
		});
// 10.all markers appears  when the user clicks on the hardcoded list
		self.showMarker = function(bartItem) {
			google.maps.event.trigger(bartItem.marker, 'click');
		};
	// 11. search observable input field
		self.search = ko.observable('');

	// 12. Filtering the restarant locations
		self.filter = function() {
			filter = self.search().toLowerCase();
			//close current infowindows 
			infowindow.close();
			self.visible.removeAll();
			self.locations().forEach(function(bartItem) {
				bartItem.marker.setVisible(false);
				// If user input matches the available data,then  set marker as visible
				if (bartItem.name().toLowerCase().indexOf(filter) !== -1) {
					self.visible.push(bartItem);
				}
			});
			//visible  the martker for show the matched barts as 
			self.visible().forEach(function(bartItem) {
				bartItem.marker.setVisible(true);
			});
		}; //end of filter 
	}); //end of locations
}; // end of VM 




