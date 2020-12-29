import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className="text-center">Постов нету</p>;
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />);
};

//Функция преобразовывает State в Props
const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    };
};

export default connect(mapStateToProps, null)(Posts);
