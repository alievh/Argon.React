import React from "react";
import Button from "../Buttons/Button";
import BadgePill from "./BadgePill";
import LandingIcon from "./LandingIcon";

function LandingCard({
  btnClass,
  headingClass,
  badgeClassName,
  heading,
  content,
  firstBadge,
  secondBadge,
  thirdBadge,
  icon,
  iconBackground
}) {
  return (
    <div className="col-lg-4 my-3">
      <div className="card-body shadow py-5 px-4">
          <LandingIcon icon={icon} iconBackground={iconBackground} />
        <h6 className={headingClass}>{heading}</h6>
        <p className="my-3">{content}</p>
        <div>
          <BadgePill className={badgeClassName} content={firstBadge} />
          <BadgePill className={badgeClassName} content={secondBadge} />
          <BadgePill className={badgeClassName} content={thirdBadge} />
        </div>
        <Button content={"LEARN MORE"} type={"button"} className={btnClass} />
      </div>
    </div>
  );
}

export default LandingCard;
