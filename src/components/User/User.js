import React from 'react';
import "./User.css";

const User = (props) => {
    const {name, userName, phone, website, background, image, salary, email} = props.user;
    return (
        <div className="user col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={background} className="card-img-top" alt="..." />
                    <img className="profile-pic d-block mx-auto" src={image} alt=""/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>         
    );
};

export default User;