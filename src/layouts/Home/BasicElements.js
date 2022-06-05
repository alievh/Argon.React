import React from "react";
import Button from "../../components/Button";
import Links from "../../components/Links";
import SubHeading from "../../components/SubHeading";
import CategoryHeading from "../../components/CategoryHeading";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Heading from "../../components/Heading";

function BasicElements() {
  return (
    <section className="basic-elements">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Heading className={"mb-5 heading"} content={"Basic Elements"} />
            <SubHeading className={"mb-4 sub-heading"} content={"Buttons"} />
            <div className="button-size">
              <Button
                className={"btn btn-primary"}
                type={"button"}
                content={"BUTTON"}
              />
              <Button
                className={"btn btn-primary"}
                type={"button"}
                content={"WITH ICON"}
                icon={<RiShoppingBag3Fill size={20} />}
              />
              <Button
                className={"btn btn-primary"}
                type={"button"}
                icon={<RiShoppingBag3Fill size={20} />}
              />
              <CategoryHeading
                divClassName={"mb-3 mt-5 category-heading"}
                textClassName={"text-uppercase"}
                content={"Pick your size"}
              />
              <Button
                className={"btn btn-primary btn-sm"}
                type={"button"}
                content={"SMALL"}
              />
              <Button
                className={"btn btn-primary btn-md"}
                type={"button"}
                content={"REGULAR"}
              />
              <Button
                className={"btn btn-primary btn-lg"}
                type={"button"}
                content={"LARGE BUTTON"}
              />
            </div>
            <CategoryHeading
              divClassName={"mb-3 mt-5 category-heading"}
              textClassName={"text-uppercase"}
              content={"Pick your color"}
            />
            <Button
              className={"btn btn-primary"}
              type={"button"}
              content={"PRIMARY"}
            />
            <Button
              className={"btn btn-info"}
              type={"button"}
              content={"INFO"}
            />
            <Button
              className={"btn btn-success"}
              type={"button"}
              content={"SUCCES"}
            />
            <Button
              className={"btn btn-warning"}
              type={"button"}
              content={"WARNING"}
            />
            <Button
              className={"btn btn-danger"}
              type={"button"}
              content={"DANGER"}
            />
            <Button
              className={"btn btn-light"}
              type={"button"}
              content={"NEUTRAL"}
            />
            <CategoryHeading
              divClassName={"mb-3 mt-5 category-heading"}
              textClassName={"text-uppercase"}
              content={"Outline"}
            />
            <Button
              className={"btn btn-outline-primary"}
              type={"button"}
              content={"OUTLINE-PRIMARY"}
            />
            <Button
              className={"btn btn-outline-info"}
              type={"button"}
              content={"OUTLINE-INFO"}
            />
            <Button
              className={"btn btn-outline-success"}
              type={"button"}
              content={"OUTLINE-SUCCES"}
            />
            <Button
              className={"btn btn-outline-warning"}
              type={"button"}
              content={"OUTLINE-WARNING"}
            />
            <Button
              className={"btn btn-outline-danger"}
              type={"button"}
              content={"OUTLINE-DANGER"}
            />
            <CategoryHeading
              divClassName={"mb-3 mt-5 category-heading"}
              textClassName={"text-uppercase"}
              content={"Links"}
            />
            <Links
              className={"btn btn-link text-default"}
              content={"DEFAULT"}
            />
            <Links
              className={"btn btn-link text-primary"}
              content={"PRIMARY"}
            />
            <Links className={"btn btn-link text-info"} content={"INFO"} />
            <Links
              className={"btn btn-link text-success"}
              content={"SUCCESS"}
            />
            <Links
              className={"btn btn-link text-warning"}
              content={"WARNING"}
            />
            <Links className={"btn btn-link text-danger"} content={"DANGER"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicElements;
