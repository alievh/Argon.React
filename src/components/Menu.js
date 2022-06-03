import React from "react";
import Links from "./Links";

function Menu({
  className,
  logoContent,
  contentFirst,
  contentSecond,
  contentThird,
  iconFirst,
  iconSecond,
  iconThird
}) {
  return (
    <nav className={className}>
      <div className="container d-flex justify-content-between align-items-center">
        <Links
          className={"btn btn-link text-white p-0"}
          href={"#"}
          content={logoContent}
        />
        <ul className="d-flex">
          <li>
            <Links
              className={"btn btn-link text-white"}
              href={"#"}
              icon={iconFirst}
              content={contentFirst}
            />
          </li>
          <li>
            <Links
              className={"btn btn-link text-white"}
              href={"#"}
              icon={iconSecond}
              content={contentSecond}
            />
          </li>
          <li>
            <Links
              className={"btn btn-link text-white"}
              href={"#"}
              icon={iconThird}
              content={contentThird}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
