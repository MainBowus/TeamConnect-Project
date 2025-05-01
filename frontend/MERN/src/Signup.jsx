import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name, email, password})
      .then(result => console.log(result))
      .catch(err=> console.log(err))
    }


  return (
<div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="bg-white p-4 rounded" style={{ minWidth: '300px', maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Register</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">Register</button>
          </div>
        </form>

        <div className="text-center">
          <p className="mb-2">Already Have an Account</p>
          <Link to="/login" className="btn btn-light border">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup