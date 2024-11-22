import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import H1 from "~/components/Headings/H1";
import ShowCard from "~/components/ShowCard";
import { ShowProps as Show } from "~/props/show";

export let loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Error fetching shows: ${response.statusText}`);
    }
    const shows: Show[] = await response.json();
    return json(shows);
  } catch (error) {
    console.error("Error in loader:", error);
    return json({ error: "Failed to load shows" }, { status: 500 });
  }
};

export default function Shows() {
  const shows = useLoaderData<Show[] | { error: string }>();

  if (!Array.isArray(shows)) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load shows. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <H1 text="What's On - Shows"></H1>
      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}
