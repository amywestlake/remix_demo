import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShowProps as Show } from "~/props/show";
import H1 from "~/components/Headings/H1";
import ShowCard from "~/components/ShowCard";
import H3 from "~/components/Headings/H3";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const start = url.searchParams.get("start") || new Date().toISOString().split("T")[0]; // Default to today's date
    const end = url.searchParams.get("end");
  
    const dateRange = { start, end };
  
    try {
      const queryParams = new URLSearchParams({ start });
  
      if (end) {
        queryParams.append("end", end);
      }
  
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/performances/search?${queryParams.toString()}`;
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Error fetching shows: ${response.statusText}`);
      }
  
      const shows: Show[] = await response.json();
  
      // Return empty array if results are empty
      return json({ shows: shows || [], dateRange });
    } catch (error) {
      console.error("Error in loader:", error);
      return json({ error: "Failed to load shows", dateRange }, { status: 500 });
    }
  };
  

  export default function Shows() {
    const { shows, dateRange } = useLoaderData<typeof loader>();
  
    const { start, end } = dateRange;
  
    // Format the dates for human-readable display
    const formatDate = (date: string) =>
      new Intl.DateTimeFormat("en-UK", { year: "numeric", month: "long", day: "numeric" }).format(new Date(date));
  
    // Determine the heading based on the presence and values of start and end
    let headingText = "Performances";
    if (!start && !end) {
      headingText = "Performances from today";
    } else if (start && end && start === end) {
      headingText = `Performances for ${formatDate(start)}`;
    } else if (start && end) {
      headingText = `Performances between ${formatDate(start)} and ${formatDate(end)}`;
    } else if (start && !end) {
      headingText = `Performances from ${formatDate(start)}`;
    }
  
    // Check if shows array is empty
    if (!shows || shows.length === 0) {
      return (
        <div>
          <H1 text="What's On - Shows"></H1>
          <H3 text={headingText}></H3>
          <p className="mt-4">Sorry, no results found for the selected date range.</p>
        </div>
      );
    }
  
    return (
      <div>
        <H1 text="What's On - Shows"></H1>
        <H3 text={headingText}></H3>
  
        <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {shows.map((show: Show) => (
            <div key={show.id}       className="">
              <ShowCard show={show} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  