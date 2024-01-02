import { Genres } from "@/lib/types";

const GenreDropdown = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 24 * 60 * 60,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
  return <div>GenreDropdown</div>;
};

export default GenreDropdown;
