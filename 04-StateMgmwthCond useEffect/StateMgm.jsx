
import {useState,useEffect} from 'react'

const StateMgm = () => {
    const [name,setName] = useState("balu")
    // console.log(name)
    // if(name === "balu")
    // {
    //     setName("Rajesh")
    // }
    // else
    // {
    //     setName("Vignesh") 

            // In useState, when we make changes to state variable again and again , it causes an infinite loop
            //Too many re-renders. React limits the number of renders to prevent an infinite loop.
    // }
    // return (
    //     <>
    //     <h1>Myself, {name}!</h1>
    //     </>
    // ),
    // useEffec() can be used to avoid infinite loop in useState

    useEffect(() =>{
        if(name === "bal"){
            setName("Dinesh")
        }
        else
        {
            setName("badri")
        }
    },[])

    return (
        <>
            <h1>Myself,{name}</h1>
        </>
    )
}

export default StateMgm;