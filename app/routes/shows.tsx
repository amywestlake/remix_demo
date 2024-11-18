import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FilmCard from "~/components/filmCard";
import { ShowDataModel as Show } from "~/models/show";

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
      <h1>Shows</h1>
      <ul>
        {shows.map((show) => (
          <FilmCard key={show.id} show={show} />
        ))}
      </ul>
    </div>
  );
}
