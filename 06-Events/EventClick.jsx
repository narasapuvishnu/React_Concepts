import {useState} from 'react';
import './style.css';

const ClickEvent = () => {
    const[num,setNum] = useState(0);

    const Decrement = () =>
    {
        if(num > 0)
        {
            setNum(num-1)
        }
    }
    return(
        <>
            <h2>{num}</h2>
            <button className = "btn" onClick = {() => setNum(num+1)}>Increment</button>
            <button className = "btn" onClick = {Decrement}>Decrement</button>
            <button className = "btn" onClick = {()=> setNum(0)}>Reset</button>
        </>
    )
}

export default ClickEvent;