import React from "react";
import LandingIcon from "../../components/UI/LandingIcon";
import { GiAutoRepair } from "react-icons/gi";
import Heading from "../../components/UI/Heading";
import Links from "../../components/Buttons/Links";

function LandingCostumer() {
  return (
    <section className="landing-costumer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="landing-card shadow">
              <img
                className="landing-card__img"
                src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-1-1200x1000.jpg"
                alt="Card"
              />
              <div className="card-content">
                <h4 className="mb-2">Design System</h4>
                <p className="mt-4 mb-3">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ps-md-5 landing-costumer__right">
              <LandingIcon
                icon={<GiAutoRepair />}
                iconBackground={"mb-5 spanbg-warning span-warning shadow"}
              />
              <Heading className={"mb-5 heading"} content={"Our customers"} />
              <p className="first-paragraph mt-4 mb-3">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="mb-3">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <p className="mb-3">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <Links
                className={"btn btn-link text-warning p-0"}
                content={"A beautiful UI Kit for impactful websites"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingCostumer;
