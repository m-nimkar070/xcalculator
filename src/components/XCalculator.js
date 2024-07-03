import React, { useState } from "react";

const XCalculator = () => {
    const [input , setInput] = useState('');
    const [output , setOutput] = useState('');

    const handleChnge =(e)=>{
        setInput(input + (e.target.value))
    }
    const handleSubmit =()=>{
        try {
            if(input){
                setOutput(eval(input));
            }else{
                throw new Error("Need Expression !")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleClear = () =>{
        setInput('');
        setOutput('');
    }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" onChange={handleChnge}value={input}/>
        <div>{output}</div>
      <div className="btn__Container">
        <div className="btn__Numbers">
          <button type="button" value='7' onClick={(e)=>handleChnge(e)}>7</button>
          <button type="button" value='8' onClick={(e)=>handleChnge(e)}>8</button>
          <button type="button" value='9' onClick={(e)=>handleChnge(e)}>9</button>
          <button type="button" value='4' onClick={(e)=>handleChnge(e)}>4</button>
          <button type="button" value='5' onClick={(e)=>handleChnge(e)}>5</button>
          <button type="button" value='6' onClick={(e)=>handleChnge(e)}>6</button>
          <button type="button" value='1' onClick={(e)=>handleChnge(e)}>1</button>
          <button type="button" value='2' onClick={(e)=>handleChnge(e)}>2</button>
          <button type="button" value='3' onClick={(e)=>handleChnge(e)}>3</button>
          <button type="button" value='C' onClick={handleClear}>C</button>
          <button type="button" value='0' onClick={(e)=>handleChnge(e)}>0</button>
          <button type="button"  onClick={handleSubmit}>=</button>
        </div>
        <div className="btn__Operator">
          <button type="button" value='+' onClick={(e)=>handleChnge(e)}>+</button>
          <button type="button" value='-' onClick={(e)=>handleChnge(e)}>-</button>
          <button type="button" value='*' onClick={(e)=>handleChnge(e)}>*</button>
          <button type="button" value='/' onClick={(e)=>handleChnge(e)}>/</button>
        </div>
      </div>
    </div>
  );
};

export default XCalculator;
