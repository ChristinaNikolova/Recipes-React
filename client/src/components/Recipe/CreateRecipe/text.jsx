// import { useState } from 'react';

// import * as categoriesService from '../../../services/categoriesService.js';

// import './CreateRecipe.css';

// function CreateRecipe() {
//     const [categories, setCategories] = React.useState([]);
//     const [indexes, setIndexes] = React.useState([]);
//     const [counter, setCounter] = React.useState(0);


//     const addIngredient = () => {
//         setIndexes(prevIndexes => [...prevIndexes, counter]);
//         setCounter(prevCounter => prevCounter + 1);
//     };

//     const removeIngredient = index => () => {
//         setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
//         setCounter(prevCounter => prevCounter - 1);
//     };


//     return (
//         <div className="create-recipe-wrapper" >
//             <div className="fill pt-2 pb-2"></div>
//             <div className="container">
//                 <div className="row space-top">
//                     <div className="col-md-12">
//                         <h1 className="create-recipe-title cursive-font-style">Create New Recipe</h1>
//                     </div>
//                 </div>
//                 <form onSubmit={this.onCreateRecipeSubmitHandler}>
//                     <div className="row space-top">
//                         <div className="col-lg-8">
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="title">Title</label>
//                                 <input className="form-control" id="title" type="text" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="content">Content</label>
//                                 <textarea className="form-control" id="content" type="text" cols="10" rows="7"></textarea>
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="portions">Portions</label>
//                                 <input className="form-control" id="portions" type="number" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="preparationTime">Preparation Time in minutes</label>
//                                 <input className="form-control" id="preparationTime" type="number" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="cookingTime">Cooking time in minutes</label>
//                                 <input className="form-control" id="cookingTime" type="number" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="categoryName">Category</label>
//                                 <select className="form-control" id="categoryName">
//                                     <option disabled>Please select one of the options below</option>
//                                     {this.state.categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-control-label" htmlFor="picture">Picture url</label>
//                                 <input className="form-control" id="picture" type="url" />
//                             </div>
//                             <hr />
//                             <div>
//                                 <label className="form-control-label fonts-bold" htmlFor="ingredients">Ingredients: </label>
//                                 <div>
//                                     <label className="form-control-label custom-color-green">Ingredient: </label>
//                                     <div className="form-group">
//                                         <label className="form-control-label" htmlFor="name">Name</label>
//                                         <input className="form-control" id="name" type="text" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-control-label" htmlFor="quantity">Quantity</label>
//                                         <input className="form-control" id="quantity" type="text" />
//                                     </div>
//                                 </div >
//                             </div >
//                             <button className="btn btn-primary custom-color-blue"> Add ingredient</button >
//                             <hr />
//                             <button type="submit" className="btn btn-secondary"> Create</button >
//                         </div >
//                     </div >
//                 </form >
//             </div >
//             <div className="fill pt-2 pb-2"></div>
//         </div >
//     );
// }

// export default CreateRecipe;