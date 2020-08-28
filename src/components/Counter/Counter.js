import React from 'react';
import './Counter.css';

const Counter = (props) => {
    const connected = props.connected;
    const handleAddFriend = props.handleAddFriend;
    let totalSalary = connected.reduce((total, person) => {
        const previous = parseInt((total).split(',').join(''));
        const salary = parseInt((person.salary).split(',').join(''));
        const result = (previous + salary).toLocaleString();
        return result;
    },'0');


    return (
        <div className="container-fluid bg-info text-white my-4 text-center">
            <h2 className="py-3">Connection: {connected.length}</h2>
            {
                connected.map(user => 
                    <div className="friend d-flex justify-content-between align-items-center">
                        <img src={user.image} className="profile-img" alt="..." />
                        <h5>{user.name}</h5> 
                        <h6>${user.salary}</h6>
                        <button className="btn btn-outline-danger rounded-pill" onClick={() => handleAddFriend(user, 'isConnected')}><i class="fas fa-user-minus"></i></button>
                    </div>
                )
            }
            <h3 className="py-3">Total Salary of All Panda Tech Buddies: ${totalSalary}</h3>
        </div>
    );
};

export default Counter;