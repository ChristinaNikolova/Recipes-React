import { useState } from 'react';

import './RecipesOrder.css';

function RecipesOrder({ clickHandler }) {
    const [isShown, setIsShown] = useState(false);

    const toogle = (criteria) => {
        const prevState = isShown;

        setIsShown(!prevState);
        clickHandler(criteria);
    }

    return (
        <div className="order-wrapper">
            <button
                className="btn btn-secondary"
                onClick={toogle}>
                {isShown
                    ? <i className="fas fa-hand-point-down p-2"></i>
                    : <i className="fas fa-hand-point-right p-2"></i>}
                       Order by</button>

            {isShown
                ? <ul>
                    <li
                        className="recipe-order"
                        onClick={() => toogle("old")}>
                        <i className="fas fa-check-circle"></i>Oldest to newest</li>
                    <li
                        className="recipe-order"
                        onClick={() => toogle("new")}>
                        <i className="fas fa-check-circle"></i>Newest to oldest</li>
                    <li
                        className="recipe-order"
                        onClick={() => toogle("likes")}>
                        <i className="fas fa-check-circle"></i>Likes Count</li>
                    <li
                        className="recipe-order"
                        onClick={() => toogle("comments")}>
                        <i className="fas fa-check-circle"></i>Comments Count</li>
                </ul>
                : <div></div>}
        </div>
    );
}

export default RecipesOrder;