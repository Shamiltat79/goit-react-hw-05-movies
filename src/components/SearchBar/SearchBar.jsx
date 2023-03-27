import { useState } from "react";
import  PropTypes  from "prop-types";

import { ImSearch } from 'react-icons/im';
import { SearchBarWrapper } from "./SearchBar.styled";
import { SearchForm } from "./SearchBar.styled";
import { SearchFormInput } from "./SearchBar.styled";
import { SearchFormButton } from "./SearchBar.styled";

const SearchBar = ({onSubmit}) => {

const [request, setrequest] = useState('');

// const handleChange = (event) => {
//     setrequest(event.target.value.toLowercase());
// }

const handleSubmit = (event) => {
event.preventDefault();

onSubmit(request);
setrequest('');
}
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
                onChange={(event) => setrequest(event.target.value.toLowerCase())}

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

