import React, {useState} from "react";

const Add = (props) =>
{

    const[count, setCount]= useState(0);
    const[buttonClicked, setButtonClicked] = useState(false);

    const handleClick= (x) => {
        if (x === 'increment') {
            setCount(count+1);
           
        }
        else if(x === 'decrement' && count > 1) {
            setCount(count - 2);
            
        }
        setButtonClicked(true);

    };
    return (
        <div>
            <p>the count is {count}</p>
            <button onClick={() =>
            handleClick('increment')}> Add </button>

            <button onClick={() =>
            handleClick('decrement')}> Sub </button>
            {buttonClicked? <p>Button Clicked!</p> : <p></p>}

        </div>
    );

};

export default Add;