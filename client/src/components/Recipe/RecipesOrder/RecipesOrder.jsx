import './RecipesOrder.css';

function RecipesOrder() {
    return (
        <div>
            <button className="btn btn-secondary">
                <i className="fas fa-hand-point-right"></i>
                Order by</button>
            <button className="btn btn-secondary">
                <i className="fas fa-hand-point-down"></i>
                Order by</button>
            <ul>
                <li className="recipe-order">
                    <i className="fas fa-check-circle"></i>
                    Oldest to newest</li>
                <li className="recipe-order">
                    <i className="fas fa-check-circle"></i>
                    Newest to oldest</li>
                <li className="recipe-order">
                    <i className="fas fa-check-circle"></i>
                    Likes Count</li>
                <li className="recipe-order">
                    <i className="fas fa-check-circle"></i>
                    Comments Count</li>
            </ul>
        </div>
    );
}

export default RecipesOrder;