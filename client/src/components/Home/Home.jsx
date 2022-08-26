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
        <section id="home" className='section'>
            {isLoggedIn
                ? <h1 className="home-title cursive-font-style">Welcome to Recipes, {username}!</h1>
                : <h1 className="home-title cursive-font-style">Welcome to Recipes!</h1>}
            {!isLoggedIn
                ? <div>
                    <p className="home-btn">
                        <Link to="/register" className="home-bold-link"> Register </Link> or
                        <Link to="/login" className="home-bold-link"> Login </Link>now to see the most delicious recipes!
                    </p>
                </div>
                : null}
            <p className="home-custom-font cursive-font-style">Don't be afraid to adapt new ingredients into your
                own techniques, and traditional ingredients into new recipes.
            </p>
            <img className="home-img" src="https://d23.com/app/uploads/2015/09/recipes-banner1180x600.jpg" alt="home-pic"></img>
            {isLoggedIn
                ? <p className="home-btn">
                    <Link to="/recipes" className="custom-btn" role="button">See our recipes</Link>
                    <Link to='/recipes/create' className="custom-btn" role="button">Create new recipe</Link>
                </p>
                : null}
        </section>
    );
}

export default Home;