import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/home.css'
export default function Home() {
  return <>
      <section className="bg-img">
        <div className="container middle">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <img src={logo} className="img"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 btn-res">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Link to="/newcustomer" className="btn1 btn-lg btn-block">
                            <span>NEW</span>
                            </Link>
                        </div>
                        <div className="col-md-6">
                                <Link to="/existcustomer" className="btn1 btn-lg btn-block">
                            <span>EXISTING</span>
                            </Link>
                        </div>
                    </div>                 
                </div>  
            </div>
        </div>
    </section>
  </>;
}
