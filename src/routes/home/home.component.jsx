import CategoriesContainer from "../../components/categories-container/categories-container.component";
import categories from "../../data/categories";

const Home = () => {
  return <CategoriesContainer categories={categories} />;
}

export default Home;