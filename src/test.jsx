import React, {useState} from "react";

const Test = () => {
    const[val, setVal] = useState('')
    const[add, setAdd] = useState(['']);

    const handleFunction = (e)=> {
        setVal(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setAdd([...add, val])
        setVal('')
    }

    return (
        <div id="container">
            <form>
                <input type="text" 
                value={val} 
                onChange = {handleFunction}/>
                <button onClick={handleClick}>Submit </button>
            </form>
        
      <div id="rows">
        {add.map((x)=>(
            <div><li>{x}</li></div>
        ))}
    
        </div>
        </div>
    );

};
export default Test;