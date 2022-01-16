import React from 'react';


import './User.css'

const User = ({user: {id, name}, getDetail}) => {

    return (
        <div className={'user'}>
            <div>

                {id}) {name}

            </div>
            <div>

                <button onClick={() => getDetail(id)}>User Details</button>

            </div>
        </div>
    );
};

export default User;