import React from "react";
import LandingCard from "../../components/UI/LandingCard";
import { GiCheckMark } from "react-icons/gi";
import { FaMosque } from "react-icons/fa";
import { IoMdPlanet } from "react-icons/io";

function LandingCards() {
  return (
    <section className="landing-cards">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card-row row row-grid">
              <LandingCard
                icon={<GiCheckMark />}
                iconBackground={"mb-4 spanbg-primary span-primary"}
                firstBadge={"Angular"}
                secondBadge={"Ng-Bootstrap"}
                thirdBadge={"Creative"}
                headingClass={"text-primary"}
                heading={"Download Argon"}
                btnClass={"btn btn-primary mt-4"}
                content={
                  "Argon is a great free UI package based on Angular that includes the most important components and features."
                }
                badgeClassName={"spanbg-primary span-primary badge-pill m-0"}
              />
              <LandingCard
                icon={<FaMosque />}
                iconBackground={"mb-4 spanbg-success span-success"}
                firstBadge={"Business"}
                secondBadge={"Vision"}
                thirdBadge={"Success"}
                headingClass={"text-success"}
                heading={"Build Something"}
                btnClass={"btn btn-success mt-4"}
                content={
                  "Argon is a great free UI package based on Angular that includes the most important components and features."
                }
                badgeClassName={"spanbg-success span-success badge-pill m-0"}
              />
              <LandingCard
                icon={<IoMdPlanet />}
                iconBackground={"mb-4 spanbg-warning span-warning"}
                firstBadge={"Marketing"}
                secondBadge={"Product"}
                thirdBadge={"Launch"}
                headingClass={"text-warning"}
                heading={"Download Argon"}
                btnClass={"btn btn-warning mt-4"}
                content={
                  "Argon is a great free UI package based on Angular that includes the most important components and features."
                }
                badgeClassName={"spanbg-warning span-warning badge-pill m-0"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingCards;
