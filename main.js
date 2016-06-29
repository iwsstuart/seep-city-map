$(document).ready(function() {

	mapboxgl.accessToken = 'pk.eyJ1IjoiaXdzc3R1YXJ0IiwiYSI6InNaNzMzVXMifQ.OFDL1zM5OjRUHcL_Y5htCA';
	var map = new mapboxgl.Map({
	    container: 'map', // container id
	    style: 'mapbox://styles/iwsstuart/cihwgul0a00kb95lyu8x6dn1q', //stylesheet location
	    minZoom: 10.5,
		center: [-122.465, 37.755], // starting position
    	zoom: 11.48 // starting zoom
	    // maxBounds: [[-122.618025, 37.660094],[-122.283068, 37.857349]]
	});


	map.on('style.load', function() {
		// map.addSource("1857_shore", {
		//   "type": "geojson",
		//   "data": '1857.geojson'
		// });
		// map.addSource("springs", {
		//   "type": "geojson",
		//   "data": 'springs.geojson'
		// });

		// map.addSource("contours", {
		//   "type": "geojson",
		//   "data": 'contours.geojson'
		// });
		// map.addLayer({
		//   "id": "contours",
		//   "type": "line",
		//   "source": "contours",
		//   "layout": {
		//       "line-join": "round",
		//       "line-cap": "round"
		//   },
		//   "paint": {
		//       "line-color": "#ad4a36",
		//       "line-opacity": 0.5,
		//       "line-width": {
		//       	"base": 1,
		//     		"stops": [[11, 0], [18, 1.5]]
		//       }
		//   }
		// }, 'mapbox-iwsstuart-44ys0zp4');

		map.addSource("contours-simple", {
			"type": "geojson",
			"data": 'contours_simple.geojson'
		});
		map.addLayer({
			"id": "contours-simple",
			"type": "line",
			"source": "contours-simple",
			"layout": {
			    "line-join": "round",
			    "line-cap": "round"
			},
			"paint": {
			    "line-color": "#ad4a36",
			    "line-opacity": {
			    	"base": 0.5,
			  		"stops": [[10, 0.15], [12, 0.25], [14, 0.5]]
			    },
			    "line-width": {
			    	"base": 1,
			  		"stops": [[10, 0.1], [13.9, 0.2], [14, 0]]
			    }
			}
		});

		// map.addSource("marsh-now", {
		// 	"type": "vector",
		// 	"url": "mapbox://iwsstuart.0nxfqu5j"
		// });
		// map.addLayer({
		// 	"id": "marsh-now",
		// 	"type": "fill",
		// 	"source": "marsh-now",
		// 	"paint": {
		// 	    "fill-color": "#5a976c"
		// 	    // "line-opacity": {
		// 	    // 	"base": 0.5,
		// 	  		// "stops": [[10, 0.2], [14, 0.6]]
		// 	    // },
		// 	    // "line-width": {
		// 	    // 	"base": 1,
		// 	  		// "stops": [[10, 0.1], [13.9, 0.2], [14, 0]]
		// 	    // }
		// 	}
		// }, 'iwsstuart.4p4x2agq');


		// map.setPaintProperty('background', 'background-color', '#666', 'grayscale');
		// map.setPaintProperty('contours_simple', 'line-color', '#999', 'grayscale');
		// map.setPaintProperty('phys-contours-wgs', 'line-color', '#999', 'grayscale');
		// map.setPaintProperty('sf-water-coastline-buffer6', 'fill-opacity', 0, 'grayscale');
		// map.setPaintProperty('sf-water-coastline-buffer5', 'fill-opacity', 0, 'grayscale');
		// map.setPaintProperty('sf-water-coastline', 'fill-color', '#888', 'grayscale');
		// map.setPaintProperty('sf-water-coastline-outline', 'line-color', '#999', 'grayscale');
		// map.setPaintProperty('hillshade_shadow_med', 'fill-color', '#333', 'grayscale');
		// map.setPaintProperty('hillshade_shadow_faint', 'fill-color', '#555', 'grayscale');
		// map.setPaintProperty('hillshade_shadow_med', 'fill-color', '#333', 'grayscale');
		// map.setPaintProperty('hillshade_shadow_med', 'fill-color', '#333', 'grayscale');
		// map.setPaintProperty('hillshade_highlight_med', 'fill-color', '#aaa', 'grayscale');
		// map.setPaintProperty('hillshade_highlight_bright', 'fill-color', '#ccc', 'grayscale');
		// map.setPaintProperty('road-rail-tracks', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-rail', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-motorway', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-trunk', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-main', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-street_limited', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-motorway_link', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-service-driveway', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-street-low-zoom', 'line-color', '#777', 'grayscale');
		// map.setPaintProperty('road-path', 'line-color', '#777', 'grayscale');
	});


	function layersOn() {
		if (layerId == "streets") {
			map.setLayoutProperty('road-rail-tracks', 'visibility', 'visible');
			map.setLayoutProperty('road-rail', 'visibility', 'visible');
			map.setLayoutProperty('road-motorway', 'visibility', 'visible');
			map.setLayoutProperty('road-trunk', 'visibility', 'visible');
			map.setLayoutProperty('road-main', 'visibility', 'visible');
			map.setLayoutProperty('road-street_limited', 'visibility', 'visible');
			map.setLayoutProperty('road-motorway_link', 'visibility', 'visible');
			map.setLayoutProperty('road-service-driveway', 'visibility', 'visible');
			map.setLayoutProperty('road-street-low-zoom', 'visibility', 'visible');
			map.setLayoutProperty('road-path', 'visibility', 'visible');
			map.setLayoutProperty('bridge-motorway', 'visibility', 'visible');
			map.setLayoutProperty('bridge-main', 'visibility', 'visible');
			map.setLayoutProperty('bridge-motorway_link', 'visibility', 'visible');
			map.setLayoutProperty('bridge-rail-tracks', 'visibility', 'visible');
		}
		if (layerId == "todays-natural-water") {
			map.setLayoutProperty('springs', 'visibility', 'visible');
			map.setLayoutProperty('natural-freshwater', 'visibility', 'visible');
			map.setLayoutProperty('natural-freshwater-stroke', 'visibility', 'visible');
		}
		if (layerId == "fresh-water-past") {
			map.setLayoutProperty('fresh-water-past', 'visibility', 'visible');
		}				
		if (layerId == "sloughs") {
			map.setLayoutProperty('tidal-sloughs', 'visibility', 'visible');
			map.setLayoutProperty('marsh-past', 'visibility', 'visible');
		}
		if (layerId == "reservoirs-past") {
			map.setLayoutProperty('reservoirs-past', 'visibility', 'visible');
			map.setLayoutProperty('reservoirs-past-stroke', 'visibility', 'visible');
		}	
		if (layerId == "contours") {
			map.setLayoutProperty('contours-simple', 'visibility', 'visible');
			map.setLayoutProperty('contours', 'visibility', 'visible');
		}
		if (layerId == "developed-freshwater") {
			map.setLayoutProperty('developed-freshwater', 'visibility', 'visible');
			map.setLayoutProperty('developed-freshwater-stroke', 'visibility', 'visible');
		}
		if (layerId == "reservoirs") {
			map.setLayoutProperty('reservoirs-tanks-treatment', 'visibility', 'visible');
			map.setLayoutProperty('reservoirs-tanks-treatment-stroke', 'visibility', 'visible');
		}
	}

	function layersOff() {
		if (layerId == "streets") {
			map.setLayoutProperty('road-rail-tracks', 'visibility', 'none');
			map.setLayoutProperty('road-rail', 'visibility', 'none');
			map.setLayoutProperty('road-motorway', 'visibility', 'none');
			map.setLayoutProperty('road-trunk', 'visibility', 'none');
			map.setLayoutProperty('road-main', 'visibility', 'none');
			map.setLayoutProperty('road-street_limited', 'visibility', 'none');
			map.setLayoutProperty('road-motorway_link', 'visibility', 'none');
			map.setLayoutProperty('road-service-driveway', 'visibility', 'none');
			map.setLayoutProperty('road-street-low-zoom', 'visibility', 'none');
			map.setLayoutProperty('road-path', 'visibility', 'none');
			map.setLayoutProperty('bridge-motorway', 'visibility', 'none');
			map.setLayoutProperty('bridge-main', 'visibility', 'none');
			map.setLayoutProperty('bridge-motorway_link', 'visibility', 'none');
			map.setLayoutProperty('bridge-rail-tracks', 'visibility', 'none');
		}
		if (layerId == "todays-natural-water") {
			map.setLayoutProperty('springs', 'visibility', 'none');
			map.setLayoutProperty('natural-freshwater', 'visibility', 'none');
			map.setLayoutProperty('natural-freshwater-stroke', 'visibility', 'none');
		}
		if (layerId == "fresh-water-past") {
			map.setLayoutProperty('fresh-water-past', 'visibility', 'none');
		}
		if (layerId == "sloughs") {
			map.setLayoutProperty('tidal-sloughs', 'visibility', 'none');
			map.setLayoutProperty('marsh-past', 'visibility', 'none');
		}
		if (layerId == "reservoirs-past") {
			map.setLayoutProperty('reservoirs-past', 'visibility', 'none');
			map.setLayoutProperty('reservoirs-past-stroke', 'visibility', 'none');
		}
		if (layerId == "contours") {
			map.setLayoutProperty('contours-simple', 'visibility', 'none');
			map.setLayoutProperty('contours', 'visibility', 'none');
		}
		if (layerId == "developed-freshwater") {
			map.setLayoutProperty('developed-freshwater', 'visibility', 'none');
			map.setLayoutProperty('developed-freshwater-stroke', 'visibility', 'none');
		}
		if (layerId == "reservoirs") {
			map.setLayoutProperty('reservoirs-tanks-treatment', 'visibility', 'none');
			map.setLayoutProperty('reservoirs-tanks-treatment-stroke', 'visibility', 'none');
		}
	}

	$('#highlights #original-shore').click(function() {
		if ($(this).hasClass('on')) {
			map.removeClass('grayscale');
			map.setPaintProperty('sf-water-coastline-buffer6', 'fill-opacity', 1);
			map.setPaintProperty('sf-water-coastline-buffer5', 'fill-opacity', 1);
			map.setPaintProperty('phys-waterbodies', 'fill-outline-color', '#bcbcc5');
			$(this).toggleClass('on');
			$('#tidal-water span').toggleClass('fa-circle-thin');	
		} else {
			map.addClass('grayscale');
			$(this).toggleClass('on');
			$('#tidal-water span').toggleClass('fa-circle-thin');			
		}
	});

	$('#labels').click(function() {
		if ($(this).hasClass('on')) {
			map.setLayoutProperty('place_label_city_large_n', 'visibility', 'none');
			map.setLayoutProperty('place_label_neighborhood', 'visibility', 'none');
			map.setLayoutProperty('road-label-large', 'visibility', 'none');
			map.setLayoutProperty('road-label-med', 'visibility', 'none');
			map.setLayoutProperty('road-label-sm', 'visibility', 'none');
		} else {
			map.setLayoutProperty('place_label_city_large_n', 'visibility', 'visible');
			map.setLayoutProperty('place_label_neighborhood', 'visibility', 'visible');			
			map.setLayoutProperty('road-label-large', 'visibility', 'visible');
			map.setLayoutProperty('road-label-med', 'visibility', 'visible');
			map.setLayoutProperty('road-label-sm', 'visibility', 'visible');
		}
	});


	map.on('mousemove', function (e) {
		if (map.hasClass('grayscale')) {
		    map.featuresAt(e.point, {layer: 'phys-waterbodies', radius: 5}, function (err, features) {
		        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
		    });
		}
	});		

	map.on('click', function (e) {
		if (map.hasClass('grayscale')) {
			map.featuresAt(e.point, {radius: 5, layer: 'phys-waterbodies'}, function (err, features) {
		        if (err) throw err;
		        console.log(features);
		    	var tooltip = new mapboxgl.Popup({closeButton:false})
			        .setLngLat(e.lngLat)
			        .setHTML('<h6 id="tooltip">' + features[0].properties.BODY_TYPE + '</h6>'
			        	+ '<h5>' + features[0].properties.BODY_NAME + '</h5>')
			        .addTo(map);
		    });
		}
	});

	$('.header').click(function() {
		var group = $(this).parent();
		group.children('ul').toggle();
		group.children('.header').children('span').toggleClass('glyphicon-triangle-right');	
		group.children('.header').children('span').toggleClass('glyphicon-triangle-bottom');	
	});

	var groupId, layerId, controlId;

	// var layerGroups = {
	// 	"lakes-creeks-marshes": [ "natural-freshwater", "natural-freshwater-stroke", "marsh-now" ]
	// };

	$('.list-group .list-group-item.layer').click(function() {
		layerId = $(this).attr('id');
		groupId = $(this).attr('id');
		if ($(this).hasClass('on')) {
			$(this).toggleClass('on');
			layersOff();	
			if ($(this).hasClass('comparison')) {
				map.setLayoutProperty(layerId, 'visibility', 'none');
				var startOpacity = map.getPaintProperty(layerId, 'raster-opacity').toFixed(2);
				startLeft = startOpacity * sliderWidth;
				controlId = "#" + layerId + "-opacity";
				$(controlId).toggleClass('active');	
			}		
		} else {
			$(this).toggleClass('on');
			layersOn();	
			if ($(this).hasClass('comparison')) {
				map.setLayoutProperty(layerId, 'visibility', 'visible');
				controlId = "#" + layerId + "-opacity";
				var startOpacity = map.getPaintProperty(layerId, 'raster-opacity').toFixed(2);
				startLeft = startOpacity * sliderWidth;
				$(controlId).toggleClass('active');
				$(controlId + ' .handle').css('left', startLeft + 'px');
				$(controlId + ' .num-text').html(startOpacity);	
			}
		}		
	});

	var handle, start = false, startLeft;
	var sliderWidth = $('.opacity-bar').width(), handleWidth = $('.handle').width();
	var opacityText;

	$('.items li.control').mouseover(function() {
		layerId = $(this).attr('id').replace('-opacity', '');
		$(this).toggleClass('current');
	});
	$('.items li.control').mouseout(function() {
		$(this).toggleClass('current');
	});

	document.onmousemove = function(e) {
		if (!start) return;
	    // Adjust control.
	    handle.style.left = Math.max(0, Math.min(sliderWidth - 4, startLeft + parseInt(e.clientX, 10) - start)) + 'px';
	    // Adjust opacity.
		map.setPaintProperty(layerId, 'raster-opacity', handle.offsetLeft / (sliderWidth - 4));
		var opacityVal = parseFloat(map.getPaintProperty(layerId, 'raster-opacity')).toFixed(2);
		if (opacityVal == 1 || opacityVal == 0) { 
			opacityVal = parseInt(opacityVal); 
		}
		$(opacityText).html(opacityVal);
	};

	$('.handle').mousedown(function(e) {
		handle = this;
		opacityText = $('.current p');
		// console.log($(this).parents('.list-group-item'));
		start = parseInt(e.clientX, 10);
		startLeft = this.offsetLeft;
		// layerId = $(this).parents('.list-group-item').attr('id').replace('-opacity','');	
	});

	document.onmouseup = function(e) {
	    start = null;
	};

	$('[data-toggle="tooltip"]').tooltip({ placement: 'right', container: 'body' });
	$('[data-toggle="tooltip"]').hover(function() {
		$('.tooltip').css('margin-left','15px');
	});

});