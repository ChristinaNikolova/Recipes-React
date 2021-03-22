import './Home.css';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="jumbotron">
                <h1 className="display-3">Welcome to Recipes!</h1>
                <p className="lead">
                    <a className="bold"> Register </a>
                    or
                    <a className="bold"> Login </a>
                    now to see the most delicious recipes!</p>
                <hr className="my-4" />
                <p className="custom-font">Don't be afraid to adapt new ingredients into your
                own techniques, and traditional ingredients into new recipes.
                </p>
                <img className="image-home" src="https://d23.com/app/uploads/2015/09/recipes-banner1180x600.jpg"></img>
                <p className="lead">
                    <a className="btn btn-primary btn-lg mt-4 mr-2" role="button">See our recipes</a>
                    <a className="btn btn-primary btn-lg mt-4" role="button">Create new recipe</a>
                </p>
            </div>
        </div>
    );
}

export default Home;