import { ShowProps } from "~/props/show";
import { StrandProps as Strand } from "~/props/strand";
import ShowCard from "./ShowCard";
import H2 from "./Headings/H2";

function StrandList({ strand }: { strand: Strand }) {
  return (
    <div key={strand.id}>
      <a href={`/strands/${strand.slug}`}><H2 text={strand.title}></H2></a>
      <div className="grid grid-cols-4 gap-4">
        {strand.shows.map((show: ShowProps) => (
          <ShowCard key={show.id} show={show} />
        ))}
        </div>
    </div>
  );
}

export default StrandList;
