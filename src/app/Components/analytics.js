"use client"
import { useState } from 'react';
import Head from 'next/head';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar';
import NavBar from './navBar';
export default function Analytics() {
  // Mock data for charts
  const currentStaffingData = [
    { year: '2016', value: 5000 },
    { year: '2017', value: 22000 },
    { year: '2018', value: 18000 },
    { year: '2019', value: 35000 },
    { year: '2020', value: 20000 },
    { year: '2021', value: 28000 },
  ];

  const predictedStaffingData = [
    { year: '2016', value: 6000 },
    { year: '2017', value: 12000 },
    { year: '2018', value: 22000 },
    { year: '2019', value: 26000 },
    { year: '2020', value: 20000 },
    { year: '2021', value: 32000 },
  ];

  const regionalData = [
    { index: 1, region: "North", risk: 4000, readiness: 2400 },
    { index: 2, region: "South", risk: 3000, readiness: 1398 },
    { index: 3, region: "East", risk: 2000, readiness: 9800 },
    { index: 4, region: "West", risk: 2780, readiness: 3908 }
  ];

  return (
   
    <div className="flex h-screen bg-gray-50">
    {/* Sidebar */}
    <Sidebar />
  
    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-auto">
      <NavBar />
  
      <main className="flex-1 overflow-auto bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto ">
  
          {/* Current Metrics and Predictive Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8 px-10">
            {/* Current Metrics */}
              <h2 className="text-xl text-gray-700 font-medium">Current Metrics</h2>
            <div className="bg-white rounded-lg shadow-sm p-10 border-2 border-gray-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <p className="text-blue-600 text-3xl font-bold">92%</p>
                  <p className="text-gray-600 text-sm">Local Hire Success Rate</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-green-600 text-3xl font-bold">30 min</p>
                  <p className="text-gray-600 text-sm">Avg Response Time</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-yellow-500 text-3xl font-bold">850+</p>
                  <p className="text-gray-600 text-sm">Active Personnel</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-purple-600 text-3xl font-bold">95%</p>
                  <p className="text-gray-600 text-sm">Task Completion Rate</p>
                </div>
              </div>
            </div>

            
            {/* Predictive Insights */}
              <h2 className="text-xl text-gray-700 font-medium">Predictive Insights</h2>
            <div className="bg-white rounded-lg shadow-sm p-10 border-2 border-gray-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <p className="text-red-500 text-3xl font-bold">+25%</p>
                  <p className="text-gray-600 text-sm">Predicted Staff Need (Next 3 Months)</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-orange-500 text-3xl font-bold">85%</p>
                  <p className="text-gray-600 text-sm">Disaster Risk Level</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-indigo-600 text-3xl font-bold">12</p>
                  <p className="text-gray-600 text-sm">High-Risk Areas Identified</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-teal-500 text-3xl font-bold">93%</p>
                  <p className="text-gray-600 text-sm">Predicted Resource Readiness</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Charts Section */}
          <div className='flex justify-center'>
          <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-6xl">
                <div>
                  <h2 className="text-center text-xl text-gray-700 font-medium mb-4">Current Staffing</h2>
                  <div className="bg-white rounded-lg shadow-sm p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={currentStaffingData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div>
                  <h2 className="text-center text-xl text-gray-700 font-medium mb-4">6 Month Staffing Prediction</h2>
                  <div className="bg-white rounded-lg shadow-sm p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={predictedStaffingData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div></div>

              <div className="flex justify-center">
                <div className="text-center w-full max-w-3xl">
                  <h2 className="text-xl text-gray-700 font-medium mb-4">Regional Risk vs Readiness</h2>
                  <div className="bg-white rounded-lg shadow-sm p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={regionalData} barSize={40}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Bar dataKey="risk" fill="#2563EB" />
                        <Bar dataKey="readiness" fill="#F59E0B" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              </div>
      </main>
    </div>
  </div>
  
  );
}