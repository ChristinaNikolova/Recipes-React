import CreateRecipeForm from './CreateRecipeForm.jsx';

import './CreateRecipe.css';

function CreateRecipe({ history }) {
    const createRecipe = () => {
        history.push(`/recipes`);
        return;
    }

    return (
        <section id="create-recipe" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Create New Recipe</h1>
                <CreateRecipeForm clickHandler={createRecipe} />
            </div>
        </section>
    );
}

export default CreateRecipe;