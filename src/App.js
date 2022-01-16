import React, {useState} from 'react';

import './App.css'


import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import {urls} from "./configs/urls";
import Posts from "./components/Posts/Posts";

const App = () => {

    let [userDetail, setUserDetail] = useState(null);
    let [post, setPost] = useState([]);


    function getDetail(id) {
        fetch(`${urls.users}?id=${id}`)
            .then(value => value.json())
            .then((value) => {
                setUserDetail(value)
                setPost([])
            })


    }

    function getPost(id) {
        fetch(`${urls.posts}?userId=${id}`)
            .then(value => value.json())
            .then(value => setPost(value))


    }

    return (
        <div>
            <div className={'main__users'}>
                <div className={'user__left'}>

                    <Users getDetail={getDetail}/>

                </div>
                <div className={'user__right'}>

                    {userDetail && userDetail.map(user => <UserDetail getPost={getPost} key={user.id}
                                                                      userDetail={user}/>)}

                </div>

            </div >
            <div className={'post__main'}>

                {!!post.length && <Posts post={post}/>}
            </div>
        </div>
    );
};

export default App;