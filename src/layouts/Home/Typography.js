import React from "react";
import Avatar from "../../components/UI/Avatar";
import Heading from "../../components/UI/Heading";
import HeadingComponent from "../../components/UI/HeadingComponent";
import SubHeading from "../../components/SubHeading";

function Typography() {
  return (
    <section className="typography">
      <div className="container">
        <Heading className={"mb-5 mt-96p heading"} content={"Typography"} />
        <SubHeading className={"mb-2 sub-heading"} content={"Headings"} />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 1"}
          headingContent={<h1 className="">Argon Design System</h1>}
        />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 2"}
          headingContent={<h2>Argon Design System</h2>}
        />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 3"}
          headingContent={<h3>Argon Design System</h3>}
        />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 4"}
          headingContent={<h4>Argon Design System</h4>}
        />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 5"}
          headingContent={<h5>Argon Design System</h5>}
        />
        <HeadingComponent
          className={"heading-component"}
          headingTitle={"Heading 6"}
          headingContent={<h6>Argon Design System</h6>}
        />
        <SubHeading
          className={"mb-2 mt-64p sub-heading"}
          content={"Display titles"}
        />
        <HeadingComponent
          className={"display-component"}
          headingTitle={"Display 1"}
          headingContent={<h1>Argon Design System</h1>}
        />
        <HeadingComponent
          className={"display-component"}
          headingTitle={"Display 2"}
          headingContent={<h2>Argon Design System</h2>}
        />
        <HeadingComponent
          className={"display-component"}
          headingTitle={"Display 3"}
          headingContent={<h3>Argon Design System</h3>}
        />
        <HeadingComponent
          className={"display-component"}
          headingTitle={"Display 4"}
          headingContent={<h4>Argon Design System</h4>}
        />
        <SubHeading
          className={"mb-2 mt-64p sub-heading"}
          content={"Specialized titles"}
        />
        <HeadingComponent
          className={"specialized-titles"}
          headingTitle={"Heading"}
          headingContent={<h3 className="heading">Argon Design System</h3>}
        />
        <HeadingComponent
          className={"specialized-titles"}
          headingTitle={"Heading Title"}
          headingContent={
            <h3 className="heading-title">Argon Design System</h3>
          }
        />
        <HeadingComponent
          className={"specialized-titles"}
          headingTitle={"Heading Seaction"}
          headingContent={
            <div className="heading-seaction">
              <h3>Header with small subtitle</h3>
              <p>
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          }
        />
        <SubHeading
          className={"mb-2 mt-64p sub-heading"}
          content={"Paragraphs"}
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Paragraph"}
          headingContent={
            <p className="paragraph-text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Lead Text"}
          headingContent={
            <p className="lead-text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that's a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Quote"}
          headingContent={
            <div>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <span> Someone famous in Source Title</span>
            </div>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Muted Text"}
          headingContent={
            <p className="textcolor-muted">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Primary Text"}
          headingContent={
            <p className="textcolor-primary">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Info Text"}
          headingContent={
            <p className="textcolor-info">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Success Text"}
          headingContent={
            <p className="textcolor-success">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Warning Text"}
          headingContent={
            <p className="textcolor-warning">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <HeadingComponent
          className={"paragraph"}
          headingTitle={"Danger Text"}
          headingContent={
            <p className="textcolor-danger">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          }
        />
        <Heading className={"mb-5 mt-96p heading"} content={"Images"} />
        <div className="row avatar-section">
          <div className="col-sm-3 col-6">
            <Avatar
              title={<small>Image</small>}
              alt={"Image"}
              src={
                "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-1-800x800.jpg"
              }
              imgClass={"img-fluid rounded shadow"}
              width={"150px"}
            />
          </div>
          <div className="col-sm-3 col-6">
            <Avatar
              title={<small>Circle Image</small>}
              alt={"Circle Image"}
              src={
                "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-2-800x800.jpg"
              }
              imgClass={"img-fluid rounded-circle shadow"}
              width={"150px"}
            />
          </div>
          <div className="col-sm-3 col-6">
            <Avatar
              title={<small>Raised</small>}
              alt={"Raised"}
              src={
                "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-3-800x800.jpg"
              }
              imgClass={"img-fluid rounded shadow-lg"}
              width={"150px"}
            />
          </div>
          <div className="col-sm-3 col-6">
            <Avatar
              title={<small>Circle Raised</small>}
              alt={"Circle Raised"}
              src={
                "https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/team-4-800x800.jpg"
              }
              imgClass={"img-fluid rounded-circle shadow-lg"}
              width={"150px"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Typography;
