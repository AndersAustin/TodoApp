import React from 'react';

var Input = (props) => {
  return (
    <div>
      <input placeholder='type here, bitch' onChange={props.onChange}/>
      <button onClick={props.onClick}>Press</button>
    </div>
  )
}

export default Input;