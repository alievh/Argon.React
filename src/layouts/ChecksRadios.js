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
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"CHECKBOXES"}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"uncheckedcheckbox"}
                forFor={"uncheckedcheckbox"}
                type={"checkbox"}
                check={false}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Unchecked"}
                disabled={false}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"checkedcheckbox"}
                forFor={"checkedcheckbox"}
                type={"checkbox"}
                check={true}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Checked"}
                disabled={false}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"disableduncheckedcheckbox"}
                forFor={"disableduncheckedcheckbox"}
                type={"checkbox"}
                check={false}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Disabled Unchecked"}
                disabled={true}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"disabledcheckedcheckbox"}
                forFor={"disabledcheckedcheckbox"}
                type={"checkbox"}
                check={true}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Disabled Checked"}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"RADIOS"}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"activeradio"}
                forFor={"uncheckedradio"}
                type={"radio"}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Unchecked"}
                check={false}
                disabled={false}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"activeradio"}
                forFor={"checkedradio"}
                type={"radio"}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Checked"}
                check={true}
                disabled={false}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"disableduncheckedradio"}
                forFor={"disableduncheckedradio"}
                type={"radio"}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Disabled unchecked"}
                check={false}
                disabled={true}
              />
              <CheckRadio
                divClassName={"form-check"}
                forName={"disabledcheckedradio"}
                forFor={"disabledcheckedradio"}
                type={"radio"}
                inputClassName={"form-check-input p-2 mb-3"}
                labelClassName={"form-check-label pt-1"}
                content={"Disabled checkbox"}
                check={true}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"TOGGLE BUTTONS"}
              />
              <CheckRadio
                divClassName={"form-check form-switch"}
                forName={"uncheckedswitch"}
                forFor={"uncheckedswitch"}
                type={"checkbox"}
                check={false}
                inputClassName={"form-check-input mb-2"}
                labelClassName={"form-check-label"}
                disabled={false}
                role={"switch"}
              />
              <CheckRadio
                divClassName={"form-check form-switch"}
                forName={"uncheckedswitch"}
                forFor={"uncheckedswitch"}
                type={"checkbox"}
                check={true}
                inputClassName={"form-check-input"}
                labelClassName={"form-check-label"}
                disabled={false}
                role={"switch"}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="checkbox d-flex flex-column">
              <CategoryHeading
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"SLIDERS"}
              />
              <CheckRadio
                divClassName={"form-check w-100 ps-0"}
                type={"range"}
                check={true}
                inputClassName={"form-range"}
                disabled={false}
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
