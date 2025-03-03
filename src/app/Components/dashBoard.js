"use client";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ArrowLeft, Clock, User, X, MapPin } from "lucide-react";
import Sidebar from "./Sidebar";
import NavBar from "./navBar";

export default function MaharashtraMap() {
  const [topoData, setTopoData] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("/topology.json") // Ensure the file is inside the /public folder
      .then((res) => res.json())
      .then((data) => setTopoData(data))
      .catch((err) => console.error("Failed to load TopoJSON", err));
  }, []);

  // Sample Job Data for Districts
  const jobData = {
    Washim: [
      {
        title: "Emergency Response Coordinator",
        urgency: "High",
        skills: ["Disaster Management", "Team Leadership"],
        responseTime: "< 30 mins",
        matches: 8,
      },
      {
        title: "Flood Relief Specialist",
        urgency: "Medium",
        skills: ["Water Management", "First Aid"],
        responseTime: "< 45 mins",
        matches: 5,
      },
    ],
    Satara: [
      {
        title: "Relief Operations Manager",
        urgency: "High",
        skills: ["Logistics", "Rescue Operations"],
        responseTime: "< 20 mins",
        matches: 6,
      },
    ],
    Nagpur: [
      {
        title: "Medical Aid Coordinator",
        urgency: "High",
        skills: ["Emergency Medicine", "Trauma Care"],
        responseTime: "< 25 mins",
        matches: 7,
      },
      {
        title: "Evacuation Planner",
        urgency: "Medium",
        skills: ["Urban Planning", "Crisis Management"],
        responseTime: "< 40 mins",
        matches: 4,
      },
    ],
    Pune: [
      {
        title: "Food & Shelter Coordinator",
        urgency: "High",
        skills: ["Logistics", "Public Welfare"],
        responseTime: "< 30 mins",
        matches: 5,
      },
      {
        title: "Volunteer Supervisor",
        urgency: "Low",
        skills: ["People Management", "Coordination"],
        responseTime: "< 60 mins",
        matches: 6,
      },
    ],
    Mumbai: [
      {
        title: "Rescue Operations Specialist",
        urgency: "High",
        skills: ["Rescue Techniques", "Navigation"],
        responseTime: "< 15 mins",
        matches: 9,
      },
      {
        title: "Emergency Communication Officer",
        urgency: "Medium",
        skills: ["Radio Communication", "Crisis Response"],
        responseTime: "< 35 mins",
        matches: 5,
      },
    ],
  };

  // Sample Matched Candidates Data
  const candidates = {
    "Emergency Response Coordinator": [
      {
        name: "Rajesh Kumar",
        match: "95%",
        location: "Washim",
        skills: ["Disaster Management", "Team Leadership"],
        experience: 5,
        responseTime: "15 mins",
      },
      {
        name: "Amit Verma",
        match: "88%",
        location: "Washim",
        skills: ["Water Management", "First Aid"],
        experience: 4,
        responseTime: "20 mins",
      },
    ],
    "Flood Relief Specialist": [
      {
        name: "Priya Singh",
        match: "90%",
        location: "Washim",
        skills: ["Disaster Management", "Rescue Ops"],
        experience: 3,
        responseTime: "20 mins",
      },
    ],
    "Relief Operations Manager": [
      {
        name: "Sanjay Desai",
        match: "92%",
        location: "Gondiya",
        skills: ["Logistics", "Rescue Operations"],
        experience: 7,
        responseTime: "10 mins",
      },
    ],
    "Medical Aid Coordinator": [
      {
        name: "Dr. Suresh Patil",
        match: "97%",
        location: "Nagpur",
        skills: ["Emergency Medicine", "Trauma Care"],
        experience: 9,
        responseTime: "12 mins",
      },
      {
        name: "Anjali Mehta",
        match: "85%",
        location: "Nagpur",
        skills: ["First Aid", "Medical Assistance"],
        experience: 6,
        responseTime: "18 mins",
      },
    ],
    "Evacuation Planner": [
      {
        name: "Rahul Sharma",
        match: "89%",
        location: "Nagpur",
        skills: ["Urban Planning", "Crisis Management"],
        experience: 5,
        responseTime: "25 mins",
      },
    ],
    "Food & Shelter Coordinator": [
      {
        name: "Sunita Joshi",
        match: "93%",
        location: "Pune",
        skills: ["Logistics", "Public Welfare"],
        experience: 8,
        responseTime: "20 mins",
      },
    ],
    "Volunteer Supervisor": [
      {
        name: "Akash Gupta",
        match: "80%",
        location: "Pune",
        skills: ["People Management", "Coordination"],
        experience: 5,
        responseTime: "30 mins",
      },
    ],
    "Rescue Operations Specialist": [
      {
        name: "Vikram Singh",
        match: "98%",
        location: "Mumbai",
        skills: ["Rescue Techniques", "Navigation"],
        experience: 10,
        responseTime: "10 mins",
      },
      {
        name: "Siddharth Bose",
        match: "88%",
        location: "Mumbai",
        skills: ["Diving", "First Aid"],
        experience: 7,
        responseTime: "15 mins",
      },
    ],
    "Emergency Communication Officer": [
      {
        name: "Niharika Sen",
        match: "91%",
        location: "Mumbai",
        skills: ["Radio Communication", "Crisis Response"],
        experience: 6,
        responseTime: "20 mins",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />

        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl px-2 py-5">
            {/* Breadcrumb */}
            <div className="mb-6">
              <button
                onClick={() => setSelectedDistrict(null)}
                className="inline-flex items-center font-medium"
              >
                <ArrowLeft className="h-5 w-5 mr-4" />
                <span className="font-bold text-blue-700">
                  Disaster Management Positions Map
                </span>
              </button>
            </div>

            {/* Instruction */}
            <div className="text-gray-500 mb-8 pl-8">
              Hover and Click on states to enter Catalogue
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Map Column */}
              <div className="w-full lg:w-2/3 flex justify-center items-center rounded-lg p-1">
                {topoData ? (
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 4000, center: [77, 17] }} // Increased scale
                    width={800} // Increased width
                    height={770} // Increased height
                  >
                    <Geographies geography={topoData}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() =>
                              setSelectedDistrict(geo.properties.district)
                            }
                            className="cursor-pointer transition-all duration-200 hover:fill-blue-500"
                            style={{
                              default: { fill: "transparent", stroke: "#000" },
                              hover: { fill: "#F53", stroke: "#FFF" },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                  </ComposableMap>
                ) : (
                  <p className="text-lg font-semibold text-gray-700">
                    Loading Map...
                  </p>
                )}
              </div>

              {/* Job Panel */}
              <div className="w-full lg:w-[450px] shadow-lg shadow-blue-300 mr-12 rounded-3xl -mt-12">
                <div className="bg-white p-9 rounded-3xl">
                  {/* Display Jobs in Selected District */}
                  {!selectedJob ? (
                    <>
                      {selectedDistrict ? (
                        <>
                          <h2 className="text-base font-semibold mb-6">
                            Jobs in {selectedDistrict}
                          </h2>

                          {jobData[selectedDistrict] &&
                          jobData[selectedDistrict].length > 0 ? (
                            jobData[selectedDistrict].map((job, index) => (
                              <div
                                key={index}
                                className="border-2 border-blue-900 rounded-lg p-3 mb-3 cursor-pointer hover:bg-blue-50 transition"
                                onClick={() => setSelectedJob(job.title)}
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <h5 className="text-sm font-bold">
                                    {job.title}
                                  </h5>
                                  <span
                                    className={`px-3 py-1 rounded text-xs ${
                                      job.urgency === "High"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {job.urgency}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {job.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{job.responseTime}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <User className="h-4 w-4 mr-1" />
                                    <span>{job.matches} matches</span>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500 text-sm">
                              No jobs in {selectedDistrict}.
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-gray-500 text-sm">
                          Click on a district to see available jobs.
                        </p>
                      )}
                    </>
                  ) : (
                    // Show Matched Candidates when a Job is Selected
                    <div className="p-1 -mt-5">
                      <h3 className="text-lg font-bold mb-3">
                        Matched Candidates
                      </h3>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="text-blue-600 text-sm mb-3 flex font-bold"
                      >
                        <X className="mr-2" size={18} />
                        Back to Jobs
                      </button>
                      {candidates[selectedJob]?.length > 0 ? (
                        candidates[selectedJob].map((candidate, index) => (
                          <div
                            key={index}
                            className="border-2 p-3 rounded-lg mb-4 bg-white"
                          >
                            <div className="flex justify-between">
                              <h4 className="text-sm font-semibold mb-2">
                                {candidate.name}
                              </h4>
                              <h4 className="text-sm font-semibold md-1 text-green-600">
                                {candidate.match} Match
                              </h4>
                            </div>
                            <p className="flex text-xs text-gray-600">
                              <MapPin className="mr-2" size={14} />{" "}
                              {candidate.location}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2 mb-2">
                              {candidate.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="bg-green-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="text-xs text-gray-600">
                              <p> Experience: {candidate.experience} years</p>
                              <p> Response time: {candidate.responseTime}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">
                          No candidates found for this job.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
