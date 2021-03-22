import { Component } from 'react';

import './RecipesOrder.css';

class RecipesOrder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isShown: false
        };
    }

    toogle() {
        this.setState(prevState => ({
            isShown: !prevState.isShown
        }));
    }

    render() {
        return (
            <div className="order-wrapper">
                <button
                    className="btn btn-secondary"
                    onClick={this
                        .toogle
                        .bind(this)}>
                    {this.state.isShown
                        ? <i className="fas fa-hand-point-down"></i>
                        : <i className="fas fa-hand-point-right"></i>}
                    Order by</button>

                {this.state.isShown
                    ? <ul>
                        <li
                            className="recipe-order"
                            onClick={() => {
                                this.props.clickHandler('old')
                                this.toogle()
                            }}>
                            <i className="fas fa-check-circle"></i>Oldest to newest</li>
                        <li
                            className="recipe-order"
                            onClick={() => {
                                this.props.clickHandler('new')
                                this.toogle()
                            }}>
                            <i className="fas fa-check-circle"></i>
                                Newest to oldest</li>
                        <li
                            className="recipe-order"
                            onClick={() => {
                                this.props.clickHandler('likes')
                                this.toogle()
                            }}>
                            <i className="fas fa-check-circle"></i>Likes Count</li>
                        <li
                            className="recipe-order"
                            onClick={() => {
                                this.props.clickHandler('comments')
                                this.toogle()
                            }}>
                            <i className="fas fa-check-circle"></i>
                                Comments Count</li>
                    </ul>
                    : <div></div>}
            </div>
        );
    }
}

export default RecipesOrder;