import React from "react";
import SubHeading from "../components/SubHeading";
import CategoryHeading from "../components/CategoryHeading";
import Input from "../components/Input";

function Inputs() {
  return (
    <section className="inputs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SubHeading className={"mb-4 sub-heading"} content={"Inputs"} />
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"FORM CONTROLS"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
            />
            <Input
              divClassName={"form-group"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Search"}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
            />
            <Input
              divClassName={"form-group"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Birthday"}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group"}
              inputClassName={"input-success"}
              type={"text"}
              placeHolder={"Success"}
            />
            <Input
              divClassName={"form-group"}
              inputClassName={"input-warning"}
              type={"text"}
              placeHolder={"Error Input"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inputs;
