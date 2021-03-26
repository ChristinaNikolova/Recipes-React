import { useState } from 'react';

import InputError from '../../shared/InputError/InputError.jsx';

import './SearchRecipe.css';

function SearchRecipe(props) {
    console.log(props);
    const [errorMessage, setErrorMessage] = useState('');

    const onSearchRecipeSubmitHandler = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        e.target.search.value = '';
        props.clickHandler(query)
    }

    const onSearchRecipeChangeHandler = (e) => {
        const query = e.target.value;

        if (query === '' || query.length < 3) {
            setErrorMessage('The field should be at least 3 character');
        } else {
            setErrorMessage('');
        }
    }

    return (
        <div className="search-wrapper">
            <div className="search-form">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="text-center mt-1">Find a recipe</h4>
                        <p className="text-center">Search for a recipe using the form below:</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="search-form-centered">
                            <form className="m-2" onSubmit={onSearchRecipeSubmitHandler}>
                                <div className="row remove">
                                    <div className="col-lg-8">
                                        <input className="form-control" type="text" name="search" placeholder="Search" onChange={onSearchRecipeChangeHandler} />
                                        <InputError>{errorMessage}</InputError>
                                    </div>
                                    <div className="col-lg-2 remove">
                                        <button className="btn btn-secondary" type="submit">Search</button>
                                    </div>
                                    <div className="col-lg-2">
                                        {props.isSearched 
                                        ? <button className="btn btn-danger custom-danger">Clear Result</button> 
                                        : null}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SearchRecipe;