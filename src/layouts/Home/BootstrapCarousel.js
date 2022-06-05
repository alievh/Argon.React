import React from "react";
import ButtonLink from "../../components/ButtonLink";
import Separator from "../../components/Separator";

function BootstrapCarousel() {
  return (
    <section className="bootstrap-carousel">
      <div className="container">
        <div className="row py-64p d-flex justify-content-between">
          <div className="col-lg-5">
            <h1 className="mb-2">Bootstrap carousel</h1>
            <p className="mt-4 mb-3">
              Argon Design System comes with four pre-built pages to help you
              get started faster. You can change the text and images and you're
              good to go.
            </p>
            <ButtonLink location={"https://demos.creative-tim.com/argon-design-system-angular/#/home"} text={<span>See all components</span>} className={"intro-buttons__download d-inline-block mt-4"} />
          </div>
          <div className="col-lg-6">
              
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default BootstrapCarousel;
