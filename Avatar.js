import React, { component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';

const Avatar = (props) => {
    return ( <div>
        <h1>Welcome to Avatar world </h1>
        <Avatarlist name="Naman" work="Mobile app developer" />
        <Avatarlist name= "nishant" work="web developer"/>
        <Avatarlist name= "rajesh" work="web designer"/>
        <Avatarlist name= "rainesh" work="web hoster"/>
    <button> Subscribe </button>
    </div>
    )
}

export default Avatar;