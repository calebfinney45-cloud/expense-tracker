import { Search } from "lucide-react";

function SearchBar({onSearch}) {
    return(
        <div className="relative mb-4">
            <Search size={20} strokeWidth={3} className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black"/>

            <input 
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md focus: outline-none border-2 border-black"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;