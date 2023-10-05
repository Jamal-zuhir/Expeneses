import React, { useRef } from "react";
import img from "../images/m1.png";

const Form = (props) => {
  let titleRef = useRef();
  let valueRef = useRef();
  let DateRef = useRef();
  let DescriptionRef = useRef();

  const handelRefrch = (event) => {
    event.preventDefault();
    if (
      titleRef.current.value !== "" &&
      valueRef.current.value !== "" &&
      DescriptionRef.current.value !== "" &&
      DateRef !== ""
    ) {
      let expense = {
        title: titleRef.current.value,
        value: valueRef.current.value,
        date: DateRef.current.value,
        description: DescriptionRef.current.value,
      };
      props.callbackExpenseForm(expense);
      titleRef.current.value = "";
      valueRef.current.value = "";
      DateRef.current.value = "";
      DescriptionRef.current.value = "";
    }else {
        alert('Please Enter The Data')
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row tit">
            <h4 className="">wellcom to Momen Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <form className="row" onSubmit={handelRefrch}>
            <div className="mb-3 col-md-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control addTitle"
                aria-describedby=""
                ref={titleRef}
              />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control addDate"
                aria-describedby=""
                ref={DateRef}
              />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Value</label>
              <input
                type="number"
                className="form-control addValue"
                aria-describedby=""
                ref={valueRef}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="title" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control addDescrption"
                aria-describedby=""
                ref={DescriptionRef}
              />
            </div>
            <div className="mb-3 col-md-12 text-right">
              <button type="submit" className="btn btn-primary addBtn">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
