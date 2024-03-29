import React from 'react'
import {  Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <center><a className="navbar-brand" href="#" style={{ marginLeft: "20px" }}>Music Player</a></center>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               <center> <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                    <Link to="/" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Home</a></Link><br></br>
                    <Link to="/singer" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Singers</a></Link><br></br>
                    <Link to="/album" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Albums</a></Link>



                    </div>
                </div></center>
            </nav>
        </div>
    )
}