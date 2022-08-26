import { Link } from 'react-router-dom';

import './SingleCategory.css';

function SingleCategory({ id, name, picture, recipesCount }) {
    return (
        <div className="custom-card-category">
            <div className="card">
                <h3 className="card-header cursive-font-style">{name}</h3>
                <img className="category-img" src={picture} alt="category-pic"></img>
                <ul className='category--recipe-count'>
                    <li>
                        <i className="fas fa-book mr-1"></i>
                        Recipes in category: {recipesCount}
                    </li>
                </ul>
                <div className="card-body">
                    <Link to={`/recipes/current-category/${id}`}>
                        <button className="custom-btn">See recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleCategory;