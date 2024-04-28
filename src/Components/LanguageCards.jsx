/*
    Copyright (C), 2023-2024, Sara Echeverria (bl33h)
    Author: Sara Echeverria
    Edited by: Cora (kiricora)
    FileName: LanguageCards.jsx
    Version: I
    Creation: 02/06/2023
    Last modification: 04/27/2024
*/

import { m } from "framer-motion";
import { useState, useEffect } from "react";
import { languages } from "../Constants/constants";

const LanguageCards = () => {
    const [cardHeight, setCardHeight] = useState(360);

    useEffect(() => {
        const handleResize = () => {
          // Adjust the height based on the screen width
            const newHeight = window.innerWidth < 480 ? 500 : 360;
    
            setCardHeight(newHeight);
        };
    
        // Initial call to set the height
        handleResize();
    
        // Event listener for window resize
        window.addEventListener("resize", handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="flex">
            {languages.map((language, index) => (
                <m.div
                initial={{ scale: 0.8 }}
                style={{ zIndex: `${index + 1}`, height: `${cardHeight}px` }}
                key={index}
                className= "card w-[300px] flex flex-col items-center bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
                >
                    <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
                        <img
                        className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 p-1 object-contain"
                        src={language.icon}
                        alt={language.title}
                        />
                        <span
                        className="text-xl text-center"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                        }}
                        >
                        {language.title}
                        </span>
                        <span
                        className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-1"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                        }}
                        >
                        {language.level}
                        </span>
                        <span
                        className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "400",
                        }}
                        >
                        {language.details}
                        </span>
                    </div>
                </m.div>
            ))}
        </div>
    );
};

export default LanguageCards;