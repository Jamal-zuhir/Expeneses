import React from "react";

const Row = (props) => {
  
  const deleting = () => {
    props.deleteExpense(props.item);
  };
  return (
    <>
      <tr>
        <td> {props.item.title} </td>
        <td> {props.item.date}</td>
        <td> {props.item.value}</td>
        <td colSpan="2">any descrption can be here </td>
        <td className="text-right">
          <i className="fa fa-trash-o" aria-hidden="true" onClick={deleting} />
        </td>
      </tr>
    </>
  );
};

export default Row;
