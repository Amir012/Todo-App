import React from "react";


function Row(props) {
  return (
    <li key={props.index}>
      {props.item}
      <button onClick={() => props.Delvalue(props.index)}>Del</button>,
      <button onClick={() => props.Editvalue(props.item, props.index)}>Edit</button>
    </li>
  );
}
export default Row;
