import React from "react";
import {Link} from 'react-router-dom';
import '../style/login.css'
export default function Error() {

  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const username = (event) =>{
    setName(event.target.value)
  }

   const userpassword = (event) =>{
    setPassword(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(password)
  }
  return <section className="container">
      <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" className="form-control" name="username" value={name} onChange={username}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={password} onChange={userpassword} />
        </div>
        <Link to="/home"><button type="submit" className="btn btn-primary" >Login</button></Link>
        </form>
      </div>
  </section>;
}