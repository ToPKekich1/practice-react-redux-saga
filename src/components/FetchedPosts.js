import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './loader';
import Post from './Post';

const FetchedPosts = () => {
    const dispatch = useDispatch(); //Метод позволяет диспатчить какие-то экшны в стор в функциональном компоненте
    const posts = useSelector(state => state.posts.fetchedPosts); //Обозначаем некоторый селектор что нам нужно     забрать с store
    const loading = useSelector(state => state.app.loading);

    if (loading) {
        //загрузка
        return <Loader />;
    }
    if (!posts.length) {
        return (
            <button
                className="btn btn-primary"
                onClick={() => dispatch(fetchPosts())}>
                Загрузить посты
            </button>
        );
    }

    return posts.map(post => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
