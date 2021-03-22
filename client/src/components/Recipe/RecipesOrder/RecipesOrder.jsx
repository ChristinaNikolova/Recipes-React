import './RecipesOrder.css';

function RecipesOrder(props) {
    return (
        <div>
            <button className="btn btn-secondary">
                <i className="fas fa-hand-point-right"></i>
                Order by</button>
            <button className="btn btn-secondary">
                <i className="fas fa-hand-point-down"></i>
                Order by</button>
            <ul>
                <li className="recipe-order" onClick={()=> {props.clickHandler('old')}}>
                    <i className="fas fa-check-circle"></i>
                    Oldest to newest</li>
                <li className="recipe-order" onClick={()=> {props.clickHandler('new')}}>
                    <i className="fas fa-check-circle"></i>
                    Newest to oldest</li>
                <li className="recipe-order" onClick={()=> {props.clickHandler('likes')}}>
                    <i className="fas fa-check-circle"></i>
                    Likes Count</li>
                <li className="recipe-order" onClick={()=> {props.clickHandler('comments')}}>
                    <i className="fas fa-check-circle"></i>
                    Comments Count</li>
            </ul>
        </div>
    );
}

export default RecipesOrder;