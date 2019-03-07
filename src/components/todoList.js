import React from 'react';
import ListEntry from './todoListEntry.js';

const List = (props) => {
  return (
    <div> {props.list.map((item, i) => {
      return (<ListEntry index={i} item={item} setPrio={props.setPrio} doDelete={props.doDelete}/>)
    })} </div>
  );
}

export default List;