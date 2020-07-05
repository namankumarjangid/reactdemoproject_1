import React from 'react';

const Avatarlist = (props) => {
    return(
        <div className="pic ma4 bg-light-blue dib pa4 tc grow">
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
        <img src={'https://joeschmoe.io/api/v1/${props.name}'} alt="Avatar" />
        <h1> {props.name} </h1>
        <p> {props.work} </p>
    </div>
    )
}

export default Avatarlist;