import {useState} from "react";
import SearchBar from "./SearchBar.jsx";

function ExpenseList({expenses}) {
    const[searchItem, setSearchItem] = useState('');
     
    const filteredExpenses = expenses.filter(expense => {
        return expense.item.toLowerCase().includes(searchItem.toLowerCase()) || expense.description.toLowerCase().includes(searchItem.toLowerCase());
    })

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
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExpenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td className="font-bold">{expense.item}</td>
                                    <td className="text-slate-500">{expense.description}</td>
                                    <td>{expense.category}</td>
                                    <td className="font-mono">{expense.amount}</td>
                                    <td className="text-blue-500">{expense.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default ExpenseList;