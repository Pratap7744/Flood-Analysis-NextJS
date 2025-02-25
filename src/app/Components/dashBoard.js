// pages/index.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import { ArrowLeft, Clock, User, Home, FileText, BarChart2,Search,Settings } from 'lucide-react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import NavBar from './navBar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 ">  
     <Sidebar/>
     <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar/>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto  bg-white rounded-3xl px-2 py-5">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/dashboard" className="inline-flex items-center  font-medium">
                <ArrowLeft className="h-5 w-5 mr-4" />
                <span className='font-bold text-blue-700'>Disaster Management Positions Map</span>
              </Link>
            </div>

            {/* Instruction text */}
            <div className="text-gray-500 mb-8 pl-9">
              Hover and Click on states to enter Catalogue
            </div>

            {/* Content Columns */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Map Column */}
              <div className="w-full lg:w-2/3">
                {/* Exact India Map SVG like shown in the image */}
                <svg 
                  viewBox="0 0 400 500" 
                  className="w-full h-auto"
                  style={{ maxHeight: "500px" }}
                >
                 
                </svg>
              </div>

              {/* Jobs Panel */}
              
              <div className="w-full lg:w-[450px] shadow-[2px_2px_30px_2px_rgba(0,0,0,0.2)] shadow-blue-300 mr-12 rounded-3xl -mt-12">
                <div className="bg-white p-9 rounded-3xl   ">
                  <h2 className="text-base font-semibold mb-6">Jobs in Washim</h2>

                  {/* Job Card - Emergency Response Coordinator */}
                  <div className="border-2 border-blue-900 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="text-sm font-bold">Emergency Response Coordinator</h5>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded">High</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Disaster Management</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Team Leadership</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>&lt; 30 mins</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>8 matches</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Card - Flood Relief Specialist */}
                  <div className="border-2 border-blue-900 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="text-sm font-bold">Flood Relief Specialist</h5>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded">Medium</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Water Management</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">First Aid</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>&lt; 45 mins</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>5 matches</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        </div>
        </div>
  );
}