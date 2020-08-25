import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import User from '../User/User';

const List = () => {
    const [users, setUsers] = useState(fakeData);
    console.log(fakeData);


    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2">
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default List;