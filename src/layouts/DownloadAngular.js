import React from "react";
import ButtonLink from "../components/Buttons/ButtonLink";
import ProgramLogo from "../components/UI/ProgramLogo";

function DownloadAngular() {
  return (
    <section className="download-angular">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>
              Do you love this awesome <span>Design System for Angular?</span>
            </h2>
            <p>
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the Design System in
              Angular. Start a new project or give an old Angular project a new
              look!
            </p>
            <div className="btn-wrapper mt-5">
            <ButtonLink
                className={"btn btn-primary me-2"}
                location={
                  "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section&_ga=2.199402413.2049681047.1653997155-370503823.1653470544"
                }
                text={"DOWNLOAD ANGULAR"}
              />
            </div>
            <div className="available-tech">
                <h4 className="my-5">Available on these technologies</h4>
            </div>
            <div className="row">
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section&_ga=2.233457437.2049681047.1653997155-370503823.1653470544"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"} imgClassName={"img-fluid"} />
                </div>
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section&_ga=2.229248671.2049681047.1653997155-370503823.1653470544"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"} imgClassName={"img-fluid"} />
                </div>
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section&_ga=2.229248671.2049681047.1653997155-370503823.1653470544"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"} imgClassName={"img-fluid"} />
                </div>
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section&_ga=2.167002813.2049681047.1653997155-370503823.1653470544"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"} imgClassName={"img-fluid"} />
                </div>
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section&_ga=2.167002813.2049681047.1653997155-370503823.1653470544"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"} imgClassName={"img-fluid"} />
                </div>
                <div className="col-lg-2 col-4">
                    <ProgramLogo location={"https://reactjs.org/?ref=creative-tim"} src={"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"} imgClassName={"img-fluid"} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadAngular;
