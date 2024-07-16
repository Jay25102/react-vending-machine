import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const ProteinBar = function() {

    return (
        <div className="item">
            <div>Displaying Protein Bar</div>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.transparentlabs.com%2Fcdn%2Fshop%2Ffiles%2FProtein_Render.png%3Fv%3D1695127217&f=1&nofb=1&ipt=12d48550eebb028af4116fa2f24733171719b9bb197232fea98003f3d4a9a7f0&ipo=images"/>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export default ProteinBar;