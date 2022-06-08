import React from "react";
import Avatar from "../../components/UI/Avatar";
import Heading from "../../components/UI/Heading";
import SocailLink from "../../components/UI/SocailLink";
import { FaTwitter, FaDribbble, FaFacebookF } from "react-icons/fa";

function AmazingTeam() {
  return (
    <section className="amazing-team">
      <div className="container">
        <div className="row amazing-team__top mb-96p justify-content-center">
          <div className="col-lg-8">
            <Heading className={"mb-3 heading"} content={"The amazing Team"} />
            <p>
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div className="row amazing-team__bottom">
          <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="px-4">
              <Avatar
                imgClass={"rounded-circle img-fluid shadow"}
                src={
                  "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-1-800x800.jpg"
                }
                alt={"Ryan Avatar"}
              />
              <div className="pt-4 text-center">
                <h5>
                  <span>Ryan Tompson</span>
                  <small>Web Developer</small>
                </h5>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <SocailLink
                  className={"bgcolor-warning text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaTwitter />}
                />
                <SocailLink
                  className={"bgcolor-warning text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaFacebookF />}
                />
                <SocailLink
                  className={"bgcolor-warning text-white shadow"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaDribbble />}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="px-4">
              <Avatar
                imgClass={"rounded-circle img-fluid shadow"}
                src={
                  "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-2-800x800.jpg"
                }
                alt={"Ryan Avatar"}
              />
              <div className="pt-4 text-center">
                <h5>
                  <span>Romina Hadid</span>
                  <small>Marketing Strategist</small>
                </h5>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <SocailLink
                  className={"bgcolor-primary text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaTwitter />}
                />
                <SocailLink
                  className={"bgcolor-primary text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaFacebookF />}
                />
                <SocailLink
                  className={"bgcolor-primary text-white shadow"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaDribbble />}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="px-4">
              <Avatar
                imgClass={"rounded-circle img-fluid shadow"}
                src={
                  "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-3-800x800.jpg"
                }
                alt={"Ryan Avatar"}
              />
              <div className="pt-4 text-center">
                <h5>
                  <span>Alexander Smith</span>
                  <small>UI/UX Designer</small>
                </h5>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <SocailLink
                  className={"bgcolor-info text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaTwitter />}
                />
                <SocailLink
                  className={"bgcolor-info text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaFacebookF />}
                />
                <SocailLink
                  className={"bgcolor-info text-white shadow"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaDribbble />}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="px-4">
              <Avatar
                imgClass={"rounded-circle img-fluid shadow"}
                src={
                  "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-4-800x800.jpg"
                }
                alt={"Ryan Avatar"}
              />
              <div className="pt-4 text-center">
                <h5>
                  <span>John Doe</span>
                  <small>Founder and CEO</small>
                </h5>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <SocailLink
                  className={"bgcolor-success text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaTwitter />}
                />
                <SocailLink
                  className={"bgcolor-success text-white shadow me-2"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaFacebookF />}
                />
                <SocailLink
                  className={"bgcolor-success text-white shadow"}
                  link={"#"}
                  target={"_blank"}
                  content={<FaDribbble />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmazingTeam;
