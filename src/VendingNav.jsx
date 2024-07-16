import React from "react";
import { Link } from "react-router-dom";
import "./VendingNav.css";

const VendingNav = function() {
    
    return (
        <nav>
            <div className="link-background">
                <Link className="link" to="/items/Powerade">Powerade</Link>
                <Link className="link" to="/items/Proteinbar">Protein Bar</Link>
                <Link className="link" to="/items/Chips">Chips</Link>
            </div>
        </nav>
    )
}

export default VendingNav;