import React from 'react';
import './Counter.css';

const Counter = (props) => {
    const connected = props.connected;

    return (
        <div className="container bg-info text-white my-4 text-center">
            <h2 className="py-3">Friend Request Sent: {connected.length}</h2>
            {
                connected.map(user => 
                    <div className="friend">
                        <h5>{user.name} - {user.email}</h5> 
                    </div>
                    )
            }
        </div>
    );
};

export default Counter;