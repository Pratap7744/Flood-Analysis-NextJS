"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VectorMap = dynamic(
  () => import("react-jvectormap").then((mod) => mod.VectorMap),
  { ssr: false } // Disable server-side rendering
);

const mapData = {
  IN: 1000, // Highlight India
  "IN-MH": 500, // Highlight Maharashtra
};

const MaharashtraMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Loading Map...</p>;

  return (
    <div style={{ width: "600px", height: "500px" }}>
      <VectorMap
        map="in_mill"
        backgroundColor="#f4f4f4"
        regionStyle={{
          initial: {
            fill: "#007bff",
          },
          hover: {
            fill: "#0056b3",
          },
        }}
        series={{
          regions: [
            {
              values: mapData,
              scale: ["#C8EEFF", "#0071A4"],
              normalizeFunction: "polynomial",
            },
          ],
        }}
        onRegionClick={(e, countryCode) => {
          if (countryCode === "IN-MH") {
            alert("Maharashtra Selected!");
          }
        }}
      />
    </div>
  );
};

export default MaharashtraMap;
