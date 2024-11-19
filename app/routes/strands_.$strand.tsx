import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
        <h1>{strandData.title}</h1>
        <h3>{strandData.summary}</h3>
        <p>{strandData.description}</p>
      </div>
    );
  }
  