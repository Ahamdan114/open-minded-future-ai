import React from "react";

import {
    Footer,
    Blog,
    Possibility,
    Features,
    WhatGPT3,
    Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import Favicon from "./components/Favicon.jsx";

import "./App.css";
const App = () => {
    return (
        <div className="App">
            <Favicon />
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};
export default App;
