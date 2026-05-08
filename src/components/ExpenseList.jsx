import {useState} from "react";
import SearchBar from "./SearchBar.jsx";
import { Trash2 } from "lucide-react";

function ExpenseList({expenses, onDeleteExpense}) {
    if(expenses.length === 0) {
        return(
            <h1 className="text-4xl font-bold items-center  py-30 px-30 text-center font-barlow">NO EXPENSES FOUND</h1>
        );
    }

    const[searchItem, setSearchItem] = useState('');
     
    const query = searchItem.toLowerCase();
    const filteredExpenses = expenses.filter(expense => {
        return expense.item.toLowerCase().includes(query) || expense.description.toLowerCase().includes(query);
    });

    return(
        <div className="flex flex-col gap-6 w-full">
            <SearchBar onSearch={setSearchItem} />
            <div className="dashboard-table border-2 border-black rounded-xl overflow-hidden shadow-sm bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className>
                            <tr>
                                <th>Expense</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount(Ksh.)</th>
                                <th>Date</th>
                                <th>Clear</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExpenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td className="font-bold">{expense.item}</td>
                                    <td className="text-slate-500 border border-gray-300">{expense.description}</td>
                                    <td className="border border-gray-300">{expense.category}</td>
                                    <td className="font-mono border border-gray-300">{expense.amount}</td>
                                    <td className="text-blue-500 border border-gray-300">{expense.date}</td>
                                    <td className="text-right">
                                        <button onClick={() => onDeleteExpense(expense.id)}
                                            className="flex items-center justify-center h-9 w-9 rounded-lg hover:bg-red-300 transition-all active:scale-90"     
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default ExpenseList;