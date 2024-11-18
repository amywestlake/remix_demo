import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async ({ params }) => {
    const { show } = params; 
    if (!show) {
      throw new Response("Show not found", { status: 404 });
    }
  
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/shows/${show}`);
  
    if (!response.ok) {
      throw new Response("Show not found", { status: 404 });
    }
  
    const showData = await response.json();
    
    return json(showData); 
  };


  interface ShowProps {
    id: string;
    title: string;
    description: string;
    summary: string;
  }
  
  export default function ShowPage() {
    const showData = useLoaderData<ShowProps>();
  
    return (
      <div>
        <h1>{showData.title}</h1>
        <h3>{showData.summary}</h3>
        <p>{showData.description}</p>
      </div>
    );
  }
  