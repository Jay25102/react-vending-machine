import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Chips = function() {

    return (
        <div className="item">
            <div>Displaying Chips</div>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-chips-lays-chips-pack-png-transparent-image-1200.png&f=1&nofb=1&ipt=c7e0fd7d61f6a364a61f5fa78d32639c0cc8e148eb8be19f6949db78a0e63c0d&ipo=images"/>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export default Chips;