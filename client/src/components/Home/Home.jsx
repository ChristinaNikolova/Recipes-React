import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as authService from '../../services/authService.js';

import './Home.css';

function Home({ isLoggedIn }) {
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(authService.getUsername());
    }, []);

    return (
        <div className="home-wrapper">
            <div className="jumbotron">
                {isLoggedIn
                    ? <h1 className="display-3 cursive-font-style">Welcome to Recipes, {username}!</h1>
                    : <h1 className="display-3 cursive-font-style">Welcome to Recipes!</h1>}
                {!isLoggedIn
                    ? <div>
                        <p className="lead-home">
                            <Link to="/register" className="bold-home-link"> Register </Link> or
                            <Link to="/login" className="bold-home-link"> Login </Link>now to see the most delicious recipes!
                        </p>
                        <hr className="my-4" />
                    </div>
                    : null}
                <p className="custom-font-home cursive-font-style">Don't be afraid to adapt new ingredients into your
                own techniques, and traditional ingredients into new recipes.
                </p>
                <img className="image-home" src="https://d23.com/app/uploads/2015/09/recipes-banner1180x600.jpg" alt="home-pic"></img>
                {isLoggedIn
                    ? <p className="lead-home">
                        <Link to="/recipes" className="btn btn-primary btn-lg mt-4 mr-2" role="button">See our recipes</Link>
                        <Link to='/recipes/create' className="btn btn-primary btn-lg mt-4" role="button">Create new recipe</Link>
                    </p>
                    : null}

            </div>
        </div>
    );
}

export default Home;