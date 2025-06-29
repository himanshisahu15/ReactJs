import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from './reduxApiSaga.js'
import axios from 'axios';

//workeer saga
function* fetchDataWorker() {
    const api="https://dummyjson.com/products";
    try {
        
        const response = yield call(axios.get, api);
        //put-dispatch action to store
        yield put(fetchProductSuccess(response.data.products));
    } catch (error) {
        yield put(fetchProductFailure(error.message));

    }
}

//watcher saga
function* watchFetchData() {
    yield takeEvery(fetchProductRequest, fetchDataWorker);
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
    ])
}