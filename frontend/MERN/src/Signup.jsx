import { useState } from 'react'

function Signup() {

  return (
<div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="bg-white p-4 rounded" style={{ minWidth: '300px', maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Register</h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">Register</button>
          </div>
        </form>

        <div className="text-center">
          <p className="mb-2">Already Have an Account</p>
          <button className="btn btn-light border">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup