import React from "react";

function Tab({
  firstIcon,
  firstTab,
  secondIcon,
  secondTab,
  thirdIcon,
  thirdTab,
  firstTabText,
  secondTabText,
  thirdTabText,
  firstTarget,
  secondTarget,
  thirdTarget
}) {
  return (
    <>
      <ul class="d-flex justify-content-between nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item col-lg-4" role="presentation">
          <button
            className="nav-link active shadow"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target={`#${firstTarget}`}
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            {firstIcon}{firstTab}
          </button>
        </li>
        <li class="nav-item col-lg-4" role="presentation">
          <button
            className="nav-link shadow"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target={`#${secondTarget}`}
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            {secondIcon}{secondTab}
          </button>
        </li>
        <li className="nav-item col-lg-4" role="presentation">
          <button
            className="nav-link shadow"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target={`#${thirdTarget}`}
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            {thirdIcon}{thirdTab}
          </button>
        </li>
      </ul>
      <div className="tab-content shadow p-4" id="pills-tabContent">
        <div
          className="tab-pane fade show rounded active"
          id={firstTarget}
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex='0'
        >
          {firstTabText}
        </div>
        <div
          className="tab-pane rounded fade"
          id={secondTarget}
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex='0'
        >
          {secondTabText}
        </div>
        <div
          className="tab-pane rounded fade"
          id={thirdTarget}
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex='0'
        >
          {thirdTabText}
        </div>
      </div>
    </>
  );
}

export default Tab;
