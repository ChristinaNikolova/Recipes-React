import './FavouriteRecipes.css';

function FavouriteRecipes() {
    return (
        <div className="favourite-recipes-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">My Favourite Recipes</h1>
                <hr />
                <table className="table table-bordered table-hover custom-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Picture</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr app-user-favourite-single-recipe [recipe]="recipe" (reloadEventEmitter)="reload()"></tr> */}
                    </tbody>
                </table>
            </div >
            <div className="fill pt-1 pb-1"></div>
        </div >
    );
}

export default FavouriteRecipes;