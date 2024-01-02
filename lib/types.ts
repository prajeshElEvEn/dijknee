export type Genre = {
  id: string;
  name: string;
};
export type Genres = {
  genres: Genre[];
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  posterPath: string;
  backdropPath: string;
  originalLanguage: string;
  originalTitle: string;
  adult: boolean;
  mediaType: string;
  popularity: number;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};
