import React from 'react';
import CategoryHeading from '../components/CategoryHeading';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import ToolTip from '../components/ToolTip';

function JsComponents() {
  return (
    <section className='js-components'>
        <div className='container'>
        <Heading className={"mb-5 mt-96p heading"} content={"Javascript Components"} />
        <SubHeading className={"mb-4 sub-heading"} content={"Modals"} />
        <SubHeading className={"mb-4 mt-64p sub-heading"} content={"Datepicker"} />
        <SubHeading className={"mb-4 mt-64p sub-heading"} content={"Tooltips & Popovers"} />
        <div className='row'>
            <div className='col-lg-6'>
            <CategoryHeading
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"Tooltips"}
              />
              <ToolTip content={"ON LEFT"} toolTipContent={"Tooltip on left"} placement={"left"} />
            </div>
            <div className='col-lg-6'>
            <CategoryHeading
                divClassName={"mb-3 category-heading"}
                textClassName={"text-uppercase"}
                content={"Popovers"}
              />
            </div>
        </div>
        </div>
    </section>
  )
}

export default JsComponents