"use client";

import { useState } from "react";
import Head from "next/head";
import { Search,Home, FileText, BarChart2,Settings } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavBar from "./navBar";

export default function CreateJobDescription() {
  return (
    <>
          {/* Risk Factors */}
          <div className="mb-6">
  <h2 className="text-lg">Risk Factors</h2>
  <div className="grid grid-cols-2 gap-4 mt-2 text-[13px] px-5 py-5 rounded-xl bg-gray-200">
    
    <div>
      <span className="text-blue-700">Flood Risk: High</span>
      <div className="overflow-hidden">
        <div className="h-1 bg-red-600 mt-1 w-full max-w-[280px]"></div> {/* Adjust max width */}
      </div>
    </div>

    <div>
      <span className="text-blue-700">Earthquake Risk: Medium</span>
      <div className="overflow-hidden">
        <div className="h-1 bg-yellow-600 mt-1 w-full max-w-[250px]"></div> {/* Adjust max width */}
      </div>
    </div>

    <div>
      <span className="text-blue-700">Drought Risk: Low</span>
      <div className="overflow-hidden">
        <div className="h-1 bg-blue-600 mt-1 w-full max-w-[100px]"></div> {/* Adjust max width */}
      </div>
    </div>

    <div>
      <span className="text-blue-700">Accessibility: 9/10</span>
      <div className="overflow-hidden">
        <div className="h-1 bg-red-600 mt-1 w-full max-w-[200px]"></div> {/* Adjust max width */}
      </div>
    </div>

  </div>
</div>


            {/* Job Title */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-1">Enter Job Title</label>
              <input type="text" className="w-full border rounded-lg p-2 pl-4 placeholder:text-sm"  placeholder="Charlene Reed" />
            </div>

            {/* Response Time */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-1" >Response Time Requirement</label>
              <select className="w-full border text-sm rounded-lg p-3 pl-4 text-gray-400 bg-white">
  <option selected defaultValue="15">Within 15 mins</option>
  <option>Within 30 mins</option>
  <option>Within 1 hour</option>
  <option>More than 1 hour</option>
</select>

            </div>

            {/* Local Consideration */}
            <div className="mb-6 rounded-lg">
            <h2 className="text-lg">Risk Factors</h2>
            <div className="bg-gray-100 p-5">
              <h3 className="text-sm text-gray-500 mb-2">Local Languages</h3>
              <div className="flex gap-2 mb-2">
                <span className="bg-blue-300 text-blue-800 text-xs px-5 py-2 rounded-full">English</span>
                <span className="bg-blue-300 text-blue-800 text-xs px-5 py-2 rounded-full">Marathi</span>
                <span className="bg-blue-300 text-blue-800 text-xs px-5 py-2 rounded-full">Hindi</span>
                </div>
                <div className="mb-2">

              <p className="text-sm text-gray-500">Weather Conditions: </p>
              <span className="text-xs text-gray-400">Coastal climate, Heavy rainfall</span>
                </div>
                <div className="mb-2">
              <p className="text-sm text-gray-500">Terrain Type: </p>
              <span className="text-xs text-gray-400">Coastal, Urban</span>
              </div>
              </div>
            </div>

            {/* Recommended Skills */}
            <div className="mb-6">
              <h3 className="text-lg mb-2">Recommended Skills Based on Location</h3>
              <div className="flex flex-wrap gap-2 pl-3">
                <span className="bg-yellow-100 text-green-800 text-xs px-3 py-2 rounded-full">Flood Response</span>
                <span className="bg-yellow-100 text-green-800 text-xs px-3 py-2 rounded-full">Water Rescue</span>
                <span className="bg-yellow-100 text-green-800 text-xs px-3 py-2 rounded-full">Structural Assessment</span>
                <span className="bg-yellow-100 text-green-800 text-xs px-3 py-2 rounded-full">Search and Rescue</span>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="mb-6">
              <label className="block text-lg mb-1">Additional Requirements</label>
              <textarea className="w-full border rounded-xl p-3 placeholder:text-sm"  placeholder="Enter any additional job description..."></textarea>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">

            <button className="w-36 bg-purple-700 text-white py-2 rounded-xl">Save</button>
            </div>    
    </>
  )
};