import Header from "../components/Header";
import FetchImages from "@/components/FetchImages";
const Movies = () => {
  return (
    <div>
      <Header />
      <FetchImages query="movies" />
    </div>
  );
};
export default Movies;
