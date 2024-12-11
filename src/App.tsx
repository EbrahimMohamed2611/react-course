import Category from "./Category";
import "./App.css";
import {useEffect, useState} from "react";
import Users from "./Users";
import ExpensesList from "./expenses-tracker/ExpensesList";
import ExpensesFilter from "./expenses-tracker/ExpensesFilter";
import ExpensesForm from "./expenses-tracker/ExpensesForm";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        {id: 1, description: "aaaa", amount: 10, category: "Utilities"},
        {id: 2, description: "bbbb", amount: 10, category: "Clothing"},
        {id: 3, description: "cccc", amount: 10, category: "Entertainment"},
        {id: 4, description: "dddd", amount: 10, category: "Entertainment"},
        {id: 5, description: "eeee", amount: 10, category: "Utilities"},
    ]);

    const visibleItems = selectedCategory
        ? expenses.filter((expense) => expense.category === selectedCategory)
        : expenses;

    // const [categories, setCategories] = useState(["Clothing", "Houshold"]);

    // const cleanUp = () => console.log("Unmounting....");

    // useEffect(() => {
    //   console.log("Use Effect....... Mounting");
    //   setCategories([...categories, "Category" + categories.length]);

    //   return () => cleanUp();
    // }, []);
    return (
        <div>
            {/* <button
        onClick={() => {
          setCategories([...categories, "Category" + categories.length]);
        }}
        className="btn btn-primary"
      >
        Add new category
      </button>
      <Category categories={categories} /> */}
            {/* <Users /> */}
            <div className="mb-3">
                <ExpensesForm onSubmit={(expense) => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>
            <div className="mb-3">
                <ExpensesFilter
                    onSelectedCategory={(category) => setSelectedCategory(category)}
                />
            </div>
            <ExpensesList
                expenses={visibleItems}
                onDelete={(id) =>
                    setExpenses(expenses.filter((expense) => expense.id !== id))
                }
            />
        </div>
    );
}

export default App;
