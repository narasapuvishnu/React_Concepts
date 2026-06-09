import React from 'react'

// props will be the function parameter that receives data passed from parent component

const FirstComp = (props) => {
  const {name,model,year,color} = props.car

// car will be variable that passes assigned data from parent component to child component
// name , model , year , color will be keys that are passed has variables 

  return (
    <div>

      <div>{year}</div>
      <div>{name}</div>
      <div>{color}</div>
      <div>{model}</div>

    </div>
  )
}

export default FirstComp