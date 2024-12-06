import Category from "./Category";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState(["Clothing", "Houshold"]);

  const cleanUp = () => console.log("Unmounting....");

  useEffect(() => {
    console.log("Use Effect....... Mounting");
    setCategories([...categories, "Category" + categories.length]);

    return () => cleanUp();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCategories([...categories, "Category" + categories.length]);
        }}
        className="btn btn-primary"
      >
        Add new category
      </button>
      <Category categories={categories} />
    </div>
  );
}

export default App;
