import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { Reset } from "./styles/Reset.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div>snapsnapturtle.eu</div>
        <GlobalStyles />
        <Reset />
    </React.StrictMode>,
);
