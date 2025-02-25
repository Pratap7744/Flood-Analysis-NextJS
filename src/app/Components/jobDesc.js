'use client';

import { useState } from "react";
import Head from "next/head";
import { Search, Home, FileText, BarChart2, Settings } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavBar from "./navBar";
import CreateJobDescription from "./createJobDescription";
import SelectLocation from "./selectLocation";

export default function JobDescription() {
  const [selectedTab, setSelectedTab] = useState("select-location");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl px-10 py-5 shadow-md">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              <button
                className={`px-4 py-2 text-sm mr-8 ${selectedTab === "select-location" ? "text-blue-700 font-semibold border-b-2 border-blue-700" : "text-gray-500"}`}
                onClick={() => setSelectedTab("select-location")}
              >
                Select Location
              </button>
              <button
                className={`px-4 py-2 text-sm ${selectedTab === "create-job" ? "text-blue-700 font-semibold border-b-2 border-blue-700" : "text-gray-500"}`}
                onClick={() => setSelectedTab("create-job")}
              >
                Create Job Description
              </button>
            </div>
            {/* Conditional Rendering */}
            {selectedTab === "select-location" ? <SelectLocation /> : <CreateJobDescription />}
          </div>
        </main>
      </div>
    </div>
  );
}
