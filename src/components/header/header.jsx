import './header.css'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  

function Header({isActive, setIsActive}){
    

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return(
        <header>
            <Link to="/" onClick={()=>{
                if (isActive === true) {
                    setIsActive(!isActive)
                }
            }}>
                <p>dev<span className="red">eloper</span></p>
            </Link>
            <div className={`menuBtn ${isActive ? 'active' : ''}`} onClick={handleClick}>
                <div className="line" onClick={handleClick}></div>
                <div className="line" onClick={handleClick}></div>
                <div className="line" onClick={handleClick}></div>
            </div>
        </header>
    )
}

export default Header;