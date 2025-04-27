import Header from "../components/Header";
import FetchImages from "@/components/FetchImages";
const Shows = () => {
  return (
    <div>
      <Header />
      <FetchImages query="shows" />
    </div>
  );
};
export default Shows;
