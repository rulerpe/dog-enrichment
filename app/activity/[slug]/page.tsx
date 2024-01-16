import React from "react";
import activities, { ActivityType } from "../../lib/activity-data";
import tips, { TipType } from "../../lib/tip-data";
import ActivityTile from "../../components/ActivityTile";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const activity = activities.find((ac) => ac.slug === params.slug);

  return {
    title: activity?.name || "",
    description: activity?.description || "",
    keywords: activity?.keywords || "",
  };
}

export default function ActivityDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // Find the Activity by slug
  const activity = activities.find((ac) => ac.slug === slug);

  if (!activity) {
    return <div>Activity not found.</div>;
  }
  // Function to get a random activities
  const getRandomActivities = (possibleActivities: ActivityType[]) => {
    return possibleActivities[
      Math.floor(Math.random() * possibleActivities.length)
    ];
  };

  // Find a simpler and a harder activity
  const simplerActivity = getRandomActivities(
    activities.filter((ac) => ac.level <= activity.level && ac.slug !== slug)
  );
  const harderActivity = getRandomActivities(
    activities.filter((ac) => ac.level >= activity.level && ac.slug !== slug)
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold my-4">{activity.name}</h1>
      <p className="text-md my-1">{activity.description}</p>
      {/* <p className="text-md my-1">
        <strong>Level:</strong> {activity.level}
      </p> */}
      <p className="text-md my-1">
        <strong>Instruction:</strong> {activity.instruction}
        {activity.images.map((image, index) => (
          <div className="flex justify-center items-center">
            <Image
              key={index}
              src={image}
              alt={activity.name + index}
              width={600}
              height={300}
            ></Image>
          </div>
        ))}
      </p>
      {activity.easy && (
        <div>
          <strong>Easier Variation:</strong> {activity.easy}
          {activity.easyImages.map((image, index) => (
            <div className="flex justify-center items-center">
              <Image
                key={index}
                src={image}
                alt={activity.name + index}
                width={600}
                height={300}
              ></Image>
            </div>
          ))}
        </div>
      )}
      {activity.hard && (
        <div>
          <strong>More Challenging:</strong> {activity.hard}
          {activity.hardImages.map((image, index) => (
            <div className="flex justify-center items-center">
              <Image
                key={index}
                src={image}
                alt={activity.name + index}
                width={600}
                height={300}
              ></Image>
            </div>
          ))}
        </div>
      )}

      {activity.mix && (
        <p className="text-md my-1">
          <strong>Mixed Difficulty:</strong> {activity.mix}
        </p>
      )}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Simpler Activity</h2>
          {simplerActivity && <ActivityTile {...simplerActivity} />}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Harder Activity</h2>
          {harderActivity && <ActivityTile {...harderActivity} />}
        </div>
      </div>
    </div>
  );
}
