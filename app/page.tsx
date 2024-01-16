import React from "react";
import ActivityTile from "./components/ActivityTile";
import activities, { ActivityType } from "./lib/activity-data";

export default function Home() {
  const levels = {
    "Beginner Level": activities.filter((activity) => activity.level === 1),
    "Intermediate Level": activities.filter((activity) => activity.level === 2),
    "Advanced Level": activities.filter((activity) => activity.level === 3),
  };

  return (
    <div className="container mx-auto p-4">
      {Object.entries(levels).map(([levelName, activities]) => (
        <div key={levelName} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{levelName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity) => (
              <ActivityTile key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
