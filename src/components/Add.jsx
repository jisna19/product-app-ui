import React from 'react'
import NavBar from './NavBar'

const Add = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                <div className="row g-3">
                    <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">code</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">price</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">category</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add