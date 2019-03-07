import React from 'react'

var ListEntry = (props) => {
  return (
    <div>
    <span onClick={() => props.setPrio(props.item)}>{props.item}</span>  <button onClick={props.doDelete} value={props.item}>x</button>
    </div>
  )
}

export default ListEntry;