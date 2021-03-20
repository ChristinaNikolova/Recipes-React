import './Header.css';

function Header() {
    return (
        <div className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand">Recipes</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">My Own Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">My Favourite Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Administration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Register</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger ml-1">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;