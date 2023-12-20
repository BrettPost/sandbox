import React from "react";

export default function OperatorTile(props: {operator: any, callback: any}) {

    // Give the Operator back to the parent component
    function operatorInput() {
        console.log(props.operator);

        props.callback(props.operator);
    }

    return (
        <>
            <button type="button" onClick={operatorInput}>
                <div className="box-border h-16 w-16 p-4 border-4">
                    {props.operator}
                </div>
            </button>
            
        </>
        
    );
} 