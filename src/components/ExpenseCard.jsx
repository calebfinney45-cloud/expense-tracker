import {useState} from "react";

function ExpenseCard({onAddExpense}) {
    const [formData, setFormData] = useState({
        item: '',
        description: '',
        category: '',
        amount: '',
        date: ''
    });
    
    const handleChange = (e) => {  //Updates state as you type
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanData = { ...formData, amount: parseFloat(formData.amount)}; //converts amount to real number
        onAddExpense(cleanData);

        setFormData({ //Resets the form so it's empty for the next entry
            item: '',
            description: '',
            category: '',
            amount: '',
            date: ''
        });
    }

    return(
        <div className="bg-white border border-black rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold font-barlow mb-4">Add Expense</h2>
            <form 
               className="font-sans flex flex-col gap-4 [&_input]:h-12 [&_input]:px-4 [&_input]:border-2 [&_input]:border-black [&_input]:rounded-md [&_input]:outline-none focus:[&_input]:border-blue-600 transition-all" 
               onSubmit={handleSubmit}
            >
                <input 
                    name="item" 
                    type="text"
                    placeholder="Expense" 
                    onChange={handleChange}
                    value={formData.item}
                />
                <input
                    name="description"
                    type="text"
                    placeholder="Description(brief)"
                    onChange={handleChange}
                    value={formData.description}
                />
                <input
                    name="category"
                    type="text"
                    placeholder="Category"
                    onChange={handleChange}
                    value={formData.category}
                />
                <input 
                    name="amount"
                    type="number"
                    placeholder="Amount"
                    onChange={handleChange}
                    value={formData.amount}
                />
                <input 
                    name="date"
                    type="date"
                    placeholder="dd / MM / yyyy"
                    onChange={handleChange}
                    value={formData.date}
                />
                <button type="submit" className="mt-2 h-12 bg-black text-white font-bold rounded-md hover:bg-slate-800 active:scale-[0.98] transition-transform">Complete</button>
            </form>
        </div>
    );    
}

export default ExpenseCard;