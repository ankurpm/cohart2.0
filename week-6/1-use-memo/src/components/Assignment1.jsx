import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    console.log("assignment 1 re-rendered")
    
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(() =>{
        console.log("inside useMemo")
        let result = 0
        for(var i=input; i>0; i--){
            if(result == 0){
                result = 1
            }
            result = i*result
    
        }
        return result
    },[input])

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}