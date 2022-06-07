import React from "react";
import Heading from "../../components/UI/Heading";

function AmazingTeam() {
  return (
    <section className="amazing-team">
      <div className="container">
        <div className="row amazing-team__top mb-96p">
          <div className="col-lg-8">
            <Heading className={"mb-3 heading"} content={"The amazing Team"} />
            <p>
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmazingTeam;
