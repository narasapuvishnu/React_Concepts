import {useState} from 'react'
import SecondComp from './SecondComp';
import ThirdComp from './ThirdComp';

const FirstComp = () =>{

    const [SampCond,setSampCond] = useState("true")
    
    return(
        <>
            <p>{SampCond === "true"? <SecondComp /> : <ThirdComp />}</p>
        </>
    )
}

export default FirstComp;