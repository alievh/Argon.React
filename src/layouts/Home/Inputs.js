import React from "react";
import SubHeading from "../../components/SubHeading";
import CategoryHeading from "../../components/CategoryHeading";
import Input from "../../components/Input";

function Inputs() {
  return (
    <section className="inputs">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12">
            <SubHeading className={"mb-4 sub-heading"} content={"Inputs"} />
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"form controls"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
              disabled={false}
            />
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Search"}
              disabled={false}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
              disabled={true}
            />
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Birthday"}
              disabled={false}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-success"}
              type={"text"}
              placeHolder={"Success"}
              disabled={false}
            />
            <Input
              divClassName={"form-group-main"}
              inputClassName={"input-warning"}
              type={"text"}
              placeHolder={"Error Input"}
              disabled={false}
            />
          </div>
        </div>
      </div>
      <div className="py-5 bgcolor-secondary">
        <div className="container">
        <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"form controls(alternative)"}
            />
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
              disabled={false}
            />
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Search"}
              disabled={false}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Regular"}
              disabled={true}
            />
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-default"}
              type={"text"}
              placeHolder={"Birthday"}
              disabled={false}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-success"}
              type={"text"}
              placeHolder={"Success"}
              disabled={false}
            />
            <Input
              divClassName={"form-group-alternative"}
              inputClassName={"input-warning"}
              type={"text"}
              placeHolder={"Error Input"}
              disabled={false}
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Inputs;
