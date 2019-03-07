import React from 'react';

var Priority = (props) => {
  if(props.prio) {
    return (
      <div class='todolist'>
        <span>{props.prio}</span>
        <button onClick = {props.onRemove}>Remove from Prio</button>
      </div>
    )
  }
  return (
    <div>
    </div>
  )
};

export default Priority;