import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import User from '../User/User';
import Counter from '../Counter/Counter';

const List = () => {
    const allUsers = fakeData.map(user => {
        user.isConnected = false;
        return user;
    })
    
    const [users, setUsers] = useState(allUsers);
    
    const [connected, setConnected] = useState([]);

    const handleAddFriend = (user, status) => {
        if(status === 'notConnected'){
            setConnected([...connected, user]);
        }
        else{
            setConnected(connected.filter(person => person.id !== user.id));
        }

        const updatedUsers = users.map(person => {
            if(person.id === user.id){
               person = {...person, "isConnected": !person.isConnected}
            }
            return person;
        })
        setUsers(updatedUsers);   
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 py-5">
                    <h2 className="text-center pb-3 display-4">Buddy On Panda Tech</h2>
                    <div className="row row-cols-1 row-cols-lg-2 mx-3 mx-sm-5 mx-md-3">
                        {
                            users.map(user => <User user={user} handleAddFriend={handleAddFriend} key={user.id}></User>)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-5 my-sm-3 my-md-5 mt-md-5">
                    <Counter connected={connected}></Counter>
                </div>
            </div>
        </div>
    );
};

export default List;