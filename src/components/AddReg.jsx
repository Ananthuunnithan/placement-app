import React from 'react'

const AddReg = () => {
    return (
        <div>

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Number</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Aadhar Number</label>
                                <input type="tel" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">E-mail Address</label>
                                <input type="text" className="form-control" placeholder="abc@mail" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Branch/Department</label>
                                <input type="text" className="form-control" />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">SSLC Mark%</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">UG Degree</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">


                                <label htmlFor="" className="form-label">UG mark%</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">


                                <label htmlFor="" className="form-label">PG Degree</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">


                                <label htmlFor="" className="form-label">PG mark%</label>
                                <input type="text " className="form-control" />

                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddReg