import React from "react";
import {Link} from 'react-router-dom';
import '../style/login.css';
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
  return <section className="form-container">
            <div className="container">
              <div className="row justify-content-center">
                <div class="col-md-5 col-sm-5 col-lg-5 middle">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-icon">
                        <i className="fa fa-user-circle"></i>
                      </div>
                      <div className="form-group">
                        <span className="input-icon"><i class="fa fa-user"></i></span>
                        <input class="form-control" placeholder="Username" name="username" value={name} onChange={username}/>
                      </div>
                      <div className="form-group">
                        <span className="input-icon"><i class="fa fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={userpassword}/>
                        <span className="forgot"><a href="">Forgot Password?</a></span>
                      </div>                      
                      <Link to="/home"><button type="submit" class="btn signin">Login</button></Link>
                    </form>
              </div>
            </div>
          </div>
      </section>
  
  ;
}