import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import StrandList from "~/components/strandList";
import { StrandProps as Strand } from "~/props/strand";

export let loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/strands`);
    if (!response.ok) {
      throw new Error(`Error fetching shows: ${response.statusText}`);
    }
    const shows: Strand[] = await response.json();
    return json(shows);
  } catch (error) {
    console.error("Error in loader:", error);
    return json({ error: "Failed to load shows" }, { status: 500 });
  }
};

export default function Strands() {
  const strands = useLoaderData<Strand[] | { error: string }>();

  if (!Array.isArray(strands)) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load shows. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Strands</h1>
      <ul>
        {strands.map((strand) => (
          <StrandList key={strand.id} strand={strand} />
        ))}
      </ul>
    </div>
  );
}
