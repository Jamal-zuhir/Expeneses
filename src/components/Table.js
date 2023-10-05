import React from "react";
import Row from "./Row";

const Table = (props) => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <table className="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr id="addRow"></tr>
              {props.expenseData.map((ele,i) => (
                <Row item={ele} key={i} deleteExpense={props.deleteExpense}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
