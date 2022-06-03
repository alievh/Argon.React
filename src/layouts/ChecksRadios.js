import React from "react";
import CheckRadio from "../components/CheckRadio";
import CategoryHeading from "../components/CategoryHeading";
import SubHeading from "../components/SubHeading";
import Menu from "../components/Menu";
import { BsHeartFill } from "react-icons/bs";
import { IoMdSettings, IoIosMegaphone } from "react-icons/io";

function ChecksRadios() {
  return (
    <section className="checks-radios">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 mt-5 category-heading"}
                textClassName={"text-uppercase"}
                content={"CHECKBOXES"}
              />
              <CheckRadio
                forName={"UncheckedCheckbox"}
                type={"checkbox"}
                inputClassName={"form-check-input"}
                labelClassName={"form-check-label"}
                content={"Unchecked"}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 mt-5 category-heading"}
                textClassName={"text-uppercase"}
                content={"RADIOS"}
              />
              <CheckRadio
                forName={"UncheckedCheckbox"}
                type={"checkbox"}
                inputClassName={"form-check-input"}
                labelClassName={"form-check-label"}
                content={"Unchecked"}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 mt-5 category-heading"}
                textClassName={"text-uppercase"}
                content={"TOGGLE BUTTONS"}
              />
              <CheckRadio
                forName={"UncheckedCheckbox"}
                type={"checkbox"}
                inputClassName={"form-check-input"}
                labelClassName={"form-check-label"}
                content={"Unchecked"}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 mt-5 category-heading"}
                textClassName={"text-uppercase"}
                content={"SLIDERS"}
              />
              <CheckRadio
                forName={"UncheckedCheckbox"}
                type={"checkbox"}
                inputClassName={"form-check-input"}
                labelClassName={"form-check-label"}
                content={"Unchecked"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-64p">
          <div className="col-lg-12">
            <SubHeading className={"mb-4 sub-heading"} content={"Menu"} />
            <div className="row">
              <div className="col-lg-6">
                <CategoryHeading
                  divClassName={"mb-3 category-heading"}
                  textClassName={"text-uppercase"}
                  content={"WITH TEXT"}
                />
                <Menu
                  className={"bg-color-primary py-3 border-radius svg-lg"}
                  contentFirst={"Discover"}
                  contentSecond={"Profile"}
                  contentThird={"Settings"}
                  logoContent={"MENU"}
                />
              </div>
              <div className="col-lg-6">
                <CategoryHeading
                  divClassName={"mb-3 category-heading"}
                  textClassName={"text-uppercase"}
                  content={"WITH ICONS"}
                />
                <Menu
                  className={"bg-color-success py-3 border-radius svg-lg"}
                  contentFirst={<BsHeartFill />}
                  contentSecond={<IoIosMegaphone />}
                  contentThird={<IoMdSettings />}
                  logoContent={"MENU"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChecksRadios;
