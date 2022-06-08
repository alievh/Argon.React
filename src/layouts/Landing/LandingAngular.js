import React from "react";
import ButtonLink from "../../components/Buttons/ButtonLink";

function LandingAngular() {
  return (
    <section className="landing-angular">
      <div className="container">
        <div className="p-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>We made website building easier for you.</h3>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture.
              </p>
            </div>
            <div className="col-lg-3 ms-lg-auto">
              <ButtonLink
                className={"intro-buttons__download me-2"}
                location={
                  "https://demos.creative-tim.com/argon-design-system-angular/#/home"
                }
                text={<span>Download Angular</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAngular;
