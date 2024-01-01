type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  console.log(id);

  return <div>GenrePage</div>;
};

export default GenrePage;
