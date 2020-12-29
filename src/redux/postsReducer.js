import { CREATE_POST, FETCH_POSTS } from './types';

const initialState = {
    posts: [],
    fetchedPosts: []
};

//Pure functions - функции которые работают внезависимо от чего-либо

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([action.payload]) };
        // return { ...state, posts: [...state.posts, action.payload] };
        case FETCH_POSTS:
            return {
                ...state,
                fetchedPosts: action.payload
            };
        default:
            return state;
    }
};
