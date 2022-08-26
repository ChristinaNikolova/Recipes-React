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
        <section id="recipe-order">
            <button
                className="btn btn-secondary"
                onClick={toogle}>
                {isShown
                    ? <i className="fas fa-hand-point-down"></i>
                    : <i className="fas fa-hand-point-right"></i>}
                Order by</button>

            {isShown
                ? <ul className='recipe-order-ul'>
                    <li
                        className="recipe-order-li"
                        onClick={() => toogle("old")}>
                        <i className="fas fa-check-circle"></i>Oldest to newest</li>
                    <li
                        className="recipe-order-li"
                        onClick={() => toogle("new")}>
                        <i className="fas fa-check-circle"></i>Newest to oldest</li>
                    <li
                        className="recipe-order-li"
                        onClick={() => toogle("likes")}>
                        <i className="fas fa-check-circle"></i>Likes Count</li>
                    <li
                        className="recipe-order-li"
                        onClick={() => toogle("comments")}>
                        <i className="fas fa-check-circle"></i>Comments Count</li>
                </ul>
                : <div></div>}
        </section>
    );
}

export default RecipesOrder;