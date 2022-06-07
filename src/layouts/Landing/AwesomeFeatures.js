import React from "react";
import LandingIcon from "../../components/UI/LandingIcon";
import { AiTwotoneSetting, AiFillHtml5 } from "react-icons/ai";
import Heading from "../../components/UI/Heading";
import {RiEmotionHappyFill} from 'react-icons/ri';

function AwesomeFeatures() {
  return (
    <section className="awsome-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/promo-1.png"
              alt="Template Img"
              width="450px"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="awsome-features__left">
              <LandingIcon
                icon={<AiTwotoneSetting />}
                iconBackground={"spanbg-success span-success shadow"}
              />
              <Heading
                className={"mb-3 mt-5 heading"}
                content={"Awesome features"}
              />
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <ul className="mt-5 mb-3">
                <li>
                  <LandingIcon
                    icon={<AiTwotoneSetting />}
                    iconBackground={"spanbg-success span-success shadow me-3"}
                  />
                  <h6>Carefully crafted components</h6>
                </li>
                <li>
                  <LandingIcon
                    icon={<AiFillHtml5 />}
                    iconBackground={"spanbg-success span-success shadow me-3"}
                  />
                  <h6>Amazing page examples</h6>
                </li>
                <li>
                  <LandingIcon
                    icon={<RiEmotionHappyFill />}
                    iconBackground={"spanbg-success span-success shadow me-3"}
                  />
                  <h6>Super friendly support team</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwesomeFeatures;
