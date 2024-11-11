import { Link } from "react-router-dom";
import AuthContext from './context/AuthContext'
import { useContext } from "react";

function Navbar() {
    const { isAuthenticated, logout } = useContext(AuthContext)

    retur(
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            { isAuthenticated ? (
                <>
                    <Link to='/services'>Services</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to='/login'>Login</Link>
            )}
            <Link to='/contact'>Contact</Link>
        </nav>
    )
}

export default Navbar