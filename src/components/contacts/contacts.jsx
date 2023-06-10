import './contacts.css'
import React from 'react'

let arr = {
    email: 'andystep.developer@gmail.com',
    number: '+380680803866',
    country: 'Ukraine'
}

function Contacts ({isActive}){
    return (
        <div className="contacts" style={!isActive ? {marginLeft: '0%', overflowY: 'scroll', transition: '1s'}: {marginLeft: '-100%', overflowY: 'auto', transition: '1s'}}>
            <div className="upper">
                <h2>Contacts</h2>
                <p>const email = <span className="red">'{arr.email}'</span></p>
                <p>const number = <span className="red">'{arr.number}'</span></p>
                <p>const country = <span className="red">'{arr.country}'</span></p>
            </div>
        </div>
    )
}

export default Contacts;