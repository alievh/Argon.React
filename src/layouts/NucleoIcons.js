import React from "react";
import ButtonLink from "../components/ButtonLink";
import Heading from "../components/Heading";

function NucleoIcons() {
  return (
    <section className="nucleo-icons">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <Heading className={"mb-1 heading"} content={"Nucleo Icons"} />
            <p className="mb-2">
              The official package contains over 21.000 icons which are looking
              great in combination with Argon Design System. Make sure you check
              all of them and use those that you like the most.
            </p>
            <div className="btn-wrapper mt-5">
                <ButtonLink className={"btn btn-primary me-2"} location={"https://demos.creative-tim.com/argon-design-system-angular/#/home"} text={"VIEW DEMO ICONS"} />
                <ButtonLink className={"btn btn-dark"} location={"https://nucleoapp.com/?ref=1712"} text={"VIEW ALL ICONS"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NucleoIcons;
