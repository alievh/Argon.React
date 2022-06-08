import React from "react";
import CategoryHeading from "../../components/UI/CategoryHeading";
import Heading from "../../components/UI/Heading";
import SubHeading from "../../components/SubHeading";
import DateInput from "../../components/UI/DateInput";
import Modal from "../../components/UI/Modal";
import Button from "../../components/Buttons/Button";

function JsComponents() {
  return (
    <section className="js-components">
      <div className="container">
        <Heading
          className={"mb-5 mt-96p heading"}
          content={"Javascript Components"}
        />
        <SubHeading className={"mb-4 sub-heading"} content={"Modals"} />
        <div className="row modal-container">
          <div className="col-md-4">
            <Modal
              buttonText={"DEFAULT"}
              modalHeader={<h5>Type your modal title</h5>}
              modalBody={
                <div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              }
            />
          </div>
          <div className="col-md-4">
            <Modal
              buttonText={"NOTIFICATION"}
              modalHeader={<h5>Type your modal title</h5>}
              modalHeadButton={"bgcolor-warning"}
              modalBody={
                <div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              }
            />
          </div>
          <div className="col-md-4">
            <Modal
              buttonText={"FORM"}
              modalHeader={<h5>Type your modal title</h5>}
              modalHeadButton={"bg-default"}
              modalBody={
                <div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <SubHeading
          className={"mb-4 mt-64p sub-heading"}
          content={"Datepicker"}
        />
        <div className="row">
          <div className="col-md-4">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"SINGLE DATE"}
            />
            <DateInput type={"date"} inputClassName={"date date-input"} />
          </div>
          <div className="col-md-4">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"DATE RANGE"}
            />
            <DateInput type={"week"} inputClassName={"week date-input"} />
          </div>
          <div className="col-md-4">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"DATE RANGE"}
            />
            <DateInput type={"week"} inputClassName={"week date-input"} />
          </div>
        </div>
        <SubHeading
          className={"mb-4 mt-64p sub-heading"}
          content={"Tooltips & Popovers"}
        />
        <div className="row">
          <div className="col-lg-6">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"Tooltips"}
            />
            <Button
              className={"btn btn-primary btn-sm me-2"}
              type={"button"}
              content={"ON LEFT"}
            />
            <Button
              className={"btn btn-primary btn-sm me-2"}
              type={"button"}
              content={"ON TOP"}
            />
            <Button
              className={"btn btn-primary btn-sm me-2"}
              type={"button"}
              content={"ON BOTTOM"}
            />
            <Button
              className={"btn btn-primary btn-sm me-2"}
              type={"button"}
              content={"ON RIGHT"}
            />
          </div>
          <div className="col-lg-6">
            <CategoryHeading
              divClassName={"mb-3 category-heading"}
              textClassName={"text-uppercase"}
              content={"Popovers"}
            />
            <Button
              className={"btn btn-dark btn-sm me-2"}
              type={"button"}
              content={"ON LEFT"}
            />
            <Button
              className={"btn btn-dark btn-sm me-2"}
              type={"button"}
              content={"ON TOP"}
            />
            <Button
              className={"btn btn-dark btn-sm me-2"}
              type={"button"}
              content={"ON BOTTOM"}
            />
            <Button
              className={"btn btn-dark btn-sm me-2"}
              type={"button"}
              content={"ON RIGHT"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JsComponents;
