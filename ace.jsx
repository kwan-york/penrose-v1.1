import React from "react";
import ReactDOM from "react-dom/client";
import "./ace.css";
import { AnimatedPinDemo } from "./3d-pin";

function AceApp() {
    return (
        <AnimatedPinDemo />
    );
}

ReactDOM.createRoot(document.getElementById("ace-root")).render(
    <React.StrictMode>
        <AceApp />
    </React.StrictMode>

);