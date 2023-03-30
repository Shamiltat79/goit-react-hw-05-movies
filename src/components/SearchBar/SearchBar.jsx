import { useState } from "react";
import  PropTypes  from "prop-types";

import { ImSearch } from 'react-icons/im';
import { SearchBarWrapper } from "./SearchBar.styled";
import { SearchForm } from "./SearchBar.styled";
import { SearchFormInput } from "./SearchBar.styled";
import { SearchFormButton } from "./SearchBar.styled";

const SearchBar = ({onSubmit}) => {

const [request, setRequest] = useState('');

const handleChange = (event) => {
    const {value} = event.target;
    setRequest(value.toLowerCase());
}

const handleSubmit = (event) => {
event.preventDefault();

onSubmit(request);
reset();
}   

function reset() {
    setRequest('');
};
    return(
        <SearchBarWrapper>

            <SearchForm onSubmit={handleSubmit}>
                <SearchFormInput 
                type="text" 
                autoComplete="off"
                autoFocus 
                placeholder="Searсh movie..."
                name="request"
                value={request}
                onChange={handleChange}

                />
                <SearchFormButton><ImSearch/></SearchFormButton>
            </SearchForm>
            
        </SearchBarWrapper>
        
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
 export default SearchBar;

