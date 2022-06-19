import React from "react";
import NavBarMenu from "./components/NavBarMenu";
import { BrowserRouter as Router } from "react-router-dom";

function App (){
    return(
        <div>
            <Router>
                <NavBarMenu/>
            </Router>
        </div>
    )
}

export default App;
