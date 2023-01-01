import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
    {
        title: "Improving and distrusts instantly",
        text: "From they fine john he give of rich he. They age and draw mers like, improving and distruts may instantly was household applauded.",
    },
    {
        title: "Become the tended active",
        text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on beccome he tended active enable to.",
    },
    {
        title: "Message or aim nothing",
        text: "Led ask possible mistress relation elegance eat likewise detating. By message or aim nothing amongst chiefly adress.",
    },
    {
        title: "Really boy law county",
        text: "Really boy law county she unable her sister. Feet you off it's like six. Among siz are leave law bull now in built table in an rapid flush.",
    },
];

export const Features = () => {
    return (
        <div className="gpt__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => {
                    return (
                        <Feature
                            title={item.title}
                            text={item.text}
                            key={item.title + index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
