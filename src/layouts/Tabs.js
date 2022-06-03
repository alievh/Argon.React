import React from "react";
import CategoryHeading from "../components/CategoryHeading";
import ProgressBar from "../components/ProgressBar";
import SubHeading from "../components/SubHeading";

function Tabs() {
  return (
    <section className="tabs">
      <div className="container">
        <div className="row">
          <SubHeading className={"mb-4 sub-heading"} content={"Tabs"} />
          <div className="col-lg-6">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"with icons"}
            />
          </div>
          <div className="col-lg-6">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"with text"}
            />
          </div>
        </div>
        <div className="row mt-96p  d-flex justify-content-between">
          <div className="col-lg-5">
            <SubHeading
              className={"mb-4 sub-heading"}
              content={"Progress bars"}
            />
            <ProgressBar
              progressClassName={"progress-bar w-40 bg-default"}
              percentage={"40"}
            />
            <ProgressBar
              progressClassName={"progress-bar w-60"}
              percentage={"60"}
            />
          </div>
          <div className="col-lg-5">
            <SubHeading className={"mb-4 sub-heading"} content={"Pagination"} />
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-lg-5">
            <SubHeading
              className={"mb-4 sub-heading"}
              content={"Navigation Pills"}
            />
          </div>
          <div className="col-lg-5">
            <SubHeading className={"mb-4 sub-heading"} content={"Labels"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
