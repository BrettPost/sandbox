'use client'
import React, { useState } from 'react';

import NumberTile from './NumberTile';
import OperatorTile from './OperatorTile';
import ResultField from './ExpressionField';

import { BiSend } from 'react-icons/bi';

export default function Calculator() {
  const [expression, setExpression] = useState(['']);
  const [number, setNumber] = useState<string>('')

  // Concatenates the next digit onto the current number
  const numberInput = (newNumber: string) => {
    setNumber(number + newNumber);
  }

  // Add current number and operator to the expression
  function addExpression(newOperator: string) {
    setExpression([...expression, number, newOperator]);
    setNumber('');
    expression.map((item) => console.log(item));
  }

  return (
    <>
      <div>
        <ResultField />
      </div>
      <div>
        <NumberTile digit={1} callback={numberInput}/>
        <NumberTile digit={2} callback={numberInput}/>
        <NumberTile digit={3} callback={numberInput}/>
        <NumberTile digit={4} callback={numberInput}/>
        <NumberTile digit={5} callback={numberInput}/>
        <NumberTile digit={6} callback={numberInput}/>
        <NumberTile digit={7} callback={numberInput}/>
        <NumberTile digit={8} callback={numberInput}/>
        <NumberTile digit={9} callback={numberInput}/>
        <NumberTile digit={0} callback={numberInput}/>
      </div>
      <div>
        <OperatorTile operator="+" callback={addExpression} />
        <OperatorTile operator="-" callback={addExpression} />
        <OperatorTile operator="*" callback={addExpression} />
        <OperatorTile operator="/" callback={addExpression} />
        {/* <OperatorTile operator={<BiSend />} callback={addExpression} /> */}
      </div>
    </>
      
    );
}