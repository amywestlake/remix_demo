import { ShowDataModel as Show } from "~/models/show";

function FilmCard({ show }: { show: Show }) {
  return (
    <li key={show.id}>
      <a href={`/shows/${show.slug}`}>{show.title}</a>
    </li>
  );
}

export default FilmCard;
