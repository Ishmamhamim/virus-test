document.getElementById('a-btn').disabled = 'true';
document.getElementById('a-btn').classList.add("disable");

var form = document.getElementById("chat_form");
// document.getElementById("proceed").addEventListener("click", function () {
//   form.submit();
// });

// var disabled = document.getElementsByClassName('disable');
// for(var i = 0; i < disabled.length; i++) {
//     var d = disabled[i];
//     d.onclick = function() {
//         alert('দয়া করে আপনার লোকেশন দিন');
//     }
// }

var someLatValue = 35.726332;
var desiredRadiusInMeters = 1500;


var style =[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#808080"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];


function initMap(heat = null) {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.820264,  lng: 90.417367},
    zoom: 7,
    mapTypeControl: false,
    fullscreenControl: false,
    styles: style,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // marker show
  /*$.ajax({
    url: 'api_get_location_data.php',
    success:function(data){
      var data = jQuery.parseJSON( data );
      data = data.data;
        // console.log("data");
        // console.log(data[0]);
        //Loop through each location.
        // Sample use of first data
        // centerLat = data[0].latitude;
        // centerLng = data[0].longitude;
        $.each(data, function(){
            var icon = {
              url: "component/markers/"+this.risk+".png", // url
              scaledSize: new google.maps.Size(5, 5), // scaled size
              origin: new google.maps.Point(0,0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
          };
            var theposition = new google.maps.LatLng(this.latitude, this.longitude); 
            var marker = new google.maps.Marker({
                position: theposition,
                map: map,
                icon: icon
            });


          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+this.risk+' Risk</h1>'+
          '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString
          });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
          });
      }
  });*/

 // heat map
  /*$.ajax({
      url: 'api_get_location_data.php',
      success:function(data){
        var data = jQuery.parseJSON( data );
        data = data.data;
        
        map.setCenter(centerLat,centerLng);
        map.setCenter(new google.maps.LatLng(centerLat,centerLng));

  //markersend
  var hmd = [];


  $.each(data, function( index ) {
      if (data[index].latitude && data[index].longitude) {
    
        let weight = 1;
    
        if (data[index].risk == "low") {
            weight = 1;
        } else if (data[index].risk == "mid"){
            weight = 500;
        } else if (data[index].risk == "high"){
            weight = 900;     
        }
    
        let newHeat = {location: new google.maps.LatLng(data[index].latitude, data[index].longitude), weight: weight};
        hmd.push(newHeat);
      }
      
      
    });

    function getHeatmapRadius(zoomLevel){
      metersPerPx = 156543.03392 * Math.cos(someLatValue * Math.PI / 180) / Math.pow(2,map.getZoom());
    
      return (desiredRadiusInMeters / metersPerPx) * 25;
    };

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: hmd,
      
    });

    heatmap.setOptions({radius: getHeatmapRadius(map.getZoom())});
    heatmap.setMap(map);
    var gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(191, 0, 32, 1)'
    ];


    heatmap.set('gradient', gradient);

    google.maps.event.addListener(map, 'zoom_changed', function () {
      heatmap.setOptions({radius: getHeatmapRadius(map.getZoom())});
    });


      }
  });*/


  
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

  var options = {
    componentRestrictions: {country: 'BD'}
    };
  var autocomplete = new google.maps.places.Autocomplete(input, options);


  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var addr_dist = "";
    var addr_div = "";

    for (var j = 0; j < place.address_components.length; j++) {
      var short_name = place.address_components[j].short_name;

      if(short_name.includes("District")) {
        addr_dist = short_name.replace(" District", "");
      }
      if(short_name.includes("Division")) {
        addr_div = short_name.replace(" Division", "");
      }
    }

    var link = "chat.php?city="+place.name+"&lat="+place.geometry.location.lat()+"&lng="+place.geometry.location.lng()+"&addr_dist="+addr_dist+"&addr_div="+addr_div;
      var el = document.getElementById('a-btn');
      el.href = link;
      el.title = '';
      // el.style.visibility = 'visible';

      el.disabled ='false';
      el.classList.remove('disable');

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function() {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);

  document.getElementById('use-strict-bounds')
      .addEventListener('click', function() {
        console.log('Checkbox clicked! New state=' + this.checked);
        autocomplete.setOptions({strictBounds: this.checked});
      });


      if (heat != null){
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heat
        });
        heatmap.setMap(map);
        heatmap.set('radius', 50);
    
        google.maps.event.addListener(map, 'zoom_changed', function () {
          heatmap.set('radius', 50);
      });
    
      // ["#CF1313", "#DB1414", "#E71616", "#F31717", "#FF1919", "#FF5212", "#FF8C0C", "#FFC506", "#FFFF00"]
      var gradient = [
        "rgba(102, 255, 0, 0)", "#FFFF00", "#FFC506", "#FF8C0C", "#FF5212", "#FF1919", "#F31717", "#E71616", "#DB1414", "#CF1313"];
    
      heatmap.set('gradient', gradient);
      }
}