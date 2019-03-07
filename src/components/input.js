import React from 'react';

var Input = (props) => {
  return (
    <div>
      <input placeholder='type here, please' onChange={props.onChange}/>
      <button onClick={props.onClick}>Press</button>
    </div>
  )
}

export default Input;