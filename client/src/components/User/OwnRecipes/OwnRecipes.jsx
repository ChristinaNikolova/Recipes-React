import { Component } from 'react';

import * as usersService from '../../../services/usersService.js';
import OwnRecipesRow from '../OwnRecipesRow/OwnRecipesRow.jsx';

import './OwnRecipes.css';

class OwnRecipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ownRecipes: []
        };
    }

    componentDidMount() {
        usersService
            .getOwn()
            .then(recipes => this.setState({ ownRecipes: recipes }));
    }

    render() {
        return (
            <div className="own-recipes-wrapper" >
                <div className="container">
                    <h1 className="text-center cursive-font-style p-1">My Own Recipes</h1>
                    <hr />
                    <table className="table table-bordered table-hover custom-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Picture</th>
                                <th>Category</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ownRecipes.map(r => <OwnRecipesRow
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.picture}
                                categoryName={r.categoryName} />)}
                        </tbody>
                    </table>
                </div >
                <div className="fill pt-1 pb-1"></div>
            </div >
        );
    }
}

export default OwnRecipes;