import React from "react";

function Modal({
    buttonText,
    modalHeader,
    modalBody,
    modalHeadButton
}) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary modal-head-button ${modalHeadButton}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {buttonText}
      </button>
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {modalHeader}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{modalBody}</div>
              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
