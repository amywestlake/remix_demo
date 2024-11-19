import { ShowProps as Show } from "~/props/show";

function ShowCard({ show }: { show: Show }) {
  return (
    <li key={show.id}>
      <a href={`/shows/${show.slug}`}>{show.title}</a>
    </li>
  );
}

export default ShowCard;
