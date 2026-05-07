import { useState } from "react";
import ExpenseCard from "./components/ExpenseCard.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);
  
  function addExpense(newExpense) {
    //Create an array with new and old items
    //Create a unique id for key prop later on
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  }

  return(
    <div>
      <nav className="border-b border-slate-100 px-8 py-6 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-normal font-barlow">
            Expense<span className="text-blue-600">Tracker</span>
          </h1>
          <p className="text-sm font-sans text-slate-500">
            Overview of your daily spending
          </p>
        </div>
      </div>
      </nav>
      
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 items-start">
        <ExpenseCard onAddExpense={addExpense} />

        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}

export default App;