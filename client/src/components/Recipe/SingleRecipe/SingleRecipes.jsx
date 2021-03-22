import { Link } from 'react-router-dom';
import './SingleRecipe.css';

function SingleRecipe({
    id,
    title,
    picture,
    content,
    categoryName,
    recipeLikesCount,
    commentsCount
}) {
    return (
        <div className="col-lg-4">
            <div className="card mb-2 custom-card-recipe">
                <h3 className="card-header recipe-title">{title}</h3>
                <img className="img-recipe" src={picture} alt="recipe-pic"></img>
                <div className="card-body">
                    <p className="card-text">CONTENT(70 symbols)...</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i className="fas fa-book"></i>
                        Category:
                        <a className="hover-effect">{categoryName}</a>
                    </li>
                    <li className="list-group-item">
                        <i className="fas fa-heart"></i>
                        Likes: {recipeLikesCount}</li>
                    <li className="list-group-item">
                        <i className="fas fa-comments"></i>
                        Comments: {commentsCount}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/recipes/details/${id}`}><button className="btn btn-secondary button-recipe">See the recipe</button></Link>
                </div>
            </div>
        </div>
    );
}

export default SingleRecipe;