import React from "react";
import Heading from "../../components/UI/Heading";
import Alert from "../../components/UI/Alert";
import { AiFillLike } from "react-icons/ai";
import {FaBell} from 'react-icons/fa';
import {MdSupport} from 'react-icons/md'

function Alerts() {
  return (
    <section className="alerts">
      <div className="container">
        <Heading className={"mb-4 mt-96p heading"} content={"Alerts"} />
        <Alert
          className={"alert-container bgcolor-success"}
          content={
            <span>
              <span>Success!</span> This is a success alert—check it out!
            </span>
          }
          icon={<AiFillLike />}
        />
        <Alert
          className={"alert-container bgcolor-info"}
          content={
            <span>
              <span>Info!</span> This is an info alert—check it out!
            </span>
          }
          icon={<FaBell />}
        />
        <Alert
          className={"alert-container bgcolor-warning"}
          content={
            <span>
              <span>Warning!</span> This is a warning alert—check it out!
            </span>
          }
          icon={<FaBell />}
        />
        <Alert
          className={"alert-container bgcolor-danger"}
          content={
            <span>
              <span>Danger!</span> This is a danger alert—check it out!
            </span>
          }
          icon={<MdSupport />}
        />
      </div>
    </section>
  );
}

export default Alerts;
