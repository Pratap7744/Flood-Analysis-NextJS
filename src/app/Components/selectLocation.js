"use client";

import { useState } from 'react';
import Head from 'next/head';
export default function SelectLocation() {

    const [activeTab, setActiveTab] = useState('Select Location');
  
  // Location data with coordinates and map outlines
  const locations = [
    { name: 'Mumbai', state: 'Maharashtra', coordinates: '19.0760, 72.8777' },
    { name: 'Washim', state: 'Maharashtra', coordinates: '19.0760, 72.8777' },
    { name: 'Satara', state: 'Maharashtra', coordinates: '19.0760, 72.8777' },
    { name: 'New Delhi', state: 'Delhi', coordinates: '19.0760, 72.8777' },
    { name: 'Sangli', state: 'Maharashtra', coordinates: '19.0760, 72.8777' },
    { name: 'Kolhapur', state: 'Maharashtra', coordinates: '19.0760, 72.8777' },
    { name: 'Satara', state: 'Maharashtra', coordinates: '19.0760, 72.8777' }, // Duplicate for UI matching
    { name: 'New Delhi', state: 'Delhi', coordinates: '19.0760, 72.8777' }     // Duplicate for UI matching
  ];

  // Helper function to generate random map-like paths for illustration
  const getRandomPath = (seed) => {
    const paths = [
    //   "M20,20 Q40,5 60,20 T100,30 Q95,50 100,70 Q80,95 50,90 Q20,95 10,70 Q5,50 20,20 Z",
    //   "M30,10 Q50,5 70,10 Q95,20 90,50 Q95,80 70,90 Q50,95 30,90 Q5,80 10,50 Q5,20 30,10 Z",
    //   "M40,20 Q60,10 80,30 Q90,50 80,70 Q60,90 40,80 Q20,70 10,50 Q20,30 40,20 Z",
    //   "M20,30 Q40,10 60,10 Q80,15 90,40 Q95,60 80,80 Q60,90 30,80 Q10,60 20,30 Z",
    //   "M30,20 Q60,5 80,20 Q95,40 90,60 Q80,85 50,90 Q20,85 10,60 Q5,40 30,20 Z",
    //   "M25,15 Q45,5 65,15 T95,35 Q90,60 95,80 Q75,95 50,90 Q25,95 15,80 Q10,60 25,15 Z",
    //   "M35,15 Q55,10 75,15 Q90,25 85,55 Q90,85 75,95 Q55,100 35,95 Q10,85 15,55 Q10,25 35,15 Z",
    //   "M45,25 Q65,15 85,35 Q95,55 85,75 Q65,95 45,85 Q25,75 15,55 Q25,35 45,25 Z"
    ];
    
    return paths[seed % paths.length];
  };

  return (
    <div className="grid grid-cols-4 gap-8 mt-8">
                {locations.map((location, index) => (
                  <div key={index} className="border rounded-lg bg-white p-4 flex flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                      {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d={getRandomPath(index)} 
                          fill="none" 
                          stroke="#000" 
                          strokeWidth="1"
                        />
                      </svg> */}
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 mb-1">{location.name}, {location.state}</div>
                      <div className="text-gray-400 text-sm">{location.coordinates}</div>
                    </div>
                  </div>
                ))}
              </div>
  )
};