import React, {useState} from "react";
const Todo = () => {
    const[val, setVal] = useState('');
    const[add, setAdd] = useState([]);
    const[alertMessage, setAlertMessage] = useState("");

    const handleFunction = (e) => {
        
        setVal(e.target.value)
        
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (val.trim() !== ''){
            setAdd([...add,{text: val, completed: false}]);
            setVal('');

           setAlertMessage("Ohh great! , You got a new task.");
            setTimeout(() => {
                setAlertMessage("");
            }, 1000);
            }
        else {
            setAlertMessage("Please enter a non-empty task!");
            setTimeout(() => {
                setAlertMessage("");
              }, 1000);
        }
    };
    const handleCheckbox = (index) => {
        const updatedAdd = [...add];
        updatedAdd[index].completed = !updatedAdd[index].completed;
        setAdd(updatedAdd);
    }
    

    

    return (
        <div id="container">
            <form>
                <input type="text" value={val} onChange={handleFunction}/>
                <div><button onClick={handleClick}>Add Task</button>
                   </div>
            </form>
            <div id="c">
                {add.map((add, index)=> (
                    <div key={index}>
                        <input type="checkbox" 
                        checked = {add.completed} 
                        onChange ={() => handleCheckbox(index)} />
                        <span style={{ textDecoration: add.completed? "line-through" : ""}}>
                            {add.text}
                        </span>
                        </div>
                ))}
            </div>
            {alertMessage && (
          <div className="alert">
          {alertMessage}
          </div>
            )}
        </div>
    );
};

export default Todo;