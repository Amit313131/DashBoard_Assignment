import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Category from "./Category";


const Dashboard = () => {
  const { categories } = useContext(DashboardContext);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Categories Card */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
