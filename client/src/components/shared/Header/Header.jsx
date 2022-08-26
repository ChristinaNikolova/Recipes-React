import { Link, withRouter } from 'react-router-dom';
import toastr from 'toastr';

import * as authService from '../../../services/authService.js';

import './Header.css';

function Header({ isAdmin, isLoggedIn, clickHandler, history }) {
    const logout = () => {
        authService.logout();
        toastr.success('Successful logout', 'Success');
        history.push('/');
        clickHandler();
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/home" className="header-brand">Recipes</Link>
                <ul className="header-ul">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    {!isLoggedIn && <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>}
                    {!isLoggedIn && <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>}
                    <li className="nav-item"> <Link to="/categories" className="nav-link">Categories</Link></li>
                    <li className="nav-item"><Link to="/recipes" className="nav-link">Recipes</Link></li>
                    {isLoggedIn && <li className="nav-item"> <Link to="/users/own" className="nav-link">My Own Recipes</Link></li>}
                    {isLoggedIn && <li className="nav-item"><Link to="/users/favourite" className="nav-link">My Favourite Recipes</Link></li>}
                    {isLoggedIn && isAdmin && <li className="nav-item"><Link to="/admin/dashboard" className="nav-link">Administration</Link></li>}
                    {isLoggedIn && <li className="nav-item"><button className="special-btn danger" type="button" onClick={logout}>Logout</button></li>}
                </ul>
            </nav>
        </header>
    );
}

export default withRouter(Header);