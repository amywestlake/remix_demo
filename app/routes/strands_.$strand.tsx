import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Content from "~/components/Content";
import H1 from "~/components/Headings/H1";
import Standfirst from "~/components/Headings/Standfirst";
import ShowCard from "~/components/ShowCard";
import { ShowProps } from "~/props/show";
import { StrandProps } from "~/props/strand";


export const loader: LoaderFunction = async ({ params }) => {
    const { strand } = params; 
    if (!strand) {
      throw new Response("Strand not found", { status: 404 });
    }
  
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/strands/${strand}`);
  
    if (!response.ok) {
      throw new Response("Strand not found", { status: 404 });
    }
  
    const strandData = await response.json();
    
    return json(strandData); 
  };
  
  export default function StrandPage() {
    const strandData = useLoaderData<StrandProps>();
  
    return (
      <div>
        <H1 text={strandData.title}></H1>
        <Standfirst text={strandData.summary}></Standfirst>
        <Content html={strandData.description}></Content>
        <div className="grid grid-cols-4 gap-4 mt-6">
        {strandData.shows.map((show: ShowProps) => (
          <ShowCard key={show.id} show={show} />
        ))}
        </div>
      </div>
    );
  }
  