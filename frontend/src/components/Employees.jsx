import React from 'react'

function Employees() {
  return (
    <>
        <div>
        <main id='main' className='main'>
                    <div className="pagetitle">
                        <h1>Employees</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item">Masters</li>
                                <li className="breadcrumb-item active">Employees</li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Title */}
                    <section className='section'>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body mt-3">

                                        {/* <!-- Multi Columns Form --> */}
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="inputName5" className="form-label">Name*</label>
                                                <input type="text" className="form-control" id="inputName5" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputSurname5" className="form-label">Surname*</label>
                                                <input type="text" className="form-control" id="inputSurname5" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputPosition5" className="form-label">Position*</label>
                                                <input type="text" className="form-control" id="inputPosition5" />
                                            </div>
                            
                                            <div className="col-md-4">
                                                <label htmlFor="inputCity" className="form-label">Email*</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputMobileNo" className="form-label">Mobile No*</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputAltMobileNo" className="form-label"> Password *</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>

                                            <div className="text-start">
                                                <button type="submit" className="btn btn-primary ">Submit</button>
                                                <button type="reset" className="btn btn-secondary m-2">Cancel</button>
                                            </div>
                                        </form>
                                        {/* <!-- End Multi Columns Form --> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>


                </main>
        </div>
    </>
  )
}

export default Employees