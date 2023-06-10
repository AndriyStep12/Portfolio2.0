import React from "react";

function Card(props){
    return (
        <div className="card">
            <div className="up">
                <div className="imageBlock" style={{backgroundImage: 'url(' + props.image +')'}}>
                    <a href={props.homepage}>{props.name}</a>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="down">
                <a href={props.link}>github link</a>
                <p>{props.likes} likes</p>
            </div>
        </div>
    )
}

export default Card;