import { useState } from 'react';

import InputError from '../../shared/InputError/InputError.jsx';

import './SearchRecipe.css';

function SearchRecipe(props) {
    const [errorMessage, setErrorMessage] = useState('');

    const onSearchRecipeSubmitHandler = (e) => {
        e.preventDefault();
        const query = e.target.search.value;

        if (query === undefined || query.length < 3) {
            onSearchRecipeChangeHandler(e);
            return;
        }

        e.target.search.value = '';
        props.clickHandler(query)
    }

    const onSearchRecipeChangeHandler = (e) => {
        const query = e.target.value;

        if (query === undefined || query.length < 3) {
            setErrorMessage('The field should be at least 3 character');
        } else {
            setErrorMessage('');
        }
    }

    const clear = () => {
        props.clickHandler();
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
                                    <div className="col-lg-10">
                                        <input className="form-control" type="text" name="search" placeholder="Search" onChange={onSearchRecipeChangeHandler} />
                                        <InputError>{errorMessage}</InputError>
                                    </div>
                                    <div className="col-lg-2 remove">
                                        <button className="btn btn-secondary" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center mb-1">
                            {props.isSearched
                                ? <button className="btn btn-danger custom-danger clear-recult-font-size" onClick={clear}>Clear Result</button>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SearchRecipe;