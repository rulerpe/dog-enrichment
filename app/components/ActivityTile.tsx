import React from "react";
import Link from "next/link";
import { ActivityType } from "../lib/activity-data";
import Image from "next/image";

const ActivityTile: React.FC<ActivityType> = ({
  slug,
  name,
  cover,
  images,
  description,
  type,
  level,
}) => {
  const levelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-lightBlue-200"; // Color for Beginner Level
      case 2:
        return "bg-amber-200"; // Color for Intermediate Level
      case 3:
        return "bg-deepRed-200"; // Color for Advanced Level
      default:
        return "bg-gray-200"; // Default Color
    }
  };
  return (
    <Link href={`/activity/${slug}`} passHref>
      <div
        className={`block border rounded-lg overflow-hidden shadow-lg ${levelColor(
          level
        )}`}
      >
        <div className="w-full h-32 relative">
          <Image
            src={cover} // Using the first image
            alt={name}
            layout="fill" // This will cover the div size
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold truncate">{name}</h2>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ActivityTile;
