import React from "react";

function ProgressBar({progressClassName, percentage }) {
  return (
    <div className="progress-wrapper d-flex flex-column">
      <div className="progress-info d-flex justify-content-between">
        <div className="progress-label">
          <span>Task Completed</span>
        </div>
        <div className="progress-percentage">
          <span>{percentage}%</span>
        </div>
      </div>
      <div className="progress-bars">
        <div className="progress">
          <div
            className={progressClassName}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
