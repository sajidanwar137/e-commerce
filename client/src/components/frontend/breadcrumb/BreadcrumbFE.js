import React from 'react'
import './index.scss';

const BreadcrumbFE = () => {
  return (
    <div className='dc-breadcrumb'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-12'>
              <ul className='d-flex dc-breadcrumb__list'>
                <li className='py-4 d-flex justify-content-start align-items-center'><a href=""><span className='dc-icon-home'></span></a><span className='dc-icon-arrow-right'></span></li>
                <li className='py-4 d-flex justify-content-start align-items-center'><a href="">Link 1</a><span className='dc-icon-arrow-right'></span></li>
                <li className='py-4 d-flex justify-content-start align-items-center'><span>Link 2</span><span className='dc-icon-arrow-right'></span></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbFE
