import React from 'react';
import "./User.css";

const User = (props) => {
    const {id, name, username, phone, website, background, image, salary, email, isConnected} = props.user;
    const handleAddFriend = props.handleAddFriend;
    const updateBtn = () => {
        if(isConnected){
            return (
                <button className="btn btn-outline-danger d-block mx-auto mb-3 rounded-pill" onClick={() => handleAddFriend(props.user, 'connected')}><i className="fas fa-arrow-right"></i> Request Sent</button>
            )
        }
        else{
            return (
                <button className="btn btn-outline-primary d-block mx-auto mb-3 rounded-pill" onClick={() => handleAddFriend(props.user, 'notConnected')}><i className="fas fa-user-friends"></i> Add Friend</button>
            )
        }
    }
    return (
        <div className="user col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={background} className="card-img-top" alt="..." />
                    <img className="profile-pic d-block mx-auto" src={image} alt=""/>
                </div>
                <div className="card-body">
                    <div className="text-primary text-center pb-2">
                        <h3 className="card-title">{name}</h3>
                        <p><small><i className="fas fa-user"></i> {username}_{id}</small></p>
                    </div>
                    <div className="text-primary pl-4 pl-md-5">
                        <p><i className="fas fa-envelope"></i> {email}</p>
                        <p><i className="fas fa-voicemail"></i> {phone}</p>
                        <p><i className="fas fa-desktop"></i> {website}</p>
                        <p><i className="fas fa-wallet"></i> ${salary}</p>
                    </div>
                    {updateBtn()}
                </div>
            </div>
        </div>         
    );
};

export default User;