import React from "react";

const App = () => {

    const test = () => {

        for (var i = 0; i < 10; i++) {
            let h1 = document.createElement("h1");
            let button = document.createElement("button");

            button.innerHTML = "this is a test button";
            h1.innerHTML = "this is a test";

            document.body.appendChild(h1);
            document.body.appendChild(button);
        }
    }

    return (
        <React.Fragment>
            {test()}
        </React.Fragment>
    )
}

export default App;