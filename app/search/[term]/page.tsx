import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
const SearchPage = ({ params: { term } }: Props) => {
  console.log(term);
  if (!term) {
    notFound();
  }
  const termToUse = decodeURI(term);
  return (
    <div>
      <p>Welcome to {termToUse}</p>
    </div>
  );
};

export default SearchPage;
