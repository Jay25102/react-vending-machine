import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Powerade = function() {

    return (
        <div className="item">
            <div>Displaying Powerade</div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cfacdn.com%2Fimg%2Forder%2Fmenu%2FOnline%2FDrinks%2FBottled%2F2022Powerade_Blue_1080x1080.png&f=1&nofb=1&ipt=ba7a8a113bc5b66bd1154d0f7a89aec1c9f1913ec706eebc6a736d2bdc9cea78&ipo=images"/>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export default Powerade;