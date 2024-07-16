import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Powerade from "./Powerade";
import ProteinBar from "./ProteinBar";
import Chips from "./Chips";
import VendingNav from "./VendingNav";
import "./VendingMachine.css";

const VendingMachine = function() {

    return (
        <div className="Vending-Machine">
            <h3>Select an item!</h3>
            <BrowserRouter>
            <VendingNav/>
                <Routes>
                    <Route path="/items/Powerade" element={<Powerade/>}/>
                    <Route path="/items/Proteinbar" element={<ProteinBar/>}/>
                    <Route path="/items/Chips" element={<Chips/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;