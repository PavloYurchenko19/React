import {configureStore} from "@reduxjs/toolkit";

import usersReduce from "./users.slice";
import postsReduce from "./posts.slice";
import commentsReduce from "./commetns.slice";
import carsReduce from "./cars.slice";

const store = configureStore({
    reducer: {
        usersReduce,
        postsReduce,
        commentsReduce,
        carsReduce
    }
})
export default store