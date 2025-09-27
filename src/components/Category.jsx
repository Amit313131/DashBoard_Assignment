import { useState } from "react";
import WidgetList from "./WidgetList";
import AddWidgetDialog from "./AddWidgetDialog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

const Category = ({ category }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="border rounded-xl shadow-md bg-white p-6 m-4">
      {/* Category Name */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {category.name}
      </h2>

      {/* Widgets List */}
      <WidgetList category={category} />
      {/* Add Widget Button */}
      <button
        onClick={() => setShowDialog(true)}
        className="mt-4 w-full bg-black -600 text-white px-4 py-2 rounded-lg 
                   hover:bg-green-700 transition duration-200"
      >
        <FontAwesomeIcon icon={faPlus} /> 
      </button>

      {/* Dialog */}
      {showDialog && (
        <AddWidgetDialog
          category={category}
          onClose={() => setShowDialog(false)}
        />

      )}
      
    </div>
  );
};

export default Category;
