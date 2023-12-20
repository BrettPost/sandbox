import React, { useState, useEffect } from "react";

export default function NumberTile(props: {digit: number, callback: any}) {
    
    // Give the digit back to the parent component
    function numberInput() {
        console.log(props.digit);

        props.callback(props.digit);
    }

    return (
        <>
            <button type="button" onClick={numberInput}>
                <div className="box-border h-16 w-16 p-4 border-4">
                    {props.digit}
                </div>
            </button>
            
        </>
        
    );
} 