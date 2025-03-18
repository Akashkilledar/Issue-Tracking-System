import React from 'react'

function Customers() {
    return (
        <>

        
            <div>

                <main id='main' className='main'>
                    <div className="pagetitle">
                        <h1>Customers</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item">Masters</li>
                                <li className="breadcrumb-item active">Customers</li>
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
                                            <div className="col-md-6">
                                                <label htmlFor="inputName5" className="form-label">Name*</label>
                                                <input type="text" className="form-control" id="inputName5" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputAddress5" className="form-label">Address*</label>
                                                <input type="text" className="form-control" id="inputAddress5"  placeholder="1234 Main St"/>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputCity" className="form-label">City*</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputMobileNo" className="form-label">Mobile No*</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputAltMobileNo" className="form-label">Alternate Mobile No*</label>
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

export default Customers