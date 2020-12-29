import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoader, showAlert, showLoader } from './actions';
import { FETCH_POSTS, REQUEST_POSTS } from './types';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader()); //yield put(action)- для того, чтобы выполнять запросы связаные со стором, аналогично с dispatch
        const payload = yield call(fetchPosts); //call - вызов функции
        yield put({ type: FETCH_POSTS, payload });
        yield put(hideLoader());
    } catch (error) {
        yield put(showAlert('Что-то пошло не так'));
        yield put(hideLoader());
    }
}

async function fetchPosts() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    return await response.json();
}
