"use client";
import { Search, Settings } from 'lucide-react';

export default function NavBar() {
  return (
    
    
      <header className="bg-white border-b border-gray-200 py-4 px-4 flex items-center justify-end">
        <div className="relative mr-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-3 rounded-full leading-5 placeholder-gray-400 sm:text-sm bg-gray-100"
            type="search"
            placeholder="Search for something"
          />
        </div>
        <button className="p-2 rounded-full bg-gray-100 text-gray-500 focus:outline-none">
          <Settings />
        </button>
      </header>
    
  );
}
