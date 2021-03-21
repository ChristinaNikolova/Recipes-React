import './SingleCategory.css';

function SingleCategory({id, name, picture, recipesCount}) {
    return (
        <div className="col-lg-4 custom-card-categpry">
            <div className="card mb-2">
                <h3 className="card-header title">{name}</h3>
                <img className="img-category" src={picture} alt="category-pic"></img>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i className="fas fa-book mr-1"></i>
                        Recipes in category: {recipesCount}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-secondary button-category">See recipes</button>
                </div>
            </div>
        </div>
    );
}

export default SingleCategory;