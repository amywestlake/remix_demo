import { ShowProps as Show } from "~/props/show";
import H2 from "./Headings/H2";
import H4 from "./Headings/H4Bold";

function ShowCard({ show }: { show: Show }) {
  return (
    <div key={show.id} className="min-w-[281px] mx-auto bg-white p-2">
      <img
        src="https://placehold.co/231x129"
        alt="Placeholder"
        className="w-full"
        width="231"
      />
      <div className="pt-4 text-black">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gray-200 px-2 py-1 text-left">Season</div>
          <div className="bg-gray-300 w-8 h-8 flex rounded-full items-center justify-center text-right">15</div>
        </div>
        <a href={`/shows/${show.slug}`}>
          <H2 text={show.title}></H2>
        </a>
        <H4 text="Thu 7 & Sun 17 Nov"></H4>
        <p>Director Name | 2h 21m</p>
      </div>
    </div>
  );
}

export default ShowCard;
