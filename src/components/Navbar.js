import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const styles = {
        navBar: {
            width: "100%"
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={styles.navBar}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link text-white" to="/">GJB</Link>
                        <Link className="nav-link text-white" to="/about">About</Link>
                        <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link text-white" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;