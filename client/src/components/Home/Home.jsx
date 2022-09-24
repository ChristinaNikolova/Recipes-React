import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContexts.jsx';

import './Home.css';

function Home() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <section id="home" className='section'>
            {isAuthenticated
                ? <h1 className="home-title cursive-font-style">Welcome to Recipes, {username}!</h1>
                : <h1 className="home-title cursive-font-style">Welcome to Recipes!</h1>}
            {!isAuthenticated &&
                <div>
                    <p className="home-btn">
                        <Link to="/register" className="home-bold-link"> Register </Link> or
                        <Link to="/login" className="home-bold-link"> Login </Link>now to see the most delicious recipes!
                    </p>
                </div>
            }
            <p className="home-custom-font cursive-font-style">Don't be afraid to adapt new ingredients into your
                own techniques, and traditional ingredients into new recipes.
            </p>
            <img className="home-img" src="https://d23.com/app/uploads/2015/09/recipes-banner1180x600.jpg" alt="home-pic"></img>
            {isAuthenticated &&
                <p className="home-btn">
                    <Link to="/recipes" className="custom-btn" role="button">See our recipes</Link>
                    <Link to='/recipes/create' className="custom-btn" role="button">Create new recipe</Link>
                </p>
            }
        </section>
    );
}

export default Home;