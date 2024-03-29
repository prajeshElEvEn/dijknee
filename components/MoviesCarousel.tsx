import { Movie } from "@/lib/types";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical: boolean;
};
const MoviesCarousel = ({ title, movies, isVertical }: Props) => {
  return (
    <div className="z-50">
      <h2>{title}</h2>
    </div>
  );
};

export default MoviesCarousel;
