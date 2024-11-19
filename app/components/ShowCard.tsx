import { ShowProps as Show } from "~/props/show";
import H2 from "./Headings/H2";

function ShowCard({ show }: { show: Show }) {
  return (
    <div key={show.id} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        src="https://placehold.co/400x400"
        alt="Placeholder"
        className="rounded-t-lg"
      />
      <div className="p-4">
        <a href={`/shows/${show.slug}`}>
        <H2 text={show.title}></H2></a>
      </div>
    </div>
  );
}

export default ShowCard;
