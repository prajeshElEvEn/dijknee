import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Home() {
  // const upcomingMovies = await getUpcomingMovies()
  // const topRatedMovies = await getTopRatedMovies()
  // const popularMovies = await getPopularMovies()

  return (
    <main className="">
      {/* MovieCaraousel */}
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={[]} title="Upcoming" />
        {/* MovieCar */}
        {/* MovieCar */}
      </div>
    </main>
  );
}
