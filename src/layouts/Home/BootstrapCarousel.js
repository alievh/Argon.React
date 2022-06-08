import React from "react";
import ButtonLink from "../../components/Buttons/ButtonLink";
import Separator from "../../components/UI/Separator";

function BootstrapCarousel() {
  return (
    <section className="bootstrap-carousel">
      <div className="container">
        <div className="row py-64p d-flex align-items-center justify-content-between">
          <div className="col-lg-5">
            <h1 className="mb-2">Bootstrap carousel</h1>
            <p className="mt-4 mb-3">
              Argon Design System comes with four pre-built pages to help you
              get started faster. You can change the text and images and you're
              good to go.
            </p>
            <ButtonLink
              location={
                "https://demos.creative-tim.com/argon-design-system-angular/#/home"
              }
              text={<span>See all components</span>}
              className={"intro-buttons__download d-inline-block mt-4"}
            />
          </div>
          <div className="col-lg-6">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-1-1200x1000.jpg"
                    className="d-block w-100"
                    alt="Carousel Img"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-2-1200x1000.jpg"
                    className="d-block w-100"
                    alt="Carousel Img"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default BootstrapCarousel;
