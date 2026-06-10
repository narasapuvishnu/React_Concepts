import {useState} from 'react'

const StateMgm = () => {
    const [count,setCount] = useState(0)
    return (
        <>
           <p>Count:{count}</p>
            <button onClick = {()=> setCount(count+1)}>
                Increment count
            </button>
            <br/>
            <br/>
            <button onClick = {()=> setCount(count-1)}>Decrement count</button>
        </>
    )
}


export default StateMgm;

