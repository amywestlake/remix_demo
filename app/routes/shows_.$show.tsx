import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Content from "~/components/Content";
import H1 from "~/components/Headings/H1";
import Standfirst from "~/components/Headings/Standfirst";
import { ShowProps } from "~/props/show";


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
  
  export default function ShowPage() {
    const showData = useLoaderData<ShowProps>();
  
    return (
      <div>
        <H1 text={showData.title}></H1>
        <Standfirst text={showData.summary}></Standfirst>
        <Content html={showData.description} />
      </div>
    );
  }
  