import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 
//Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const x = useRef(0);
    const [, forceRender] = useState(0);

    useEffect(()=>{
        console.log("Value of x:"+x.current)
        x.current = x.current + 1;
    })
    
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };
   

    return (
        <div>
            {console.log("value of x in div :"+x.current)}
            <p>This component has rendered {x.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};