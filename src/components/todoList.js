import React from 'react';
import ListEntry from './todoListEntry.js';

const List = (props) => {
  return (
    <ul> {props.list.map(item => {
      return (<ListEntry item={item}/>)
    })} </ul>
  );
}

export default List;