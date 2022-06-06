import React from "react";
import Tab from "../../components/UI/Tab";
import CategoryHeading from "../../components/UI/CategoryHeading";
import ProgressBar from "../../components/UI/ProgressBar";
import SubHeading from "../../components/SubHeading";
import NavigationPill from "../../components/UI/NavigationPill";
import { FaReact, FaComment } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import BadgePill from "../../components/UI/BadgePill";

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
            <Tab />
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
              className={"mb-5 sub-heading"}
              content={"Navigation Pills"}
            />
            <ul className="d-flex navigation-pills">
              <li className="navigation-pills__list">
                <NavigationPill
                  icon={<FaReact />}
                  className={"navigation-pills__pill"}
                />
              </li>
              <li className="navigation-pills__list">
                <NavigationPill
                  icon={<FaComment />}
                  className={"navigation-pills__pill"}
                />
              </li>
              <li className="navigation-pills__list">
                <NavigationPill
                  icon={<IoMdCloudDownload />}
                  className={"navigation-pills__pill"}
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <SubHeading className={"mb-5 sub-heading"} content={"Labels"} />
            <ul className="d-flex">
              <li>
                <BadgePill
                  content={"primary"}
                  className={"badge-pill spanbg-primary span-primary"}
                />
              </li>
              <li>
                <BadgePill
                  content={"success"}
                  className={"badge-pill spanbg-success span-success"}
                />
              </li>
              <li>
                <BadgePill
                  content={"danger"}
                  className={"badge-pill spanbg-danger span-danger"}
                />
              </li>
              <li>
                <BadgePill
                  content={"warning"}
                  className={"badge-pill spanbg-warning span-warning"}
                />
              </li>
              <li>
                <BadgePill
                  content={"info"}
                  className={"badge-pill spanbg-info span-info"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
