import { useState, useEffect } from "react";
import React from 'react'
import Typewriter from 'typewriter-effect'

export const UseTypingEffect = () => {
    return (
        <span className="App"><Typewriter options={{
            strings: ['Developer.', 'Programmer.', 'Reader.', 'Photographer.'],
            autoStart: true,
            loop: true,
        }} />

            {/* onInit={(typewriter) => {

                typewriter
                    .typeString("GeeksForGeeks")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcomes You")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();

            }}
        /> */}
        </span>
    );
}
