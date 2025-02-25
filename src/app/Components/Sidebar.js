"use client";
import { Home, FileText, BarChart2, Gitlab } from "lucide-react"; // Importing Hexagon icon as a logo
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-14 md:w-56 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo at the Top */}
        <div className="p-4 pl-6">
          <Gitlab className="h-8 w-8 text-blue-700" /> {/* Logo Icon */}
        </div>

        {/* Navigation Items */}
        <nav className="pt-4">
          {/* Dashboard - Active */}
          <Link
            href="/"
            className="px-6 py-4 flex items-center text-blue-700 font-medium border-l-4 border-blue-700"
          >
            <Home className="h-5 w-5" />
            <span className="ml-3 hidden md:block">Dashboard</span>
          </Link>

          {/* Job Description */}
          <Link
            href="/job-description"
            className="px-6 py-4 flex items-center text-gray-400 hover:text-blue-700 border-l-4 border-transparent hover:border-blue-700 transition-all"
          >
            <FileText className="h-5 w-5" />
            <span className="ml-3 hidden md:block">Job Description</span>
          </Link>

          {/* Analytics */}
          <Link
            href="/analytics"
            className="px-6 py-4 flex items-center text-gray-400 hover:text-blue-700 border-l-4 border-transparent hover:border-blue-700 transition-all"
          >
            <BarChart2 className="h-5 w-5" />
            <span className="ml-3 hidden md:block">Analytics</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
