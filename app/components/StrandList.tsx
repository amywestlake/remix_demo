import { ShowProps } from "~/props/show";
import { StrandProps as Strand } from "~/props/strand";
import ShowCard from "./ShowCard";

function StrandList({ strand }: { strand: Strand }) {
  return (
    <div key={strand.id}>
      <a href={`/strands/${strand.slug}`}>{strand.title}</a>
      {strand.shows.map((show: ShowProps) => (
          <ShowCard key={show.id} show={show} />
        ))}
    </div>
  );
}

export default StrandList;
