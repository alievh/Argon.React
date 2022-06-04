import React from 'react'
import Template from './Template'

function TemplatePhoto() {
  return (
    <div className='container-lg'>
        <div className='row'>
            <div className='col-md-6 mb-5 mb-md-0 img-container'>
                <Template location={"https://demos.creative-tim.com/argon-design-system-angular/#/landing"} imgClassName={"rounded img-fluid"} alt={"Landing Page"} src={"https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/landing.jpg"} />
            </div>
            <div className='col-md-6 mb-5 mb-md-0 img-container'>
                <Template location={"https://demos.creative-tim.com/argon-design-system-angular/#/user-profile"} imgClassName={"rounded img-fluid"} alt={"Profile Page"} src={"https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/profile.jpg"} />
            </div>
        </div>
    </div>
  )
}

export default TemplatePhoto