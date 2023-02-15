import React from 'react'
import { Link, Outlet} from 'react-router-dom'
const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">Q-Less Transportation System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navItems" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignUpPage">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default NavBar