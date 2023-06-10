import './header.css'
import { useState } from 'react';

function Header({isActive, setIsActive}){
    

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return(
        <header>
            <p>dev<span className="red">eloper</span></p>
            <div className={`menuBtn ${isActive ? 'active' : ''}`} onClick={handleClick}>
                <div className="line" onClick={handleClick}></div>
                <div className="line" onClick={handleClick}></div>
                <div className="line" onClick={handleClick}></div>
            </div>
        </header>
    )
}

export default Header;