(function(){
  // Ensure jQuery and jVectorMap are loaded before adding the map
  if (window.jQuery && window.jQuery.fn.vectorMap) {
    console.log("✅ jVectorMap is available, adding Maharashtra map...");

    // Add Maharashtra map data
    jQuery.fn.vectorMap('addMap', 'maharashtra_in', {
      "insets": [{
        "width": 900,
        "height": 800,
        "left": 0,
        "top": 0,
        "bbox": [72.6591, 15.6024, 80.8993, 22.0289]
      }],
      "paths": {
        "MH-Mumbai": {
          "path": "M201.5,537.8l-2.1,1.1l-1.1,3.2l3.2,1.1l1.1-2.1l-1.1-3.2Z",
          "name": "Mumbai City"
        },
        // Add other districts here...
      }
    });

    console.log("✅ Maharashtra map data added successfully!");
  } else {
    console.error("❌ jQuery or jVectorMap is NOT loaded before Maharashtra map!");
  }
})();
