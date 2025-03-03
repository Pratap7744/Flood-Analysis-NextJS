"use client";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import Sidebar from "./Sidebar";
// import NavBar from "./navBar";

export default function MaharashtraDistrictsGrid() {
  const [topoData, setTopoData] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch("/topology.json")
      .then((res) => res.json())
      .then((data) => setTopoData(data))
      .catch((err) => console.error("Failed to load TopoJSON", err));
  }, []);

  // List of Maharashtra districts with custom configuration for each
  const districtsConfig = {
    "Mumbai": { scale: 30000, center: [72.85, 18.95], translateX: 0, translateY: 0, zoom: 1.2 },
    "Pune": { scale: 4400, center: [74.37, 18.64], translateX: 0, translateY: 0, zoom: 1 },
    "Nagpur": { scale: 5500, center: [79.08, 21.15], translateX: 0, translateY: 0, zoom: 1 },
    "Thane": { scale: 7600, center: [73.26, 19.40], translateX: 0, translateY: 0, zoom: 1 },
    "Nashik": { scale: 4500, center: [74.05, 20.30], translateX: 0, translateY: 0, zoom: 1 },
    "Aurangabad": { scale: 5000, center: [75.34, 19.99], translateX: 0, translateY: 0, zoom: 1 },
    "Solapur": { scale: 4600, center: [75.59, 17.77], translateX: 0, translateY: 0, zoom: 1 },
    "Amravati": { scale: 4500, center: [77.62, 21.19], translateX: 0, translateY: 0, zoom: 1 },
    "Kolhapur": { scale: 5200, center: [74.23, 16.4], translateX: 0, translateY: 0, zoom: 1 },
    "Jalgaon": { scale: 4900, center: [75.57, 20.95], translateX: 0, translateY: 0, zoom: 1 },
    "Akola": { scale: 7000, center: [77.1, 20.80], translateX: 0, translateY: 0, zoom: 1 },
    "Satara": { scale: 6100, center: [74.2, 17.7], translateX: 0, translateY: 0, zoom: 1 },
    "Latur": { scale: 7500, center: [76.78, 18.4], translateX: 0, translateY: 0, zoom: 1 },
    "Dhule": { scale: 6500, center: [74.55, 21.13], translateX: 0, translateY: 0, zoom: 1 },
    "Ahmadnagar": { scale: 4500, center: [74.6, 19.14], translateX: 0, translateY: 0, zoom: 1 },
    "Chandrapur": { scale: 6000, center: [79.4, 20.10], translateX: 0, translateY: 0, zoom: 1 },
    // "Parbhani": { scale: 12000, center: [76.77, 19.27], translateX: 0, translateY: 0, zoom: 1 },
    // "Jalna": { scale: 12000, center: [75.88, 19.84], translateX: 0, translateY: 0, zoom: 1 },
    // "Yavatmal": { scale: 8000, center: [78.12, 20.39], translateX: 0, translateY: 0, zoom: 1 },
    // "Nanded": { scale: 8000, center: [77.3, 19.15], translateX: 0, translateY: 0, zoom: 1 },
    // "Sangli": { scale: 9000, center: [74.57, 16.86], translateX: 0, translateY: 0, zoom: 1 },
    // "Washim": { scale: 12000, center: [77.14, 20.1], translateX: 0, translateY: 0, zoom: 1 },
    // "Beed": { scale: 10000, center: [75.76, 18.99], translateX: 0, translateY: 0, zoom: 1 },
    // "Buldhana": { scale: 10000, center: [76.18, 20.53], translateX: 0, translateY: 0, zoom: 1 },
    // "Ratnagiri": { scale: 8000, center: [73.3, 17.0], translateX: 0, translateY: 0, zoom: 1 },
    // "Osmanabad": { scale: 12000, center: [76.04, 18.18], translateX: 0, translateY: 0, zoom: 1 },
    // "Nandurbar": { scale: 10000, center: [74.0, 21.7], translateX: 0, translateY: 0, zoom: 1 },
    // "Wardha": { scale: 12000, center: [78.6, 20.75], translateX: 0, translateY: 0, zoom: 1 },
    // "Bhandara": { scale: 12000, center: [79.65, 21.17], translateX: 0, translateY: 0, zoom: 1 },
    // "Gondia": { scale: 12000, center: [80.2, 21.46], translateX: 0, translateY: 0, zoom: 1 },
    // "Gadchiroli": { scale: 6000, center: [80.0, 20.1], translateX: 0, translateY: 0, zoom: 1 },
    // "Sindhudurg": { scale: 10000, center: [73.71, 16.0], translateX: 0, translateY: 0, zoom: 1 },
    // "Raigad": { scale: 9000, center: [73.12, 18.5], translateX: 0, translateY: 0, zoom: 1 },
    // "Hingoli": { scale: 15000, center: [77.11, 19.72], translateX: 0, translateY: 0, zoom: 1 },
    // "Palghar": { scale: 10000, center: [72.9, 19.7], translateX: 0, translateY: 0, zoom: 1 },
    // "Gondiya": { scale: 12000, center: [80.2, 21.46], translateX: 0, translateY: 0, zoom: 1 }
  };

  // Get list of districts from the config
  const districts = Object.keys(districtsConfig);

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    // You can navigate to the district page here
    console.log(`Selected district: ${district}`);
  };

  return (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {districts.map((district) => {
                // Get custom configuration for this district
                const config = districtsConfig[district];
                
                return (
                  <div 
                    key={district}
                    className="flex flex-col items-center border rounded-lg p-2 hover:shadow-lg cursor-pointer transition-all hover:border-blue-500"
                    onClick={() => handleDistrictClick(district)}
                  >
                    <div className="rounded-md flex items-center justify-center overflow-hidden">
                      {topoData ? (
                        <div 
                          className="w-full max-h-40 h-full relative" 
                          style={{ 
                            transform: `scale(${config.zoom})`,
                            backgroundColor:"transparent" 
                          }}
                        >
                          <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{ 
                              scale: config.scale,
                              center: config.center
                            }}
                            width={160}
                            height={160}
                            style={{
                              width: "100%",
                              height: "100%",
                              transform: `translate(${config.translateX}px, ${config.translateY}px)`
                            }}
                          >
                            <Geographies geography={topoData}>
                              {({ geographies }) =>
                                geographies.map((geo) => {
                                  const isCurrentDistrict = geo.properties.district === district;
                                  
                                  // Only render the current district
                                  return isCurrentDistrict ? (
                                    <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="transparent"  // No fill, only border
                                    stroke="black"    // Border color
                                    strokeWidth={1}     // Adjust border thickness
                                    style={{
                                      default: { stroke: "black", outline: "none" },
                                      hover: { stroke: "black", strokeWidth: 1.5, outline: "none" },
                                    }}
                                  />
                                  ) : null;
                                })
                              }
                            </Geographies>
                          </ComposableMap>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-sm text-gray-500">Loading...</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-center">
  <h3 className="font-medium text-gray-900">{district}</h3>
  <p className="text-base text-gray-500">
    {config.center[1].toFixed(2)},{config.center[0].toFixed(2)}
  </p>
</div>
                  </div>
                );
              })}
            </div>
        
     
  );
}