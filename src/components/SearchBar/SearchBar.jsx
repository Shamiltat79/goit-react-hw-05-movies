import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import { SearchBarWrapper } from "./SearchBar.styled";
import { SearchForm } from "./SearchBar.styled";
import { SearchFormInput } from "./SearchBar.styled";
import { SearchFormButton } from "./SearchBar.styled";

const SearchBar = ({onSubmit}) => {

const [request, setrequest] = useState('');
const handleChange = (event) => {
    setrequest(event.target.value.toLowercase());
}

const handleSubmit = (event) => {
event.preventDefault();
if(request.trim() === ''){
toast.warning("Please, enter search movie!")
}
}
    return(
        <SearchBarWrapper>

            <SearchForm onSubmit={handleSubmit}>
                <SearchFormInput 
                type="text" 
                autoComplete="off"
                autoFocus disabled = {false}
                placeholder="Searh movie..."
                name="request"
                value={request}
                onChange={handleChange}

                />
                <SearchFormButton><ImSearch/></SearchFormButton>
            </SearchForm>
            <ToastContainer
             theme="colored"/>
        </SearchBarWrapper>
        
    );
}
 export default SearchBar;