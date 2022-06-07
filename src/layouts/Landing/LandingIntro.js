import React from "react";
import ButtonLink from "../../components/Buttons/ButtonLink";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdCloudDownload } from "react-icons/io";
import Separator from "../../components/UI/Separator";

function LandingIntro() {
  return (
    <section className="landing-intro">
      <div className="container py-64p">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              A beautiful Design System <span>completed with examples</span>
            </h1>
            <p className="mt-4 mb-3">
              The design system comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </p>
            <div className="btn-wrapper mt-5">
              <ButtonLink
                className={"intro-buttons__download me-2"}
                location={
                  "https://demos.creative-tim.com/argon-design-system-angular/#/home"
                }
                icon={<BiCodeAlt />}
                text={<span>Components</span>}
              />
              <ButtonLink
                className={"intro-buttons__download me-2"}
                location={
                  "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page&_ga=2.193174125.1313681844.1654508934-370503823.1653470544"
                }
                icon={<IoMdCloudDownload />}
                text={<span>Download Angular</span>}
              />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default LandingIntro;
