import { Link } from 'react-router-dom';


import './SingleRecipe.css';

function SingleRecipe({ id, title, picture, shortContent, categoryId, categoryName, recipeLikesCount, commentsCount }) {
    return (
        <article className="card custom-card-recipe">
            <h3 className="card-header recipe-title cursive-font-style">{title}</h3>
            <img className="img-recipe" src={picture} alt="recipe-pic"></img>
            <div className="card-body">
                <p className="card-text">{shortContent}...</p>
            </div>
            <ul className="list-group list-group-flush recipe-details">
                <li className="list-group-item">
                    <i className="fas fa-book"></i>
                    Category:
                    <Link to={`/recipes/current-category/${categoryId}`} className="hover-effect">{categoryName}</Link>
                </li>
                <li className="list-group-item">
                    <i className="fas fa-heart"></i>
                    Likes: {recipeLikesCount}</li>
                <li className="list-group-item">
                    <i className="fas fa-comments"></i>
                    Comments: {commentsCount}</li>
            </ul>
            <div className="card-body">
                <Link to={`/recipes/details/${id}`}><button className="custom-btn">See the recipe</button></Link>
            </div>
        </article>
    );
}

export default SingleRecipe;