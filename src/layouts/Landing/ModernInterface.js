import React from "react";
import LandingIcon from "../../components/UI/LandingIcon";
import { BiBuildings } from "react-icons/bi";
import InterfaceCard from "../../components/UI/InterfaceCard";
import Separator from "../../components/UI/Separator";
import Links from "../../components/Buttons/Links";
import { BiHappyBeaming } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";

function ModernInterface() {
  return (
    <section className="modern-interface">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-lg-2 ms-lg-auto">
              <div className="ps-md-5">
                  <img className="img-center img-fluid" src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/ill/ill-2.svg" alt="Angular" />
              </div>
          </div>
          <div className="col-lg-6 order-lg-1 mt-5">
            <div className="px-3 d-flex modern-interface__left">
              <div>
                <LandingIcon
                  icon={<BiBuildings />}
                  iconBackground={"spanbg-white span-primary shadow"}
                />
              </div>
              <div className="ps-4">
                <h4>Modern Interface</h4>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever.
                </p>
              </div>
            </div>
            <InterfaceCard
              interfaceIcon={
                <LandingIcon
                  icon={<BiHappyBeaming />}
                  iconBackground={"spanbg-success span-white shadow"}
                />
              }
              interfaceHeading={"Awesome Support"}
              interfaceContent={
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
              }
              headingClass={"text-success"}
              interfaceLink={
                <Links
                  className={"btn btn-link text-success p-0"}
                  content={"Learn more"}
                />
              }
            />
            <InterfaceCard
              interfaceIcon={
                <LandingIcon
                  icon={<MdTouchApp />}
                  iconBackground={"spanbg-warning span-white shadow"}
                />
              }
              interfaceHeading={"Modular Components"}
              interfaceContent={
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
              }
              headingClass={"text-warning"}
              interfaceLink={
                <Links
                  className={"btn btn-link text-warning p-0"}
                  content={"Learn more"}
                />
              }
            />
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default ModernInterface;
