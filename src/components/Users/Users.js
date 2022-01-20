import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "../User/User";

const Users = ({filterUsers}) => {



    return (
        <div>
            {filterUsers.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export default Users;