import React from "react";
import Alerts from "./Alerts";
import JsComponents from "./JsComponents";
import Tabs from "./Tabs";
import Typography from './Typography';

function HomeMain() {
  return (
    <section className="home-main">
      <Tabs />
      <Alerts />
      <Typography />
      <JsComponents />
    </section>
  );
}

export default HomeMain;
