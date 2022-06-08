import React from "react";
import Tab from "../../components/UI/Tab";
import CategoryHeading from "../../components/UI/CategoryHeading";
import ProgressBar from "../../components/UI/ProgressBar";
import SubHeading from "../../components/SubHeading";
import NavigationPill from "../../components/UI/NavigationPill";
import { FaReact, FaComment, FaBell } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlineCloudUpload } from "react-icons/md";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import BadgePill from "../../components/UI/BadgePill";

function Tabs() {
  return (
    <section className="tabs">
      <div className="container">
        <div className="row">
          <SubHeading className={"mb-4 sub-heading"} content={"Tabs"} />
          <div className="col-lg-6 tabs">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"with icons"}
            />
            <Tab
              firstIcon={<MdOutlineCloudUpload />}
              firstTab={"Home"}
              firstTarget={"home-tab"}
              secondTarget={"profile-tab"}
              thirdTarget={"messages-tab"}
              secondIcon={<FaBell />}
              secondTab={"Profile"}
              thirdIcon={<BsFillCalendarWeekFill />}
              thirdTab={"Messages"}
              firstTabText={
                <p>
                  Raw denim you probably haven`t heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.Raw denim you probably haven`t heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              }
              secondTabText={
                <p>
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </p>
              }
              thirdTabText={
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              }
            />
          </div>
          <div className="col-lg-6">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"with text"}
            />
            <Tab
              firstTab={"Home"}
              secondTab={"Profile"}
              thirdTab={"Messages"}
              firstTarget={"home-tab-second"}
              secondTarget={"profile-tab-second"}
              thirdTarget={"messages-tab-second"}
              firstTabText={
                <p>
                  Raw denim you probably haven`t heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.Raw denim you probably haven`t heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              }
              secondTabText={
                <p>
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </p>
              }
              thirdTabText={
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              }
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
            <div className="pagination">
              <ul className="d-flex">
                <li>
                  <NavigationPill
                    icon={'1'}
                    className={"navigation-pills__pill small me-2"}
                  />
                </li>
                <li>
                  <NavigationPill
                    icon={'2'}
                    className={"navigation-pills__pill small me-2"}
                  />
                </li>
                <li>
                  <NavigationPill
                    icon={'3'}
                    className={"navigation-pills__pill small me-2"}
                  />
                </li>
                <li>
                  <NavigationPill
                    icon={'4'}
                    className={"navigation-pills__pill small me-2"}
                  />
                </li>
                <li>
                  <NavigationPill
                    icon={'5'}
                    className={"navigation-pills__pill small me-2"}
                  />
                </li>
              </ul>
            </div>
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
