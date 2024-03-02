import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({bannerTitle,classes}) => {
  return (
    <div className={`breadcrumb-area ${classes} text-center`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1>{bannerTitle}</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/login">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="active verticel-ine">{bannerTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Banner