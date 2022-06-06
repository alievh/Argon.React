import React from "react";
import Links from "../../components/Buttons/Links";
import Avatar from "../../components/UI/Avatar";
import UserStatistic from "../../components/UserStatistic";

let loggedUser = "No User";

export function getFullName() {
  let userInfo = "No User";
  const fullName = document.querySelector(".user-info__fullname");
  console.log(fullName);
  console.log(userInfo.name);
  if (sessionStorage.length === 0) {
    loggedUser = userInfo;
  } else {
    userInfo = JSON.parse(sessionStorage.getItem("loggedUser"));
    loggedUser = userInfo.name;
  }
}

function UserInfo() {
  return (
    <section className="user-info">
      <div className="container">
        <div className="card card-profile shadow">
          <div className="px-4">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <Avatar
                  imgClass={"rounded-circle user-info__avatar"}
                  src={"https://picsum.photos/150/150"}
                  alt={"User Avatar"}
                />
              </div>
              <div className="col-lg-4 order-lg-3"></div>
              <div className="col-lg-4 order-lg-1 d-flex py-3">
                <UserStatistic
                  statisticCount={"22"}
                  statisticName={"Friends"}
                />
                <UserStatistic statisticCount={"10"} statisticName={"Photos"} />
                <UserStatistic
                  statisticCount={"89"}
                  statisticName={"Comments"}
                />
              </div>
            </div>
            <div className="text-center mt-5">
              <h3
                className="user-info__fullname"
                dangerouslySetInnerHTML={{ __html: loggedUser }}
              />
              <div className="user-info__country">
                <span>Bucharest, Romania</span>
              </div>
              <div className="user-info__profession">
                <span>Solution Manager - Creative Tim Officer</span>
              </div>
              <div className="user-info__university">
                <span>University of Computer Science</span>
              </div>
            </div>
            <div className="text-center mt-5 py-5 border-top">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <p className="user-info__information">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <Links content={"Show more"} link={"#"} className={"text-decoration-none"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
